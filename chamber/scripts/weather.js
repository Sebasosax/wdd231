const apiKey = "6ec2071e365d5c527d6c5356fc12c3aa";
const lat = -32.887138280959654;
const lon = -68.83439814890006;

const currentTempEl = document.getElementById("current-temp");
const weatherDescEl = document.getElementById("weather-desc");
const forecastEl = document.getElementById("forecast");

function formatDate(timestamp) {
  const date = new Date(timestamp * 1000);
  return date.toLocaleDateString("en-US", { weekday: "short", month: "short", day: "numeric" });
}

async function fetchWeather() {
  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${lon}&exclude=minutely,hourly,alerts&units=metric&lang=en&appid=${apiKey}`
    );

    if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);

    const data = await response.json();

    currentTempEl.textContent = `Temperature: ${data.current.temp.toFixed(1)}°C`;
    weatherDescEl.textContent = `Condition: ${data.current.weather[0].description}`;

    forecastEl.innerHTML = "";
    data.daily.slice(1, 4).forEach(day => {
      const dayDiv = document.createElement("div");
      dayDiv.classList.add("forecast-day");
      dayDiv.innerHTML = `<strong>${formatDate(day.dt)}</strong>: ${day.temp.day.toFixed(1)}°C, ${day.weather[0].description}`;
      forecastEl.appendChild(dayDiv);
    });
  } catch (error) {
    console.error("Error fetching weather data:", error);
    currentTempEl.textContent = "Unable to load weather data.";
    weatherDescEl.textContent = "";
    forecastEl.innerHTML = "";
  }
}

fetchWeather();
