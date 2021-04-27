function formatdate() {
  let today = document.querySelector("h3");
  today.innerHTML = `${day}, ${month} ${date}, ${year} | ${hour}:${minutes}`;
}

let now = new Date();
let day = now.getDay();
let year = now.getFullYear();
let month = now.getMonth();
let date = now.getDate();
let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday"
];
day = days[now.getDay()];
let months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December"
];
month = months[now.getMonth()];
let hour = now.getHours();
let minutes = now.getMinutes();

formatdate();

//

function searchCity(event) {
  event.preventDefault();
  let input = document.querySelector("#city");
  city.innerHTML = `${input.value}`;

  let apiKey = "ca3ccc787fe9a31582c95a99cdb93498";
  let apiUrl = "https://api.openweathermap.org/data/2.5/weather?q=";

  axios
    .get(`${apiUrl}${input.value}&units=metric&appid=${apiKey}`)
    .then(displayTemp);
}

function displayTemp(response) {
  let currentTemp = document.querySelector("#temperature");
  currentTemp.innerHTML = Math.round(response.data.main.temp);
}

function currentLocation(position) {
  let latitude = position.coords.latitude;
  let longitude = position.coords.longitude;
  let apiPositionKey = "ca3ccc787fe9a31582c95a99cdb93498";
  let apiPositionUrl = `https://api.openweathermap.org/data/2.5/weather?&units=metric&lat=${latitude}&lon=${longitude}`;
  axios.get(`${apiPositionUrl}&appid=${apiPositionKey}`).then(displayTemp);
}

function displayCity(event) {
  event.preventDefault();
  navigator.geolocation.getCurrentPosition(currentLocation);
}

let city = document.querySelector("h2");
let searchEngine = document.querySelector("#search");
searchEngine.addEventListener("submit", searchCity);

let currentLoc = document.querySelector("button");
currentLoc.addEventListener("click", displayCity);