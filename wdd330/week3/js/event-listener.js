// Cheese homage
/* function visibleCheese(){
    document.getElementById('cheesetxt').style.color = 'black';
} */
//document.getElementById('cheesetxt').addEventListener('mouseover',visibleCheese);
//addEventListener('click',visibleCheese);
document.getElementById('cheesetxt').addEventListener('mouseover', ( event ) => {
    event.target.style.color = '#000000'
}
);
document.getElementById('cheesetxt').addEventListener('mouseout', ( event ) => {
    event.target.style.color = '#f2be6f'
}
);

const clickTestDiv = document.querySelector('#clickresp');
clickTestDiv.addEventListener('click', changeDivColor);
function changeDivColor() {
    clickTestDiv.style.backgroundColor = "#ffffff"
};


const brokenLink = document.getElementById('broken');
brokenLink.addEventListener('click',(event) => {
    event.preventDefault();
    document.getElementById('brokenresponse').innerHTML = "I promise this is all it does.";
    }
); 