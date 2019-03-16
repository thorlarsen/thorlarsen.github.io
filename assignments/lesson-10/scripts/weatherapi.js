let currWeatherRequestURL = 'https://api.openweathermap.org/data/2.5/weather?id=5604473&units=imperial&appid=0361f54f515c1cb51a7f419fe2f8d779';
let currWeatherRequest = new XMLHttpRequest();
currWeatherRequest.open('GET', currWeatherRequestURL);
currWeatherRequest.responseType = 'json';
currWeatherRequest.send();

currWeatherRequest.onload = function () {
    let currWeatherData = currWeatherRequest.response;
    showCurrWeather(currWeatherData);
}

let forecastRequestURL = 'https://api.openweathermap.org/data/2.5/forecast?id=5604473?units=imperial?appid=0361f54f515c1cb51a7f419fe2f8d779';
let forecastRequest = new XMLHttpRequest();
forecastRequest.open('GET', forecastRequestURL);
forecastRequest.responseType = 'json';
forecastRequest.send();

weatherRequest.onload = function () {
    let forecastData = forecastRequest.response;
    showForecast(forecastData);
} 

function showCurrWeather(currWeatherData) {
    let weatherArticle = document.querySelector('.weather');
    let weatherH3 = document.createElement('h3');
    let weatherCurr = document.createElement('p');
    let weatherTemp = document.createElement('p');
    let weatherHumidity = document.createElement('p');
    // let weatherPrecip = document.createElement('p');
    let weatherWind = document.createElement('p');

    weatherH3.textContent = 'Weather Summary';
    weatherCurr.textContent = 'Currently: ' + currWeatherData.weather.main;
    weatherTemp.textContent = 'Temperature: ' + currWeatherData.main.temp.toFixed(0) + '&deg; F';
    weatherHumidity.textContent = 'Humidity: ' + currWeatherData.main.humidity.toFixed(0) + '%';
    // weatherPrecip.textContent = 'Precipitation: ' + currWeatherData.rain.rain3h;
    weatherWind.textContent = 'Wind: ' + currWeatherData.wind.speed.toFixed(0) + ' mph';

    weatherArticle.appendChild(weatherH3);
    weatherArticle.appendChild(weatherCurr);
    weatherArticle.appendChild(weatherTemp);
    weatherArticle.appendChild(weatherHumidity);
    // weatherArticle.appendChild(weatherPrecip);
    weatherArticle.appendChild(weatherWind);
}

/* showForecast(forecastData) {

} */