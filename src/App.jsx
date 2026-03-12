import "./App.css";
import { useState } from "react";
import { WeatherIcon } from "./components/WeatherIcon";
import { sunnyWeather, cloudyWeather } from "./utils/data";

export const App = () => {
  const [weather, setWeather] = useState(sunnyWeather);

  return (
    <>
      <h1>Winc Weather App</h1>
      <WeatherIcon weather={weather} />
    </>
  );
};
