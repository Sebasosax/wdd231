// ---------------------- VARIABLES ----------------------
const lat = -32.89018; 
const lon = -68.84427;
const appid = "6ec2071e365d5c527d6c5356fc12c3aa";

// ELEMENTOS HTML
const currentTempEl = document.getElementById("current-temp");
const weatherDescEl = document.getElementById("weather-desc");
const forecastEl = document.getElementById("forecast");


function getWeatherEmoji(desc) {
  desc = desc.toLowerCase();
  if (desc.includes("clear")) return "☀️";
  if (desc.includes("cloud")) return "☁️";
  if (desc.includes("rain")) return "🌧️";
  if (desc.includes("snow")) return "❄️";
  if (desc.includes("storm") || desc.includes("thunder")) return "⛈️";
  if (desc.includes("mist") || desc.includes("fog")) return "🌫️";
  return "🌡️";
}


function formatDate(dateStr) {
  const date = new Date(dateStr);
  return date.toLocaleDateString("en-US", { weekday: "short", month: "short", day: "numeric" });
}


async function fetchWeather() {
  try {
    
    const currentResp = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${appid}`
    );
    if (!currentResp.ok) throw new Error(`Weather API error: ${currentResp.status}`);
    const currentData = await currentResp.json();

    const temp = currentData.main.temp.toFixed(1);
    const desc = currentData.weather[0].description;
    const emoji = getWeatherEmoji(desc);

    currentTempEl.textContent = `Temperature: ${temp}°C`;
    weatherDescEl.textContent = `${emoji} ${desc}`;

   
    const forecastResp = await fetch(
      `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&units=metric&appid=${appid}`
    );
    if (!forecastResp.ok) throw new Error(`Forecast API error: ${forecastResp.status}`);
    const forecastData = await forecastResp.json();

    forecastEl.innerHTML = "";

  
    const forecastByDay = {};
    forecastData.list.forEach(item => {
      const date = item.dt_txt.split(" ")[0];
      const hour = item.dt_txt.split(" ")[1];
      if (!forecastByDay[date] && hour === "12:00:00") {
        forecastByDay[date] = item;
      }
    });


    const days = Object.keys(forecastByDay).slice(0, 3);
    days.forEach(date => {
      const day = forecastByDay[date];
      const dayDiv = document.createElement("div");
      dayDiv.classList.add("forecast-day");

      const dayEmoji = getWeatherEmoji(day.weather[0].description);
      dayDiv.innerHTML = `
        <strong>${formatDate(day.dt_txt)}</strong><br>
        ${dayEmoji} ${day.main.temp.toFixed(1)}°C – ${day.weather[0].description}
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
