function formatDate(timestamp) {
  let date = new Date(timestamp);
  let hours = date.getHours();
  if (hours < 10) {
    hours = `0 ${hours}`;
  }

  let minutes = date.getMinutes();
  if (hours < 10) {
    hours = `0 ${minutes}`;
  }

  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  let day = days[date.getDay()];
  return `${day} ${hours}:${minutes}`;
}

function forecastElement() {
  let forecastElement = document.querySelector("#weekly-forecast");
  forecastElement.innerHTML = `
   <div class="row">
          <div class = "col-2">
            <div class="weather-forecast-date">
            Thursday
            </div>
            <img src="images/partly cloudy.png" alt="" width="36" /><br />
            <div class="weather-forecast-temperatures">
            <span class="weather-forecast-temperature-max">18°</span> 
            <span class="weather-forecast-temperature-min">12°</span>
            </div>
          </div>
        </div>
  `;
}

function displayTemperature(response) {
  let temperatureElement = document.querySelector("#temperature");
  let cityElement = document.querySelector("#city");
  let forecastElement = document.querySelector("#forecast");
  let humidityElement = document.querySelector("#humidity");
  let windElement = document.querySelector("#wind");
  let dateElement = document.querySelector("#date");
  let iconElement = document.querySelector("#icon");

  temperatureElement.innerHTML = Math.round(response.data.temperature.current);
  cityElement.innerHTML = response.data.city;
  forcastElement.innerHTML = response.data.condition.description;
  humidityElement.innerHTML = response.data.temperature.humidity;
  windElement.innerHTML = Math.round(response.data.wind.speed);
  dateElement.innerHTML = formatDate(response.data.time * 1000);
  iconElement.setAttribute("src", `${response.data.condition.icon_url}`);
  iconElement.setAttribute("alt", response.data.condition.description);
}

function search(city) {
  let apiKey = "cea86aeaf9414de0b74t0d5132af8ebo";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
  axios.get(apiUrl).then(displayTemperature);
}

function handleSubmit(event) {
  event.preventDefault();
  let cityInputElement = document.querySelector("#city-input");
  search(cityInputElement.value);
}

search("New York");

displayForecast();

let form = document.querySelector("#search-form");
form.addEventListener("submit", handleSubmit);
