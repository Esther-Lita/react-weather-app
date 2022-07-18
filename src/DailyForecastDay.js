import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function DailyForecastDay(props) {
  function getDay() {
    let date = new Date(props.data.dt * 1000);
    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    let day = days[date.getDay()];

    return day;
  }

  function minTemp() {
    let temperature = Math.round(props.data.temp.min);
    return `${temperature}º`;
  }

  function maxTemp() {
    let temperature = Math.round(props.data.temp.max);
    return `${temperature}º`;
  }

  return (
    <div className="DailyForecastDay">
      <div className="DailyForecast-day">{getDay()}</div>
      <WeatherIcon code={props.data.weather[0].icon} size={20} color="black" />
      <div className="DailyForecast-Temps">
        <span className="temp-min">{minTemp()} </span>
        <span className="temp-min">{maxTemp()}</span>
      </div>
    </div>
  );
}
