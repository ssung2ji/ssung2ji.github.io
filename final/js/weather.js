const API_KEY = "1003f5ed1c92d96033de5bf1832cb6a1";

function onGeoOk(position){
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;

    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
    fetch(url)
    .then(Response => Response.json())
    .then(data => {
        const weather = document.querySelector("#weather span:first-child");
        const city = document.querySelector("#weather span:last-child");
        city.innerText = data.name;
        weather.innerText = `${data.weather[0].main} / ${data.main.temp} ℃ `;
    });
}

function onGeoError(){
    alert("Can't find you. No weather for you");
}


navigator.geolocation.getCurrentPosition(onGeoOk,onGeoError);