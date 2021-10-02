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
clickTestDiv.addEventListener('dblclick', () => clickTestDiv.style.backgroundColor = "#ff0000" );

const kdResp = document.getElementById('kd');
const kpResp = document.getElementById('kp');
const kuResp = document.getElementById('ku');
addEventListener('keydown', ( event ) => kdResp.innerHTML = `<span id="kdout">You're holding ${event.key} </span>`);
addEventListener('keypress', ( event ) => kpResp.innerHTML = `<span id="kpout">You pressed ${event.key} </span>`);
addEventListener('keyup', ( event ) => {
    kuResp.innerHTML = `<span id="kuout">You released ${event.key} </span>`;
    kdResp.innerHTML = ' ';
});

const rmDiv = document.querySelector('#guidequotes');
rmDiv.addEventListener('mouseover', changeGuideColor);
function changeGuideColor() {
    rmDiv.style.color = '#003152';
    rmDiv.style.backgroundColor = '#aaaaaa';
}
rmDiv.addEventListener('mouseout', changeGuideBack);
function changeGuideBack() {
    rmDiv.style.color = '#aaaaaa';
    rmDiv.style.backgroundColor = '#003152';
}
rmDiv.addEventListener('click', removeMouseOver);
function removeMouseOver() {
    changeGuideBack();
    rmDiv.removeEventListener('mouseover', changeGuideColor);
}


const brokenLink = document.getElementById('broken');
brokenLink.addEventListener('click',(event) => {
    event.preventDefault();
    document.getElementById('brokenresponse').innerHTML = "I promise this is all it does.";
    }
); 