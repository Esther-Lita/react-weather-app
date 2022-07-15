import axios from "axios";
import React, { useState, useEffect } from "react";
import DailyForecastDay from "./DailyForecastDay";
import * as Icon from "react-feather";

export default function DailyForecast(props) {
  const [ready, setReady] = useState(false);
  const [forecast, setForecast] = useState(null);

  useEffect(() => {
    setReady(false);
  }, [props.coords]);

  function handleResponse(response) {
    setForecast(response.data.daily);
    setReady(true);
  }

  function getApi() {
    let latitude = props.coords.lat;
    let longitude = props.coords.lon;
    let apiKey = "870d37476e57ead9d0bfa958566f3e94";
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }

  if (ready) {
    return (
      <div className="DailyForecast">
        <div className="row">
          {forecast.map(function(dailyForecast, index) {
            if (index < 5) {
              return (
                <div className="col" key={index}>
                  <DailyForecastDay data={dailyForecast} />
                  <Icon.Sun />
                </div>
              );
            } else {
              return null;
            }
          })}
        </div>
      </div>
    );
  } else {
    getApi();
    return null;
  }
}
