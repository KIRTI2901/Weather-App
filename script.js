// const url = 'https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + city;
const options = {
method: 'GET',
headers: {
'content-type': 'application/octet-stream',
'X-RapidAPI-Key': '763c810bdfmshb9f4669b80c3925p18d818jsn3db5be365864',
'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
}
};

const getWeather = (city) => {
    cityName.innerHTML = city
    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + city, options)
    .then(response => response.json())
    .then(response => {
        console.log(response)
        temp.innerHTML = response.temp
        temp2.innerHTML = response.temp
        feels_like.innerHTML = response.feels_like
        humidity.innerHTML = response.humidity
        humidity2.innerHTML = response.humidity
        min_temp.innerHTML = response.min_temp
        max_temp.innerHTML = response.max_temp
        wind_speed.innerHTML = response.wind_speed
        wind_speed2.innerHTML = response.wind_speed
        wind_degrees.innerHTML = response.wind_degrees
        sunrise.innerHTML = response.sunrise
        sunset.innerHTML = response.sunset
    })
    .catch(err => console.error(err));
    }

    submit.addEventListener("click", (e)=>{
        e.preventDefault()
        getWeather(city.value)
})
getWeather("Muzaffarnagar")

fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Delhi', options)
    .then(response1 => response1.json())
    .then(response1 => {
        console.log(response1)
        temp_D.innerHTML = response1.temp
        feels_like_D.innerHTML = response1.feels_like
        humidity_D.innerHTML = response1.humidity
        min_temp_D.innerHTML = response1.min_temp
        max_temp_D.innerHTML = response1.max_temp
        wind_speed_D.innerHTML = response1.wind_speed
        wind_degrees_D.innerHTML = response1.wind_degrees
        sunrise_D.innerHTML = response1.sunrise
        sunset_D.innerHTML = response1.sunset
    })
    .catch(err => console.error(err));

    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Bangalore', options)
    .then(response2 => response2.json())
    .then(response2 => {
        console.log(response2)
        temp_B.innerHTML = response2.temp
        feels_like_B.innerHTML = response2.feels_like
        humidity_B.innerHTML = response2.humidity
        min_temp_B.innerHTML = response2.min_temp
        max_temp_B.innerHTML = response2.max_temp
        wind_speed_B.innerHTML = response2.wind_speed
        wind_degrees_B.innerHTML = response2.wind_degrees
        sunrise_B.innerHTML = response2.sunrise
        sunset_B.innerHTML = response2.sunset
    })
    .catch(err => console.error(err));

    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Mumbai', options)
    .then(response3 => response3.json())
    .then(response3 => {
        console.log(response3)
        temp_M.innerHTML = response3.temp
        feels_like_M.innerHTML = response3.feels_like
        humidity_M.innerHTML = response3.humidity
        min_temp_M.innerHTML = response3.min_temp
        max_temp_M.innerHTML = response3.max_temp
        wind_speed_M.innerHTML = response3.wind_speed
        wind_degrees_M.innerHTML = response3.wind_degrees
        sunrise_M.innerHTML = response3.sunrise
        sunset_M.innerHTML = response3.sunset
    })
    .catch(err => console.error(err));

    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Kolkata', options)
    .then(response4 => response4.json())
    .then(response4 => {
        console.log(response4)
        temp_K.innerHTML = response4.temp
        feels_like_K.innerHTML = response4.feels_like
        humidity_K.innerHTML = response4.humidity
        min_temp_K.innerHTML = response4.min_temp
        max_temp_K.innerHTML = response4.max_temp
        wind_speed_K.innerHTML = response4.wind_speed
        wind_degrees_K.innerHTML = response4.wind_degrees
        sunrise_K.innerHTML = response4.sunrise
        sunset_K.innerHTML = response4.sunset
    })
    .catch(err => console.error(err));
