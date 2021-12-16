// Get the modal
const modal = document.getElementById("weatherModal");

// Get the button that opens the modal
const btn = document.getElementById("weatherBtn");

// Get the <span> element that closes the modal
const span = document.getElementsByClassName("close")[0];
// When the user clicks on the button, open the modal
/* zip.addEventListener('submit', function(event) {
    event.preventDefault();
    modal.style.display = "block";
    doWeather(zip.value); 
  });*/

  btn.addEventListener('click', function(event) {
    event.preventDefault();
    //const zip = document.querySelector('.zip-input');
    
    modal.style.display = "block";
    doWeather(zip.value);
  });

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  document.querySelector('.modal-current').innerHTML = '';
  document.querySelector('.modal-fiveday').innerHTML = '';
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    document.querySelector('.modal-current').innerHTML = '';
    document.querySelector('.modal-fiveday').innerHTML = '';  
    modal.style.display = "none";
  }
}


function doWeather(zipcode) {
    let currUrlBuild = 'https://api.openweathermap.org/data/2.5/weather?zip=' + zipcode + ',us&units=imperial&appid=0361f54f515c1cb51a7f419fe2f8d779';
    let currWeatherRequestURL = currUrlBuild;
    let currWeatherRequest = new XMLHttpRequest();
    currWeatherRequest.open('GET', currWeatherRequestURL);
    currWeatherRequest.responseType = 'json';
    currWeatherRequest.send();
  
    currWeatherRequest.onload = function () {
      let currWeatherData = currWeatherRequest.response;
      showCurrWeather(currWeatherData);
    }
  
    let fcstUrlBuild = 'https://api.openweathermap.org/data/2.5/forecast?zip=' + zipcode + ',us&units=imperial&appid=0361f54f515c1cb51a7f419fe2f8d779';
    let forecastRequestURL = fcstUrlBuild;
    let forecastRequest = new XMLHttpRequest();
    forecastRequest.open('GET', forecastRequestURL);
    forecastRequest.responseType = 'json';
    forecastRequest.send();
  
    forecastRequest.onload = function () {
      let forecastData = forecastRequest.response;
      showForecast(forecastData);
    }
  
    function showCurrWeather(currWeatherData) {
      let weatherArticle = document.querySelector('.modal-current');
      let weatherIcon = document.createElement('img');
      let location = document.createElement('p');
      let weatherCurr = document.createElement('p');
      let weatherTemp = document.createElement('p');
      let weatherHumidity = document.createElement('p');
      //let weatherPrecip = document.createElement('p');
      let weatherWind = document.createElement('p');
  
      let iconUrl = 'https://openweathermap.org/img/w/' + currWeatherData.weather[0].icon + '.png';
      location.textContent = 'For ' + zipcode;
      weatherIcon.setAttribute('src', iconUrl);
      weatherIcon.setAttribute('alt', 'Current weather');
      weatherIcon.setAttribute('id', 'curricon')
      weatherCurr.textContent = currWeatherData.weather[0].main;
      weatherTemp.textContent = 'Temperature: ' + currWeatherData.main.temp.toFixed(0) + '°F';
      weatherHumidity.textContent = 'Humidity: ' + currWeatherData.main.humidity.toFixed(0) + '%';
      //weatherPrecip.textContent = 'Rain(last 3 hrs): ' + currWeatherData.rain.rain3h;
      weatherWind.textContent = 'Wind: ' + currWeatherData.wind.speed.toFixed(0) + ' mph';
  
      //weatherArticle.appendChild(weatherH3);
      weatherArticle.appendChild(location);
      weatherArticle.appendChild(weatherIcon);
      weatherArticle.appendChild(weatherCurr);
      weatherArticle.appendChild(weatherTemp);
      weatherArticle.appendChild(weatherHumidity);
      //weatherArticle.appendChild(weatherPrecip);
      weatherArticle.appendChild(weatherWind);
    }
  
    function showForecast(forecastData) {
      let rgex = /[0-9 :]21:00:00/
      let i = -1;
      do {
        i++;
      }
      while (!rgex.test(forecastData.list[i].dt_txt));
  
      let fcstDate = new Date(forecastData.list[i].dt_txt);
      let fcstTab = [];
  
      for (let j = 0; j < 5; j++) {
        if (i + 5 <= forecastData.list.length - 1) {
          fcstTab[j] = {
            icon: forecastData.list[i].weather[0].icon,
            day: getFcstDay(fcstDate, j),
            high: forecastData.list[i].main.temp,
            low: forecastData.list[i + 5].main.temp
          };
          i += 8;
        } else {
          let last = forecastData.list.length - 1
          fcstTab[j] = {
            icon: forecastData.list[i].weather[0].icon,
            day: getFcstDay(fcstDate, j),
            high: forecastData.list[i].main.temp,
            low: forecastData.list[last].main.temp
          };
        }
      }
  
      let fcstDiv = document.querySelector('.modal-fiveday');
      let location = document.createElement('p');
      location.textContent = 'For ' + zipcode;
      fcstDiv.appendChild(location);
      
      for (let k = 0; k < fcstTab.length; k++) {
        let fcstArticle = document.createElement('article');
        let fcstH5 = document.createElement('p');
        let fcstIcon = document.createElement('img');
        let fcstHighP = document.createElement('p');
        let fcstLowP = document.createElement('p');
  
        fcstH5.textContent = fcstTab[k].day;
        iconUrl = 'https://openweathermap.org/img/w/' + fcstTab[k].icon + '.png';
        fcstIcon.setAttribute('src', iconUrl);
        fcstIcon.setAttribute('alt', '"Weather icon"');
        fcstHighP.textContent = 'High: ' + fcstTab[k].high.toFixed(0) + '°F';
        fcstLowP.textContent = ' Low: ' + fcstTab[k].low.toFixed(0) + '°F';
  
        fcstArticle.appendChild(fcstH5);
        fcstArticle.appendChild(fcstIcon);
        fcstArticle.appendChild(fcstHighP);
        fcstArticle.appendChild(fcstLowP);
  
        fcstDiv.appendChild(fcstArticle);
      }
  
      function getFcstDay(fcstDate, index) {
        today = fcstDate.getDay() + index;
        if (today >= 7) today = today - 7;
        if (today == 0) return 'Sun';
        else if (today == 1) return 'Mon';
        else if (today == 2) return 'Tue';
        else if (today == 3) return 'Wed';
        else if (today == 4) return 'Thu';
        else if (today == 5) return 'Fri';
        else return 'Sat';
      }
  
    }
}