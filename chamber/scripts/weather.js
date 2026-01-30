const apiKey = "6ec2071e365d5c527d6c5356fc12c3aa";
const lat = -32.8871;
const lon = -68.8344;

// ELEMENTOS HTML
const currentTempEl = document.getElementById("current-temp");
const weatherDescEl = document.getElementById("weather-desc");
const forecastEl = document.getElementById("forecast");

// FORMATEAR FECHA
function formatDate(timestamp) {
  const date = new Date(timestamp * 1000);
  return date.toLocaleDateString("en-US", {
    weekday: "short",
    month: "short",
    day: "numeric"
  });
}

// FETCH WEATHER + FORECAST
async function fetchWeather() {
  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=minutely,hourly,alerts&units=metric&lang=en&appid=${apiKey}`
    );

    if (!response.ok) throw new Error("Weather API error");

    const data = await response.json();

    // CLIMA ACTUAL
    currentTempEl.textContent = `Temperature: ${data.current.temp.toFixed(1)}°C`;
    weatherDescEl.textContent = `Condition: ${data.current.weather[0].description}`;

    // FORECAST (PRÓXIMOS 3 DÍAS)
    forecastEl.innerHTML = "";

    data.daily.slice(1, 4).forEach(day => {
      const dayDiv = document.createElement("div");
      dayDiv.classList.add("forecast-day");

      dayDiv.innerHTML = `
        <strong>${formatDate(day.dt)}</strong><br>
        ${day.temp.day.toFixed(1)}°C – ${day.weather[0].description}
      `;

      forecastEl.appendChild(dayDiv);
    });

  } catch (error) {
    console.error("Error fetching weather:", error);
    currentTempEl.textContent = "Unable to load weather data.";
    weatherDescEl.textContent = "";
    forecastEl.innerHTML = "";
  }
}

fetchWeather();
