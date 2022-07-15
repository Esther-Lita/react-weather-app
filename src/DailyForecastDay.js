import React from "react";

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
      <div className="DailyForecast-Temps">
        <span className="temp-min">{minTemp()} </span>
        <span className="temp-min">{maxTemp()}</span>
      </div>
    </div>
  );
}
