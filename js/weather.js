const API_KEY = "404ccbc6406c5e0db800f76ea92ade65";

function getWeatherIcon(currentWeahter) {
    const i = document.createElement("i");
    const weather = document.querySelector("#weather span:first-child");

    if (currentWeahter === "Clouds") {
        i.className = "fa-solid fa-cloud";
    } else if (currentWeahter === "Wind") {
        i.className = "fa-solid fa-fan";
    } else if (currentWeahter === "Rain") {
        i.className = "fa-solid fa-cloud-showers-heavy";
    } else if (currentWeahter === "Snow") {
        i.className = "fa-solid fa-snowflake";
    } else if (currentWeahter === "Clear") {
        i.className = "fa-solid fa-sun";
    }
    weather.appendChild(i);
}

function onGeoSuccess(position) {
    const lat = position.coords.latitude;
    const lng = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`;
    fetch(url)
        .then((response) => response.json())
        .then((data) => {
            const weather = document.querySelector("#weather span:first-child");
            const location = document.querySelector("#weather span:last-child");
            location.innerText = data.name;
            weather.innerText = `${data.weather[0].main} / ${data.main.temp} ℃`;
            getWeatherIcon(data.weather[0].main);
        });
}

function onGeoFailed() {
    console.log("check url or api_key etc...");
}

navigator.geolocation.getCurrentPosition(onGeoSuccess, onGeoFailed);

// https://openweathermap.org/api --> weather api 받아온 곳!!
// api_key = ""