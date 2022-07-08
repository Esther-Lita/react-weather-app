import React, { useState } from "react";
import axios from "axios";
import WeatherInfo from "./WeatherInfo";

import "./WeatherSearch.css";

export default function WeatherSearch(props) {
  const [city, setCity] = useState(props.cityOnLoad);

  const [weather, setWeather] = useState({ loaded: false });

  function showWeather(response) {
    setWeather({
      loaded: true,
      city: response.data.name,
      date: new Date(response.data.dt * 1000),
      temperature: Math.round(response.data.main.temp),
      wind: Math.round(response.data.wind.speed),
      humidity: response.data.main.humidity,
      description: response.data.weather[0].description,
    });
  }

  function getApi() {
    let apiKey = "8faf1e22ac6d107f05e8ab59a4150451";
    let units = "metric";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`;

    axios.get(apiUrl).then(showWeather);
  }

  function handleSubmit(event) {
    event.preventDefault();
    getApi();
  }

  function findCity(event) {
    setCity(event.target.value);
  }

  let form = (
    <form onSubmit={handleSubmit}>
      <div className="row">
        <div className="col-9">
          <input
            type="search"
            className=" form-control"
            placeholder="Enter a city.."
            autoFocus="on"
            onChange={findCity}
          />
        </div>
        <div className="col-3">
          <button
            type="Submit"
            value="Search"
            className="btn btn-outline-primary"
          >
            Search
          </button>
        </div>
      </div>
    </form>
  );

  if (weather.loaded) {
    return (
      <div>
        {form}
        <WeatherInfo info={weather} />
      </div>
    );
  } else {
    getApi();
    return "Loading...";
  }
}
