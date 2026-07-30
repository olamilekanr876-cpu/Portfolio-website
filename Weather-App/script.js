

const apiKey = "505c393acdc8b00b29926da4986b8d30";


const searchBtn = document.getElementById("searchBtn");
const cityInput = document.getElementById("cityInput");


searchBtn.addEventListener("click", getWeather);


cityInput.addEventListener("keypress", function(event){
    if(event.key === "Enter"){
        getWeather();
    }
});


async function getWeather(){

    const city = cityInput.value;


    const url =
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;


    try{

      
        const response = await fetch(url);

        if(!response.ok){
            throw new Error("City not found");
        }


        const data = await response.json();


        document.getElementById("description").textContent = "Loading...";


        document.getElementById("city").textContent =
        data.name;


        document.getElementById("temperature").textContent =
        `${data.main.temp}°C`;


        document.getElementById("description").textContent =
        data.weather[0].description;


        document.getElementById("humidity").textContent =
        `Humidity: ${data.main.humidity}%`;


        document.getElementById("wind").textContent =
        `Wind: ${data.wind.speed} km/h`;


        document.getElementById("weatherIcon").src =
        `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;

    }


    catch(error){

        alert(error.message);

    }

}