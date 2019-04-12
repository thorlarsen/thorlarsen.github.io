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

    let closuresArticle = document.querySelector('#closures');
    for (let j = 0; j < templeData[i].closures.length; j++) {
      let closureP = document.createElement('p');
      let startDate = new Date(templeData[i].closures[j].startDate);
      let endDate = new Date(templeData[i].closures[j].endDate);
      if (startDate == endDate) {
        let startStr = makeDateStr(startDate);
        closureP.textContent = startStr;
      } else {
        let startStr = makeDateStr(startDate);
        let endStr = makeDateStr(endDate);
        closureP.textContent = startStr + ' - ' + endStr;
      }
      closuresArticle.appendChild(closureP);
    }

  
    function makeDateStr(longDate) {
      let dateStr = "";
      let longDay = longDate.getDay();
      if (longDay == 0) dateStr += 'Sunday, ';
        else if (longDay == 1) dateStr += 'Monday, ';
        else if (longDay == 2) dateStr += 'Tueday, ';
        else if (longDay == 3) dateStr += 'Wednesday, ';
        else if (longDay == 4) dateStr += 'Thursday, ';
        else if (longDay == 5) dateStr += 'Friday, ';
        else dateStr += 'Saturday, ';
      dateStr += longDate.getDate() + ' ';
      let longMonth = longDate.getMonth();
      if (longMonth == 0) dateStr += "January ";
        else if (longMonth == 1) dateStr += "February ";
        else if (longMonth == 2) dateStr += "March ";
        else if (longMonth == 3) dateStr += "April ";
        else if (longMonth == 4) dateStr += "May ";
        else if (longMonth == 5) dateStr += "June ";
        else if (longMonth == 6) dateStr += "July ";
        else if (longMonth == 7) dateStr += "August ";
        else if (longMonth == 8) dateStr += "September ";
        else if (longMonth == 9) dateStr += "October ";
        else if (longMonth == 10) dateStr += "November ";
        else dateStr += "December ";
      dateStr += longDate.getFullYear();
      return dateStr;
    }
  }
    

    doWeather(city)
}