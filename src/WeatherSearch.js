import React, { useState } from "react";
import axios from "axios";
import WeatherInfo from "./WeatherInfo";
import DailyForecast from "./DailyForecast";

import "./WeatherSearch.css";

export default function WeatherSearch(props) {
  const [city, setCity] = useState(props.cityOnLoad);

  const [weather, setWeather] = useState({ loaded: false });

  function showWeather(response) {
    setWeather({
      loaded: true,
      city: response.data.name,
      coordinates: response.data.coord,
      date: new Date(response.data.dt * 1000),
      temperature: Math.round(response.data.main.temp),
      wind: Math.round(response.data.wind.speed),
      humidity: response.data.main.humidity,
      description: response.data.weather[0].description,
      iconUrl: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
    });
  }

  function getApi() {
    let apiKey = "870d37476e57ead9d0bfa958566f3e94";
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
        <DailyForecast coords={weather.coordinates} />
      </div>
    );
  } else {
    getApi();
    return "Loading...";
  }
}
