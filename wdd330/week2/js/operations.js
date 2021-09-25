function req1Display() {
    const input = document.getElementById('input1').value;
    writeAnswer2div('output1',input);
}


function req2Display() {
    const input = document.getElementById('input2').value;
    let sum = parseInt(input);
    for (let i = sum - 1 ; i > 0; i--){
        sum += i;
    }
    writeAnswer2div('output2',sum);
}

function req3Display() {
    const firstInput = parseFloat(document.getElementById('input31').value);
    const secondInput = parseFloat(document.getElementById('input32').value);
    let sum = firstInput + secondInput;
    writeAnswer2div('output3',sum);
}

function getNum(id) {
    const number = parseFloat(document.getElementById(id).value);
    return number;
}

const add = (num1, num2) => num1 + num2;

const sub = (num1, num2) => num1 - num2;

const mlt = (num1, num2) => num1 * num2;

function doOp(op) {
    const answer = op(getNum('inputs1'), getNum('inputs2'));
    writeAnswer2div('outputs', answer)
}

function writeAnswer2div(divId, answer) {
    const output = document.getElementById(divId);
    output.innerHTML = answer;
}
