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
const buttons = document.querySelectorAll('.key-num')





// function that changes the display

function changeDisplay(text)    {
    document.getElementById('display').innerHTML = text;
}


let calculus = {
    operand1: null,
    typeOfOperand1: null,
    typeOfOperand2: null,
    operand2: null,
    result: null
};
// function to store the value of a button

function storeVal(value)    {
    if(calculus.operand1 == null)   {
        calculus.operand1 = parseInt(value.getAttribute('value'));
        changeDisplay(calculus.operand1);
        console.log(calculus.operand1);
    }
    else if(calculus.typeOfOperand1 == null && calculus.operand1 != null)    {
        let amount = parseInt(value.getAttribute('value'));
        calculus.operand1 = (calculus.operand1 * 10) + amount;
        console.log(calculus.operand1);
        return changeDisplay(calculus.operand1);
    }
    else if(calculus.typeOfOperand1 != null && calculus.operand2 == null && calculus.operand1 != null)  {
        changeDisplay('');
        calculus.operand2 = parseInt(value.getAttribute('value'));
        changeDisplay(calculus.operand2);
        console.log(calculus.operand2);
    }   else if(calculus.operand2 != null)  {
        let amount2 = parseInt(value.getAttribute('value'));
        calculus.operand2 = (calculus.operand2 * 10) + amount2;
        console.log(calculus.operand2);
        changeDisplay(calculus.operand2);
    }
}

// function to store the operand pressed
// let whichOperand = null;
// function storeOperand(value)    {
//     calculus.typeOfOperand = value.getAttribute('value');
//     changeDisplay(calculus.typeOfOperand);
//     console.log(calculus.typeOfOperand);
// }

// a function to check if a button has been pressed
// function checkButtonPressed()   {
//     if(amount != null && whichOperand != null)  {
//         return true;
//     }   else    {
//         return false;
//     }
// }

// function to make the calculus once the equal button is pressed 
function result()   {
    // resetCalculus();
    calculus.result = operate(calculus.operand1, calculus.typeOfOperand1, calculus.operand2);
    changeDisplay(calculus.result);
    return calculus.result;
}

// function to erase array calculus 
function resetCalculus()    {
    calculus.operand1 = null;
    calculus.operand2 = null;
    calculus.typeOfOperand1 = null;
    calculus.result = null;
}
// doesnt work
// function clear()    {
//     resetCalculus();
//     changeDisplay("0");
// }

const operandButton = document.querySelectorAll('button.key-operand');
operandButton.forEach(button => {
    button.addEventListener('click', () => {
        if(calculus.typeOfOperand1 != null) {
            operationAfterOperand = result();
            secondOperandPressed = button.value;
            resetCalculus();
            calculus.operand1 = parseInt(operationAfterOperand);
            calculus.typeOfOperand1 = secondOperandPressed;
            console.log('b');

            
        } else {
            calculus.typeOfOperand1 = button.value;
            console.log('a');
        }
    })
})


const clearButton = document.querySelector('button.key-clear');
clearButton.addEventListener('click', () => {
    console.log('h');
    resetCalculus();
    changeDisplay("");
});

