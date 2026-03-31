import { Heading, Button, Center, Stack, Group } from "@chakra-ui/react";
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
    <Center h="100vh">
      <Stack align="center" spacing={6}>
        <Heading size="2xl" color="blue.400">
          Winc Weather App
        </Heading>

        <WeatherIcon weather={weather} />

        <Group>
          {weatherObjects.map((weatherObject) => (
            <Button
              key={weatherObject.weatherType}
              onClick={() => setWeather(weatherObject)}
            >
              {weatherObject.weatherType}
            </Button>
          ))}
        </Group>
      </Stack>
    </Center>
  );
};
