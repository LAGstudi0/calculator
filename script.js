// add

function add(a, b)  {
    return a + b;
}
// console.log(add(5, 5));

// subtract

function subtract(a, b) {
    return a - b;
}
// console.log(subtract(5, 5));

// multiply

function multiply(a, b) {
    return a * b;
}
// console.log(multiply(5, 5));

// divide

function divide(a, b)   {
    return a / b;
}
// console.log(divide(5, 5));

// function operate that takes an operator and 2 numbers and then calls 
// one of the above functions on the numbers.

function operate(x, operand, y) {
    if(operand == '*')  {
        return multiply(x,y);
    }
    else if(operand == '+') {
        return add(x, y);
    }
    else if(operand == '-') {
        return subtract(x, y);
    }
    else if(operand == '/') {
        return divide(x, y);
    }
}

const display = document.querySelector('#display');
const buttons = document.querySelector('.key-num')





// function that changes the display

function changeDisplay(text)    {
    document.getElementById('display').innerHTML = text;
}


