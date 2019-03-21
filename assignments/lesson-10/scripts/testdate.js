let forecastRequestURL = 'https://api.openweathermap.org/data/2.5/forecast?id=5604473&units=imperial&appid=0361f54f515c1cb51a7f419fe2f8d779';
let forecastRequest = new XMLHttpRequest();
forecastRequest.open('GET', forecastRequestURL);
forecastRequest.responseType = 'json';
forecastRequest.send();

forecastRequest.onload = function () {
    let forecastData = forecastRequest.response;
    showForecast(forecastData);
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

  for (let j = 0; j < 5 ;j++) {
    fcstTab[j] = {day: getFcstDay(fcstDate,j), high: forecastData.list[i].main.temp};
    console.log(fcstTab[j].day,fcstTab[j].high);
    i += 8;
  }

  document.getElementById('day0').innerHTML = fcstTab[0].day;
  document.getElementById('high0').innerHTML = fcstTab[0].high.toFixed(0);
  document.getElementById('day1').innerHTML = fcstTab[1].day;
  document.getElementById('high1').innerHTML = fcstTab[1].high.toFixed(0);
  document.getElementById('day2').innerHTML = fcstTab[2].day;
  document.getElementById('high2').innerHTML = fcstTab[2].high.toFixed(0);
  document.getElementById('day3').innerHTML = fcstTab[3].day;
  document.getElementById('high3').innerHTML = fcstTab[3].high.toFixed(0);
  document.getElementById('day4').innerHTML = fcstTab[4].day;
  document.getElementById('high4').innerHTML = fcstTab[4].high.toFixed(0);

  function getFcstDay(fcstDate,index) {
    today = fcstDate.getDay() + index;
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