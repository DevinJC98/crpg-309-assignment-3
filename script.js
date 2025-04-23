const apikey =
  "https://api.openweathermap.org/data/2.5/weather?lat=21.1619&lon=-86.8515&appid=7c6e245878f88076c90bdc28863e16d1&units=metric";

const weathericonurl = "https://openweathermap.org/img/wn/";

fetch(apikey)
  .then((response) => {
    if (!response.ok) {
      throw new Error("Unable to Fetch API key");
    }
    return response.json();
  })
  .then((data) => {
    let weatherInfo = data;
    cancun.innerHTML = weatherInfo.name;
    temperature.innerHTML = `${weatherInfo.main.temp}°C`;
    icon.src = weathericonurl + weatherInfo.weather[0].icon + ".png";
  })
  .catch((error) => {
    console.error("Error: " + error);
  });
