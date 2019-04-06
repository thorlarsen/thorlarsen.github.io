function popTempleData(city) {
  let requestURL = 'json/templeinfo.json';
  let request = new XMLHttpRequest;
  request.open('GET', requestURL);
  request.responseType = 'json';
  request.send();

  request.onload = function () {
    let templeData = request.response;
    showTemples(templeData, city);
  }

  function showTemples(templeData, city) {
    let i = -1;
    do {
      i++
    } while (templeData[i].id != city);

    let addressArticle = document.querySelector('#address');
    let streetP = document.createElement('p');
    let cityStateZipP = document.createElement('p');
    let phoneP = document.createElement('p');
    streetP.textContent = templeData[i].address.street;
    cityStateZipP.textContent = templeData[i].address.city + ', ' +
      templeData[i].address.state + ' ' + templeData[i].address.zip;
    phoneP.textContent = 'Telephone: ' + templeData[i].phone;
    addressArticle.appendChild(streetP);
    addressArticle.appendChild(cityStateZipP);
    addressArticle.appendChild(phoneP);

    let servicesArticle = document.querySelector('#services');
    let svcP0 = document.createElement('p');
    let svcP1 = document.createElement('p');
    let svcP2 = document.createElement('p');
    svcP0.textContent = 'Clothing Rental Available: ' + templeData[i].services.clothing;
    svcP1.textContent = 'Cafeteria: ' + templeData[i].services.cafeteria;
    svcP2.textContent = 'Distribution Center Nearby: ' + templeData[i].services.distCtr;
    servicesArticle.appendChild(svcP0);
    servicesArticle.appendChild(svcP1);
    servicesArticle.appendChild(svcP2);

    doWeather(city)
  }
}