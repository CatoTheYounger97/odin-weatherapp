export async function getWeather(search) {
  const KEY = "4a1c8f9e9d7648db823191321240102";
  const response = await fetch(
    "http://api.weatherapi.com/v1/forecast.json?key=" +
      KEY +
      "&q=" +
      search +
      "&days=3"
  );
  return await response.json();
}

export async function fetchGiffy(searchString) {
  const response = await fetch(
    "https://api.giphy.com/v1/gifs/translate?api_key=EaWk2ysr6R2q2zsKrVs26JNYPNooIHzO&s=" +
      searchString,
    { mode: "cors" }
  );
  const gif = await response.json();
  console.log(gif);
  return gif;
}
