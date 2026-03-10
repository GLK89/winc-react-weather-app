import "./WeatherIcon.css";

export const WeatherIcon = ({ weather }) => {
  return (
    <>
      <img
        src={weather.imageSrc}
        alt={weather.imageAlt}
        className="weather-icon"
      />

      <h2>{weather.weatherType}</h2>
    </>
  );
};

