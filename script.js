const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': 'ea81847c93mshc28b1d3990bdddep168f1ajsn2322b3aac0da',
        'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
    }
};
const getWeather = (city) => {
    cityName.innerHTML=city
    cityName1.innerHTML=city
    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + city, options)
        .then(response => response.json())
        .then(response => {
            console.log(response)
            //cloud_pct.innerHTML = response.cloud_pct
            temp.innerHTML = response.temp
            temp1.innerHTML = response.temp
            temp2.innerHTML = response.temp
            feels_like.innerHTML = response.feels_like
            feels_like1.innerHTML = response.feels_like
            humidity.innerHTML = response.humidity
            humidity1.innerHTML = response.humidity
            humidity2.innerHTML = response.humidity
            min_temp.innerHTML = response.min_temp
            min_temp1.innerHTML = response.min_temp
            max_temp.innerHTML = response.max_temp
            max_temp1.innerHTML = response.max_temp
            wind_speed.innerHTML = response.wind_speed
            wind_speed1.innerHTML = response.wind_speed
            wind_speed2.innerHTML = response.wind_speed
            wind_degrees.innerHTML = response.wind_degrees
            wind_degrees1.innerHTML = response.wind_degrees
            sunrise.innerHTML = response.sunrise
            sunrise1.innerHTML1 = response.sunrise
            sunset.innerHTML = response.sunset
            sunset1.innerHTML = response.sunset

        })
        .catch(err => console.error(err));
}
submit.addEventListener("click", (e)=>{
    e.preventDefault()
    getWeather(city.value)
})

getWeather("Delhi")
