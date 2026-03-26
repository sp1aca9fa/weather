# weather

A JavaScript web application that fetches and displays real-time weather data using the OpenWeatherMap API, based on user input or current location.

## Features

- Search weather by city name
- Display temperature, weather condition, and icon
- Fetch weather using user's current geolocation
- Dynamic UI updates without page reload
- Clean and modular JavaScript structure after refactoring

## Tech Stack

- JavaScript (ES6)
- HTML & CSS
- Bootstrap 5
- OpenWeatherMap API
- Browser Geolocation API
- Fetch API

## How It Works

The application interacts with the OpenWeatherMap API to retrieve real-time weather data.

- Users can input a city name via a form
- The app sends a request to the API using `fetch`
- Weather data is parsed and rendered dynamically in the DOM
- Users can also click a location icon to:
  - Retrieve their coordinates via the Geolocation API
  - Fetch weather data based on latitude and longitude

The UI updates instantly without refreshing the page by preventing default form behavior.

## API Key Setup

This project requires an API key from OpenWeatherMap.

To run the app locally:

1. Create a `config.js` file inside the `lib/` directory
2. Add your API key:

```js
const apiKey = "your_api_key_here"
```

3. The file is already referenced correctly in `index.html`:

```html
<script src="lib/config.js"></script>
<script src="lib/index.js"></script>
```

## Important

- The `lib/config.js` file is ignored via `.gitignore` and is not included in this repository
- A `lib/config.example.js` file is provided as a reference for setup

Note: Since this is a frontend-only application, API keys cannot be fully secured. In a production environment, API calls should be handled through a backend.

## Setup

```bash
git clone https://github.com/sp1aca9fa/weather.git
cd weather
```

Then run a local server:

```bash
npx serve
```

Open in your browser:
http://localhost:3000

## Learnings

- Working with external APIs and handling JSON responses
- Using the Fetch API for asynchronous requests
- Handling user input and events in the DOM
- Using the browser Geolocation API
- Preventing default browser behavior (form submission)
- Refactoring JavaScript into reusable functions

## Notes

This project is a solution to a coding challenge completed during the Le Wagon bootcamp, focused on practicing API integration and front-end JavaScript fundamentals.
