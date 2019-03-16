let currWeatherRequestURL = 'https://api.openweathermap.org/data/2.5/weather?id=5604473&units=imperial&appid=0361f54f515c1cb51a7f419fe2f8d779';
let currWeatherRequest = new XMLHttpRequest();
currWeatherRequest.open('GET', currWeatherRequestURL);
currWeatherRequest.responseType = 'json';
currWeatherRequest.send();

currWeatherRequest.onload = function () {
    let currWeatherData = currWeatherRequest.response;
    showCurrWeather(currWeatherData);
}

let forecastRequestURL = 'https://api.openweathermap.org/data/2.5/forecast?id=5604473&units=imperial&appid=0361f54f515c1cb51a7f419fe2f8d779';
let forecastRequest = new XMLHttpRequest();
forecastRequest.open('GET', forecastRequestURL);
forecastRequest.responseType = 'json';
forecastRequest.send();

forecastRequest.onload = function () {
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
    weatherTemp.textContent = 'Temperature: ' + currWeatherData.main.temp.toFixed(0) + '°F';
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

function showForecast(forecastData) {
    let rgex = /[0-9 :]21:00:00/
    let i = -1;
    do {
      i++;
    }
    while (!rgex.test(forecastData.list[i].dt_txt));
  
    var fcstDaysArr = [];
    var fcstHighArr = [];
    for (let j = 0; j < 5 ;j++) {
      console.log(i);
      fcstDaysArr[j]=getFcstDay(j);
      console.log(fcstDaysArr[j]);
      fcstHighArr[j] = forecastData.list[i].main.temp;
      console.log(fcstHighArr[j]);
      i += 8;
    }
    
    document.getElementById('day0').innerHTML = fcstDaysArr[0];
    document.getElementById('high0').innerHTML = fcstHighArr[0].toFixed(0) + '°F'; 
    document.getElementById('day1').innerHTML = fcstDaysArr[1];
    document.getElementById('high1').innerHTML = fcstHighArr[1].toFixed(0) + '°F';
    document.getElementById('day2').innerHTML = fcstDaysArr[2];
    document.getElementById('high2').innerHTML = fcstHighArr[2].toFixed(0) + '°F';
    document.getElementById('day3').innerHTML = fcstDaysArr[3];
    document.getElementById('high3').innerHTML = fcstHighArr[3].toFixed(0) + '°F';
    document.getElementById('day4').innerHTML = fcstDaysArr[4];
    document.getElementById('high4').innerHTML = fcstHighArr[4].toFixed(0) + '°F';
  
  function getFcstDay(index) {
      now = new Date();
      today = now.getUTCDay() + index;
      console.log('fcstDay is ', today);
      if (today >= 7) today = today - 7;
      if (today  == 0) return 'Sun';
      else if (today == 1) return 'Mon';
      else if (today == 2) return 'Tue';
      else if (today == 3) return 'Wed';
      else if (today == 4) return 'Thu';
      else if (today == 5) return 'Fri';
      else return 'Sat';
      }
      
    }