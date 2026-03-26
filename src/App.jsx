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

  return (
    <>
      <h1>Winc Weather App</h1>
      <WeatherIcon weather={weather} />
      <div className="button-container">
        <button onClick={() => setWeather(sunnyWeather)}>Sunny</button>
        <button onClick={() => setWeather(cloudyWeather)}>Cloudy</button>
        <button onClick={() => setWeather(rainyWeather)}>Rainy</button>
        <button onClick={() => setWeather(snowyWeather)}>Snowy</button>
      </div>
    </>
  );
};
