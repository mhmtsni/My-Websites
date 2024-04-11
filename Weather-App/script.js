const apiKey = "6b30f9d6c42c8b63c435e67c7b8ca767"
const apiUrl = `https://api.openweathermap.org/data/2.5/weather?units=metric&q=`
const searchBox = document.querySelector(".search input") 
const searchBtn = document.querySelector(".search button")
const weatherIcon = document.querySelector(".weather-icon")
const displayWeather = document.querySelector(".weather")
async function checkWeather(city) {
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`)

    if(response.status == 404){
        document.querySelector(".error").style.display = "block"
        displayWeather.style.display = "none"
    }else{
    var data = await response.json()
    console.log(data)
    document.querySelector(".city").innerHTML = data.name
    document.querySelector(".humidity").innerHTML = `${data.main.humidity}%`
    document.querySelector(".wind").innerHTML = `${data.wind.speed} km/h`
    document.querySelector(".temp").innerHTML = `${Math.round(data.main.temp)} °C`
    document.querySelector(".error").style.display = "none"
    document.querySelector(".desc").innerHTML = `${data.weather[0].description.toUpperCase()}`

    displayWeather.classList.add("display")

    if(data.weather[0].main == "Clouds"){
        weatherIcon.src = "images/clouds.png"
    }else if(data.weather[0].main == "Clear"){
        weatherIcon.src = "images/clear.png"
    }else if(data.weather[0].main == "Mist"){
        weatherIcon.src = "images/mist.png"
    }else if(data.weather[0].main == "Drizzle"){
        weatherIcon.src = "images/drizzle.png"
    }else if(data.weather[0].main == "Snow"){
        weatherIcon.src = "images/snow.png"
    }else if(data.weather[0].main == "Rain"){
        weatherIcon.src = "images/rain.png"
    }
    displayWeather.style.display = "block"
}
}

searchBtn.addEventListener("click", function() {
    checkWeather(searchBox.value)
})


