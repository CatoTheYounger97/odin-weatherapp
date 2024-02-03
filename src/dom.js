import { getWeather } from "./weather";

export function setupPage() {
  const container = document.createElement("div");
  container.setAttribute("id", "container");

  container.appendChild(buildSearch());
  document.body.appendChild(container);
}

async function display(location) {
  const data = await getWeather(location);
  console.log(data);
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
