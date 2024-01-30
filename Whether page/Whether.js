
const apiurl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q="

const apikey = "da1b5c785be623c1fd38d8eda5520ff9"

const weathericon = document.getElementById('image')

const searchbox = document.querySelector('.box input')
const searchbtn = document.querySelector('.box button')



async function checkwheather(city){
        const response = fetch(apiurl + city + `&appid=${apikey}`)

        .then(response => response.json())
        .then(data => {
    // do something with the data
    console.log(data);
    document.getElementById('city').innerHTML = data.name
    document.getElementById('temp').innerHTML = Math.floor(data.main.temp) + "°Celsius"
    document.getElementById('speed').innerHTML = Math.floor(data.wind.speed) + " km/ph"
    document.getElementById('status').innerHTML = data.weather[0].description
    document.getElementById('humidity').innerHTML = data.main.humidity + "% Humidity"

    if(data.weather[0].description == "clear sky" && data.main.temp > 0){
        weathericon.src = "sunny.png"
    }
    else if(data.weather[0].description == "overcast clouds"){
        weathericon.src = "cloudy-day.png"
    }
    else if(data.weather[0].description == "broken clouds"){
        weathericon.src = "haze2.png"
    }
    else if(data.weather[0].description == "scattered clouds"){
        weathericon.src = "scattered-thunderstorms.png"
    }
    else if(data.main.temp < 0){
        weathericon.src = "snowfall.png"
    }
    else if(data.weather[0].description == "moderate rain"){
        weathericon.src = "rain.png"
    }
    else if(data.weather[0].description == "few clouds"){
        weathericon.src = "haze.png"
    }
    else if(data.weather[0].description == "light rain"){
        weathericon.src = "light-rain.png"
    }


    if(data.wind.speed < 5){
        document.getElementById('description').innerHTML = "Slow Breeze"
    }
    else if(data.wind.speed > 5 && data.wind.speed < 10){
        document.getElementById('description').innerHTML = "Moderate Breeze"
    }else{
        document.getElementById('description').innerHTML = "Fast Breeze"
    }
  })
}


searchbtn.addEventListener("click", ()=>{
        checkwheather(searchbox.value);
        console.log("Weather updated")
        searchbox.value = ''
        // body.contain.style.background= "aqua"
})
// checkwheather()
