/* getting the weather API */
let myweatherAPI = "https://api.openweathermap.org/data/2.5/weather?id=2925533&appid=8dccf0c8e3ba3fcfa0e45b08779fae53"
let weather = document.querySelector(".weather")

fetch(myweatherAPI)
    .then(function (response) {
        return response.json();
    })
    .then(function (myJson) {
        JSON.stringify(myJson)
        let status = myJson.main.temp - 273.15
        let temp = Math.round(status);
        console.log("the tempreture now is " + temp);
        weather.innerHTML = `Akteulles Wetter ${temp}°F`
    });