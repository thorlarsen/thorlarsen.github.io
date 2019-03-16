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

  for (let j = 0; j < 5 ;j++) {
  console.log(i);
  console.log(getFcstDay(j));
  let forecastHigh = forecastData.list[i].main.temp;
  console.log(forecastHigh);
  i += 8;
  }
  
  /* console.log(i);
  console.log(getFcstDay(1));
  forecastHigh = forecastData.list[i].main.temp;
  console.log(forecastHigh);
  
  i += 8
  console.log(i);
  console.log(getFcstDay(2));
  forecastHigh = forecastData.list[i].main.temp;
  console.log(forecastHigh);

  i += 8
  console.log(i);
  console.log(getFcstDay(3));
  forecastHigh = forecastData.list[i].main.temp;
  console.log(forecastHigh);

  i += 8
  console.log(i);
  console.log(getFcstDay(4));
  forecastHigh = forecastData.list[i].main.temp;
  console.log(forecastHigh); */


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

