let next = ""
let previous = ""

function getPrevious() {
    if (!(previous == null)) 
        loadTen(previous)
}
function getNext() {
    if (!(next == null))
        loadTen(next)
}
function loadTen(url) {
    document.getElementById("shipContainer").innerHTML = "";
    fetch(url)
    .then(response => response.json())
    .then(data => {
        data.results.forEach(element => {
            let width100 = document.createElement("div")
            let line = document.createElement("hr")
            width100.classList.add("width100")
            let ship = document.createElement("p")
            ship.classList.add("ship")
            let shipName = document.createTextNode(element.name)
            ship.appendChild(shipName)
            width100.appendChild(ship)
            width100.appendChild(line)
            document.getElementById("shipContainer").appendChild(width100)
        }          
        );
        next = data.next
        previous = data.previous  
    });
}
loadTen("https://swapi.dev/api/starships")