const x = "X";
const o = "O";
let player = x;
let xcount = 0;
let ocount = 0;
let isover = false;
let catCount = 0;

function resetBoard(){
  document.querySelectorAll(".block").forEach((block) => (block.textContent = ""));
  player = x;
  isover = false;
  catCount = 0;
}

function play(id) {   
  if (!isover && id.textContent != x && id.textContent != o) {
    id.innerHTML=player;
    if (check4winner(player)) {
      if (player==="X")
      {
        isover = true;
        alert("X Wins");
      }
      else
      {
        isover = true;
        alert("O Wins");
      }
    }
    catCount++;
    //debug
    //alert(catCount);
    //
    if (catCount < 9) {
    changePlayer();
  } else {
    isover = true;
    alert("Tie game")
  }
  }
}

function changePlayer() {
  if (player == x) {
    player = o;
  } else {
    player = x;
  }
}

function check4winner(player) {
  if (document.getElementById("1").innerHTML === player && 
    document.getElementById("2").innerHTML === player && 
    document.getElementById("3").innerHTML === player)
    {
      return true;
    }
    else if (
      document.getElementById("4").innerHTML === player && 
    document.getElementById("5").innerHTML === player && 
    document.getElementById("6").innerHTML === player
    )
    {
      return true;
    }
    else if (
      document.getElementById("7").innerHTML === player && 
    document.getElementById("8").innerHTML === player && 
    document.getElementById("9").innerHTML === player
    )
    {
      return true;
    }
    if (document.getElementById("1").innerHTML === player && 
    document.getElementById("4").innerHTML === player && 
    document.getElementById("7").innerHTML === player)
    {
      return true;
    }
    else if (
      document.getElementById("2").innerHTML === player && 
    document.getElementById("5").innerHTML === player && 
    document.getElementById("8").innerHTML === player
    )
    {
      return true;
    }
    else if (
      document.getElementById("3").innerHTML === player && 
    document.getElementById("6").innerHTML === player && 
    document.getElementById("9").innerHTML === player
    )
    {
      return true;
    }
    else if (
      document.getElementById("1").innerHTML === player && 
    document.getElementById("5").innerHTML === player && 
    document.getElementById("9").innerHTML === player
    )
    {
      return true;
    }
    else if (
      document.getElementById("3").innerHTML === player && 
    document.getElementById("5").innerHTML === player && 
    document.getElementById("7").innerHTML === player
    )
    {
      return true;
    }
    return false;
}

