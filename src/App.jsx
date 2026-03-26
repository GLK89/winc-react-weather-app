import "./App.css";
import { useState } from "react";
import { WeatherIcon } from "./components/WeatherIcon";
import {
  sunnyWeather,
  cloudyWeather,
  rainyWeather,
  snowyWeather,
} from "./utils/data";

export const App = () => {
  const [weather, setWeather] = useState(sunnyWeather);

  const weatherObjects = [
    sunnyWeather,
    cloudyWeather,
    rainyWeather,
    snowyWeather,
  ];

  return (
    <>
      <h1>Winc Weather App</h1>
      <WeatherIcon weather={weather} />

      <div className="button-container">
        {weatherObjects.map((weatherObject) => (
          <button
            key={weatherObject.weatherType}
            onClick={() => setWeather(weatherObject)}
          >
            {weatherObject.weatherType}
          </button>
        ))}
      </div>
    </>
  );
};
