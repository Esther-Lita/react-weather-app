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
          <div className="col-sm-5 description">
            <li className="date ">
              <Date date={props.info.date} />
            </li>
            <li className="text-capitalize "> {props.info.description}</li>
          </div>
          <div className="col-sm-5 description">
            <li>
              Humidity: <span className="humidity">{props.info.humidity}</span>%
            </li>
            <li>
              Wind: <span className="wind">{props.info.wind}</span> m/s
            </li>
          </div>
        </div>
      </ul>

      <div className="row">
        <div className="col-sm-4">
          <WeatherIcon
            code={props.info.icon}
            alt={props.info.description}
            size={60}
          />
          <span className="temperature">{showTemp()}</span>
          <span className="unit">ºC </span>
        </div>
        <div className="col-sm-8">
          <h2>{props.info.city}</h2>
        </div>
      </div>
    </div>
  );
}
