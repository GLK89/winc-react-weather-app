import { Image, Heading, Stack } from "@chakra-ui/react";

export const WeatherIcon = ({ weather }) => {
  return (
    <Stack spacing={4} align="center">
      <Image
        src={weather.imageSrc}
        alt={weather.imageAlt}
        w="200px"
        h="200px"
      />

      <Heading size="md" mb={4}>
        {weather.weatherType}
      </Heading>
    </Stack>
  );
};
