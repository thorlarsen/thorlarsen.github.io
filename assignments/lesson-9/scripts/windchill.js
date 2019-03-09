// Calculate and write windchill into the weather article
let windSpeed = parseInt(document.getElementById('windsp').innerHTML);
let temp = parseInt(document.getElementById('temp').innerHTML);
let windChill = 35.74 + 0.6215 * temp - 35.75 * Math.pow(windSpeed,0.16) 
                + 0.4275 * temp * Math.pow(windSpeed,0.16) ;

document.getElementById('windch').innerHTML = windChill.toFixed(0);
