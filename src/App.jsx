import {
  Heading,
  Button,
  Center,
  Stack,
  Field,
  NativeSelect,
} from "@chakra-ui/react";
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
  const changeWeather = (event) => {
    event.preventDefault();
    const weatherIndex = event.target.elements["weather-select"].value;
    setWeather(weatherObjects[weatherIndex]);
  };

  return (
    <Center h="100vh">
      <Stack align="center" spacing={6}>
        <Heading size="2xl" color="blue.400">
          Winc Weather App
        </Heading>

        <WeatherIcon weather={weather} />

        <form onSubmit={changeWeather}>
          <Field.Root>
            <Field.Label>Weather Type</Field.Label>

            <NativeSelect.Root>
              <NativeSelect.Field name="weather-select">
                <option value="" disabled>
                  Select a weather type
                </option>
                {""}
                {weatherObjects.map((weatherObject, index) => (
                  <option key={index} value={index}>
                    {weatherObject.weatherType}
                  </option>
                ))}
              </NativeSelect.Field>

              <NativeSelect.Indicator />
            </NativeSelect.Root>
          </Field.Root>

          <Button type="submit">Change</Button>
        </form>
      </Stack>
    </Center>
  );
};
