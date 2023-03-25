const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "bed7e6315dmsh3b16fb98853510fp191d60jsn56466df2aaf6",
    "X-RapidAPI-Host": "weather-by-api-ninjas.p.rapidapi.com",
  },
};
const getWeather = (city) => {
  cityName.innerHTML = city;
  fetch(
    "https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=" + city,
    options
  )
    .then((response) => response.json())
    .then((response) => {
      console.log(response);

      cloud_pct.innerHTML = response.cloud_pct;
      temp.innerHTML = response.temp;
      temp2.innerHTML = response.temp;
      feels_like.innerHTML = response.feels_like;
      humidity.innerHTML = response.humidity;
      humidity2.innerHTML = response.humidity;
      min_temp.innerHTML = response.min_temp;
      max_temp.innerHTML = response.max_temp;
      wind_speed.innerHTML = response.wind_speed;
      wind_speed2.innerHTML = response.wind_speed;
      wind_degrees.innerHTML = response.wind_degrees;
      sunrise.innerHTML = response.sunrise;
      sunset.innerHTML = response.sunset;
    })
    .catch((err) => console.error(err));
};

submit.addEventListener("click", (e) => {
  e.preventDefault();
  getWeather(city.value);
});

getWeather("Bangalore");

fetch(
  "https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Mumbai",
  options
)
  .then((response) => response.json())
  .then((response) => {
    console.log(response);

    mumbai_temp.innerHTML = response.temp;
    mumbai_Humidity.innerHTML = response.humidity;
    mumbai_maxtemp.innerHTML = response.max_temp;
    mumbai_mintemp.innerHTML = response.min_temp;
    mumbai_windDegree.innerHTML = response.wind_degrees;
    mumbai_windSpeed.innerHTML = response.wind_speed;
  })
  .catch((err) => console.error(err));

fetch(
  "https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Bangalore",
  options
)
  .then((response) => response.json())
  .then((response) => {
    console.log(response);

    bangalore_temp.innerHTML = response.temp;
    bangalore_Humidity.innerHTML = response.humidity;
    bangalore_maxtemp.innerHTML = response.max_temp;
    bangalore_mintemp.innerHTML = response.min_temp;
    bangalore_windDegree.innerHTML = response.wind_degrees;
    bangalore_windSpeed.innerHTML = response.wind_speed;
  })
  .catch((err) => console.error(err));

fetch(
  "https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Delhi",
  options
)
  .then((response) => response.json())
  .then((response) => {
    console.log(response);

    delhi_temp.innerHTML = response.temp;
    delhi_Humidity.innerHTML = response.humidity;
    delhi_maxtemp.innerHTML = response.max_temp;
    delhi_mintemp.innerHTML = response.min_temp;
    delhi_windDegree.innerHTML = response.wind_degrees;
    delhi_windSpeed.innerHTML = response.wind_speed;
  })
  .catch((err) => console.error(err));

function refreshPage() {
  window.location.reload();
}
