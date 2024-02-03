export async function getWeather(location) {
  const KEY = "4a1c8f9e9d7648db823191321240102";
  const response = await fetch(
    "http://api.weatherapi.com/v1/forecast.json?key=" +
      KEY +
      "&q=" +
      location +
      "&days=3"
  );
  return await response.json();
}
