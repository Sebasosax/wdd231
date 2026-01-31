const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');
const url = 'https://api.openweathermap.org/data/2.5/weather?lat=-32.89018&lon=-68.84427&units=metric&appid=6ec2071e365d5c527d6c5356fc12c3aa';

async function apiFetch() {
  try {
    // código que puede fallar
  } catch (error) {
    console.error(error);
  }
}
