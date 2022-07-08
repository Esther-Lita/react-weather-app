import React from "react";
import Date from "./Date";
import WeatherTemperature from "./WeatherTemperature";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <h2>{props.info.city}</h2>
      <ul>
        <li className="date">
          <Date date={props.info.date} />
        </li>
        <li className="text-capitalize description">
          {" "}
          {props.info.description}
        </li>
        <div className="row">
          <div className="col-6">
            <WeatherTemperature celsius={props.info.temperature} />
          </div>
          <div className="col-6">
            <li>Humidity: {props.info.humidity}%</li>
            <li>Wind: {props.info.wind}km/h</li>
          </div>
        </div>
      </ul>
    </div>
  );
}
