import React from "react";
import Date from "./Date";

export default function WeatherInfo(props) {
  function showTemp() {
    let temperature = props.info.temperature;
    return Math.round(temperature);
  }
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
           
            <span className="temperature">{showTemp()}</span>
            <span className="unit">ºC </span>
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
