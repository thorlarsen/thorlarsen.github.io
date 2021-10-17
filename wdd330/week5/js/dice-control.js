const Dice = function(sides=6){
    this.sides = sides;
    this.roll = function() {
        return Math.floor(this.sides * Math.random() + 1);
    }
}

const firstDiceBtn = document.getElementById('onex6roll');
firstDiceBtn.addEventListener('click', roll1X6);
function roll1X6() {
    const myDie = new Dice();
    document.getElementById('onex6out').innerHTML = myDie.roll();
}

const secondDiceBtn = document.getElementById('twox6roll');
secondDiceBtn.addEventListener('click', roll2X6);
function roll2X6() {
    const my1stDie = new Dice();
    const my2ndDie = new Dice();
    let firstRoll = my1stDie.roll();
    let secondRoll = my2ndDie.roll();
    let total = firstRoll + secondRoll;
    document.getElementById('twox6out').innerHTML = `${firstRoll}, ${secondRoll} Total: ${total} `;
}

const percentDice = document.getElementById('d100roll');
percentDice.addEventListener('touchend', rolld100);
percentDice.addEventListener('click', rolld100);
function rolld100() {
    const myPercentDice = new Dice(100);
    document.getElementById('d100out').innerHTML = myPercentDice.roll();
}

const dstarBtn = document.getElementById('dstarx1roll');
dstarBtn.addEventListener('click', (event) => {
    event.preventDefault();
    rolldstarx1();
});
function rolldstarx1() {
    const myDstarDie = new Dice(document.getElementById('nsides').value);
    document.getElementById('dstarx1out').innerHTML = myDstarDie.roll();
}

const manyRollBtn = document.getElementById('dstarmroll');
manyRollBtn.addEventListener('click', (event) => {
    event.preventDefault();
    manySidesManyRolls();
});
function manySidesManyRolls() {
    const numSides = document.getElementById('msides').value;
    let numRolls = document.getElementById('mrolls').value;
    const myManyDice = new Dice(numSides)
    let total = 0;
    let outString = '';
    for( ; numRolls > 0 ; numRolls-- ) {
      let theRoll = myManyDice.roll();
      total = total + theRoll;
      if(numRolls > 1) {
         outString = outString + theRoll + ', ';
      } else {
        outString = outString + theRoll + ' ';  
      }
    }
    document.getElementById('dstarmout').innerHTML = outString + 'Total: ' + total; 
}