import { fetchGiffy, getWeather } from "./weather";

export function setupPage() {
  const dashboard = document.createElement("div");
  dashboard.setAttribute("id", "dashboard");

  const container = document.createElement("div");
  container.setAttribute("id", "container");
  container.appendChild(buildSearch());
  container.appendChild(dashboard);

  document.body.appendChild(container);

  display("london");
}

async function display(search) {
  // get data
  const data = await getWeather(search);
  const currentData = data.current;
  const forecastData = data.forecast;
  const locationData = data.location;

  console.log(data);
  // clear dashboard
  const dashboard = document.querySelector("#dashboard");
  dashboard.innerHTML = "";

  // build dash board displays
  dashboard.appendChild(buildCurrent(currentData, locationData));
}

function buildSearch() {
  const label = document.createElement("label");
  label.setAttribute("for", "search");
  label.textContent = "Search Weather";

  const search = document.createElement("input");
  search.type = "text";
  search.id = "search";
  search.name = "search";

  const submit = document.createElement("button");
  submit.type = "submit";
  submit.textContent = "submit";
  submit.addEventListener("click", (b) => {
    b.preventDefault();
    display(search.value);
    // search.value = "";
  });

  const form = document.createElement("form");
  form.appendChild(label);
  form.appendChild(search);
  form.appendChild(submit);

  return form;
}

function buildCurrent(weatherData, locationData) {
  // location, temperature, desc, img, time
  // location
  const location = document.createElement("h1");
  location.textContent = locationData.name;
  // weather list
  const temp = getListElement(weatherData.temp_c);
  temp.textContent += "\u2103"; // celcius symbol
  const description = getListElement(weatherData.condition.text);

  const list = document.createElement("ul");
  list.appendChild(temp);
  list.appendChild(description);

  // icon
  const img = document.createElement("img");
  fetchGiffy(weatherData.condition.text).then((res) => {
    img.setAttribute("src", res.data.images.original.url);
  });

  const container = document.createElement("div");
  container.appendChild(location);
  container.appendChild(list);
  container.appendChild(img);

  return container;
}

// HELPER FUNCS

function getListElement(data) {
  const item = document.createElement("li");
  item.classList.add("CurrentWeatherData");
  item.textContent = data;

  return item;
}
