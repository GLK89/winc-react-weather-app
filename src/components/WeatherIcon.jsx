import "./WeatherIcon.css";

export const WeatherIcon = (props) => {
  return (
    <>
      <img
        src={props.weather.imageSrc}
        alt={props.weather.imageAlt}
        className="weather-icon"
      />

      <h2>{props.weather.weatherType}</h2>
    </>
  );
};
