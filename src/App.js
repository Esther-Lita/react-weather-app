import React from "react";
import WeatherSearch from "./WeatherSearch";

import "./App.css";
function App() {
  return (
    <div className="App">
      <div className="container ">
        <div className="App-container">
          <WeatherSearch cityOnLoad="New York" />
        </div>
        <footer>
          Coded by Esther Lizardo and{" "}
          <a
            href="https://github.com/litaesther10/react-weather-app"
            target="_blanck"
          >
            {" "}
            open-sourced{" "}
          </a>{" "}
          on Github
        </footer>
      </div>
    </div>
  );
}

export default App;
