import React from "react";
import Date from "./Date";
import WeatherIcon from "./WeatherIcon";

export default function WeatherInfo(props) {
  function showTemp() {
    let temperature = props.info.temperature;
    return Math.round(temperature);
  }
  return (
    <div className="WeatherInfo">
      <ul className="all-description">
        <div className="row">
          <div className="col-6">
            <li className="date weather-description">
              <Date date={props.info.date} />
            </li>
            <li className="text-capitalize weather-description">
              {" "}
              {props.info.description}
            </li>
          </div>
          <div className="col-6">
            <li className="weather-description">
              Humidity: {props.info.humidity}%
            </li>
            <li className="weather-description">Wind: {props.info.wind}km/h</li>
          </div>
        </div>
      </ul>
      <h2>{props.info.city}</h2>

      <div className="row">
        <div className="col-3">
          <WeatherIcon
            code={props.info.icon}
            alt={props.info.description}
            color="black"
            size={45}
          />
        </div>
        <div className="col-3">
          <span className="temperature">{showTemp()}</span>
          <span className="unit">ºC </span>
        </div>
      </div>
    </div>
  );
}
