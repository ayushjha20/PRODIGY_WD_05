let input = document.getElementById('input');
let city = document.querySelector("#city");
let img = document.querySelector("#weather-icon");
let temp = document.querySelector("#temp");
let type = document.querySelector("#type");
let API_key = "ed64572c53858513266d413efe6bb1ca";

const data = async function (search) {
    let response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=${API_key}&units=metric`);
    let getdata = await response.json();
    
   

    if (getdata.cod === "404" && getdata.message === "city not found") {
        alert("Please enter a valid location");
        img.src = "photos/error.jpeg";
        city.innerHTML = "";
        temp.innerHTML = "";
        type.innerHTML = "";
    } else if (getdata.cod === "400") {
        alert("Please enter a valid input");
        img.src = "photos/error.jpeg";
        city.innerHTML = "";
        temp.innerHTML = "";
        type.innerHTML = "";
    } else {
        city.innerHTML = getdata.name;
        temp.innerHTML = Math.floor(getdata.main.temp) + "°C";
        type.innerHTML = getdata.weather[0].main;

        if (type.innerHTML === "Clear") {
            img.src = "photos/clear-weather.jpeg";
        } else if (type.innerHTML === "Rain") {
            img.src = "photos/rain.jpeg";
        } else if (type.innerHTML === "Clouds") {
            img.src = "photos/cloud.png";
        } else if (type.innerHTML === "Snow") {
            img.src = "photos/snow.png";
        }else if (type.innerHTML === "Haze") {
            img.src = "photos/haze.png";
        }  else {
            img.src = "photos/default.jpeg";
        }
    }

    input.value = "";
}

function myfun() {
    search = input.value;
    data(search);
}