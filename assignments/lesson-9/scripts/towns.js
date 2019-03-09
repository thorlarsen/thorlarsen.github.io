var section = document.querySelector('#townarticles')

var requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';
var request = new XMLHttpRequest();
request.open('GET', requestURL);
request.responseType = 'json';
request.send();

request.onload = function () {
    var townData = request.response;
    showTowns(townData);
}

function showTowns(townData) {
    let towns=townData.towns;

    for (let i = 0; i < towns.length; i++) {
        if (towns[i].name == "Preston" || towns[i].name == "Soda Springs" ||
        towns[i].name == "Fish Haven") {
                    
          let townArticle = document.createElement('article');
          let townH2 = document.createElement('h2');
          let townP1 = document.createElement('p');
          let townP2 = document.createElement('p');
          let townP3 = document.createElement('p');
          let townP4 = document.createElement('p');
          let townImg = document.createElement('img');
        
          townH2.textContent = towns[i].name;
          townP1.textContent = towns[i].motto;
          townP2.textContent = 'Founded: ' + towns[i].yearFounded;
          townP3.textContent = 'Population: ' + towns[i].currentPopulation;
          townP4.textContent = 'Annual Rain Fall: ' + towns[i].averageRainfall;
          townImg.setAttribute('src', imgFileName(towns[i].name));
        
          townArticle.appendChild(townH2);
          townArticle.appendChild(townP1);
          townArticle.appendChild(townP2);
          townArticle.appendChild(townP3);
          townArticle.appendChild(townP4);
          townArticle.appendChild(townImg);

          section.appendChild(townArticle);
        }
    }

    function imgFileName(townName) {
        let imgFile = 'images/' + townName.replace(' ', '') + '.jpg';
        return imgFile;
    }
}