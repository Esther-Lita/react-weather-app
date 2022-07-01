import React, { useState } from "react";
import axios from "axios";

import "./WeatherSearch.css";

export default function WeatherSearch(props) {
  const [city, setCity] = useState("");
  const [loaded, setLoaded] = useState(false);
  const [weather, setWeather] = useState({});

  function showWeather(response) {
    setLoaded(true);
    setWeather({
      temperature: response.data.main.temp,
      wind: response.data.wind.speed,
      humidity: response.data.main.humidity,
      description: response.data.weather[0].description,
    });
  }

  function getApi(event) {
    event.preventDefault();
    let apiKey = "8faf1e22ac6d107f05e8ab59a4150451";
    let units = "metric";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`;

    axios.get(apiUrl).then(showWeather);
  }

  function searchCity(event) {
    setCity(event.target.value.toUpperCase());
  }

  let form = (
    <form onSubmit={getApi}>
      <input
        type="search"
        className=" col-form-label"
        placeholder="Enter a city.."
        onChange={searchCity}
      />
      <button type="Submit" className="btn btn-outline-secondary">
        Search
      </button>
    </form>
  );

  let header = (
    <ul className="suggested-cities">
      <li className="suggested-city">
        <a href="/">Paris</a>
      </li>
      <li className="suggested-city">
        <a href="/">Rome</a>
      </li>
      <li className="suggested-city">
        <a href="/">Arrecife</a>
      </li>
    </ul>
  );

  if (loaded) {
    return (
      <div>
        {header}
        {form}
        <h2>{city}</h2>
        <ul>
          <li>Temperature: {Math.round(weather.temperature)}°C</li>
          <li>Description: {weather.description}</li>
          <li>Humidity: {weather.humidity}%</li>
          <li>Wind: {weather.wind}km/h</li>
        </ul>
      </div>
    );
  } else {
    return (
      <div>
        {header}
        {form}
      </div>
    );
  }
}
