let display = document.getElementById('display');
let currentNumber = '';
let operator = null;
let previousNumber = '';

function appendNumber(number) {
    currentNumber += number;
    display.value = currentNumber;
}

function setOperator(op) {
    if (operator !== null || currentNumber === '') return;
    operator = op;
    previousNumber = currentNumber;
    currentNumber = '';
}

function calculateResult() {
    if (operator === null || currentNumber === '') return;
    let result = eval(previousNumber + operator + currentNumber);
    display.value = result;
    currentNumber = result.toString();
    operator = null;
    previousNumber = '';
}

function clearDisplay() {
    currentNumber = '';
    operator = null;
    previousNumber = '';
    display.value = '';
}