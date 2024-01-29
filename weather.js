const apiKey = "68c40f0b309770b2cc179d3360af166b";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weather_img = document.querySelector(".weatherIcon");

async function checkWeather(city) {
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
    const data = await response.json();

   if(response.status==404)
   {
    document.querySelector(".error").style.display="block";
    document.querySelector(".weather").style.display="none";
   }
   else{
        
    document.querySelector(".place").innerText = data.name;
    document.querySelector(".temp").innerText = Math.round(data.main.temp) + "°C";
    document.querySelector(".humidity").innerText = data.main.humidity + "%";
    document.querySelector(".wind").innerText = data.wind.speed + " km/h";

    const weatherCondition = data.weather[0].main;

    // Update weather icon based on the condition
    if (weatherCondition === "Clouds") {
        weather_img.src = "D:\\VSCode files\\weather-api\\clouds.png";
    } else if (weatherCondition === "Rain") {
        weather_img.src = "D:\\VSCode files\\weather-api\\rain.png";
    } else if (weatherCondition === "Clear") {
        weather_img.src = "D:\\VSCode files\\weather-api\\clear.png";
    } else if (weatherCondition === "Drizzle") {
        weather_img.src = "D:\\VSCode files\\weather-api\\drizzle.png";
    } else if (weatherCondition === "Humidity") {
        weather_img.src = "D:\\VSCode files\\weather-api\\humidity.png";
    } else if (weatherCondition === "Mist") {
        weather_img.src = "D:\\VSCode files\\weather-api\\mist.png";
    } else if (weatherCondition === "Snow") {
        weather_img.src = "D:\\VSCode files\\weather-api\\snow.png";
    } else if (weatherCondition === "Wind") {
        weather_img.src = "D:\\VSCode files\\weather-api\\wind.png";
    }
    document.querySelector(".weather").style.display="block";
    document.querySelector(".error").style.display="none";
   }

}

searchBtn.addEventListener("click", () => {
    checkWeather(searchBox.value);
});
