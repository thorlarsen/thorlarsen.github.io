const x = "X";
const o = "O";
let player = x;
let xcount = 0;
let ocount = 0;
let isover = false;

function resetBoard(){
  document.querySelectorAll(".block").forEach((block) => (block.textContent = ""));
  player = x;
  isover = false;
}

function play(id) {   
  if (id.textContent != x && id.textContent != o) {
    id.innerHTML=player;
    changePlayer();
    check4winner(id);
  }
}

function changePlayer() {
  if (player == x) {
    player = o;
  } else {
    player = x;
  }
}

function check4winner(id) {

}

