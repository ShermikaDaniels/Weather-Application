function displayTemperature(response) {
  let temperatureElement = document.querySelector("#temperature");
  temperatureElement.innerHTML = response.data.temperature.current;
}

let apiKey = "cea86aeaf9414de0b74t0d5132af8ebo";
let apiUrl =
  "https://api.shecodes.io/weather/v1/current?query=New York&key=cea86aeaf9414de0b74t0d5132af8ebo&units=metric";

axios.get(apiUrl).then(displayTemperature);
