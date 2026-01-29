const apiKey = "f58d20c232c383d825f86d44837d4db0";
const lat = -32.887138280959654;
const lon = -68.83439814890006;

const currentTempEl = document.getElementById("current-temp");
const weatherDescEl = document.getElementById("weather-desc");
const forecastEl = document.getElementById("forecast");

// Convertir Kelvin a Celsius
function kelvinToCelsius(kelvin) {
  return (kelvin - 273.15).toFixed(1);
}

// Formatear fecha
function formatDate(timestamp) {
  const date = new Date(timestamp * 1000);
  return date.toLocaleDateString("en-US", { weekday: "short", month: "short", day: "numeric" });
}

// Mostrar clima
async function fetchWeather() {
  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=minutely,hourly,alerts&appid=${apiKey}&units=metric&lang=en`
    );
    const data = await response.json();

    if (!data.current) throw new Error("No current weather data");

    // Clima actual
    currentTempEl.textContent = `Temperature: ${data.current.temp.toFixed(1)}°C`;
    weatherDescEl.textContent = `Condition: ${data.current.weather[0].description}`;

    // Pronóstico de 3 días
    forecastEl.innerHTML = "";
    data.daily.slice(1, 4).forEach(day => {
      const dayDiv = document.createElement("div");
      dayDiv.classList.add("forecast-day");
      dayDiv.innerHTML = `
        <strong>${formatDate(day.dt)}</strong>: ${day.temp.day.toFixed(1)}°C, ${day.weather[0].description}
      `;
      forecastEl.appendChild(dayDiv);
    });
  } catch (error) {
    console.error("Error fetching weather data:", error);
    currentTempEl.textContent = "Unable to load weather data.";
    weatherDescEl.textContent = "";
    forecastEl.innerHTML = "";
  }
}

// Ejecutar
fetchWeather();
