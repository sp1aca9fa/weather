// TODO: Call the Weather API when the form is submitted
const API_BASE_URL = "https://api.openweathermap.org/data/2.5/";
const form = document.querySelector("form");
const searchBar = document.querySelector("#input");
const weatherCard = document.querySelector(".card");
const weatherInEl = document.querySelector("h1");
const dateEl = document.querySelector("#date");
const descriptionEl = document.querySelector("#description");
const iconEl = document.querySelector("#icon");
const temperatureEl = document.querySelector("#temperature");
const geolocationEl = document.querySelector("#currentLocation");
let currentLocation = "";

// TODO: Create a function to get the weather info
const fetchWeather = (event) => {
  // TODO: Replace the following line with the correct url
  // TODO: prevent default behavior of the form
  event.preventDefault();

  // checking for apiKey and sending an alert if no apiKey
  if (typeof apiKey === "undefined" || !apiKey) {
    alert("Please add your API key in config.js to use this app.");
  }

  if (searchBar.value === "" && !currentLocation) return;

  let url = "";
  if (currentLocation) {
    url = `${API_BASE_URL}weather?lat=${currentLocation.latitude}&lon=${currentLocation.longitude}&appid=${apiKey}&units=metric`;
    currentLocation = "";
  } else {
    const city = searchBar.value;
    url = `${API_BASE_URL}weather?q=${city}&appid=${apiKey}&units=metric`;
  }
  searchBar.value = "";

  fetch(url)
    .then(response => response.json())
    .then((data) => {
    // console.log(data);
    // TODO: Insert the weather info in the DOM (description, date, temperature...)
      weatherCard.classList.remove("d-none");
      weatherInEl.textContent = `Weather in ${data.name}`;
      dateEl.textContent = `${new Date().toLocaleString(undefined, { weekday: "long" })} ${new Date().toLocaleString()}`;
      descriptionEl.textContent = data.weather[0].description;
      iconEl.src = `${API_BASE_URL}img/w/${data.weather[0].icon}.png`;
      temperatureEl.textContent = `${Math.floor(parseInt(data.main.temp, 10))} °C`;
    });
};

const currentLocationWeather = (event) => {
  event.preventDefault();
  navigator.geolocation.getCurrentPosition((data) => {
    currentLocation = data.coords;
    // console.log(data.coords);
    fetchWeather(event);
  });
};

// TODO: Add an event listener to the form
// TODO: On submit, in the callback, call the getWeatherInfo function
form.addEventListener("submit", fetchWeather);
geolocationEl.addEventListener("click", currentLocationWeather);
