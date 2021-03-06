const output = document.getElementById("output");
const msg = document.getElementById("msgbox");

//math
const add = function (a, b) {
    return a + b;
};

const subtract = function (a, b) {
    return a - b;
};

const multiply = function (a, b) {
    return a * b;
};

const divide = (a, b) => {
    return a / b;
};

//input variables
let first = "";
let last = "";
//operator variable
let op;
//controls storing first or last number
let second = false;

//operators and function buttons
const btnDiv = document.getElementById("divi");
const btnMult = document.getElementById("mult");
const btnSub = document.getElementById("sub");
const btnAdd = document.getElementById("add");
const reset = document.getElementById("reset");
const equals = document.getElementById("=");
let hasCalculated = false;
let lastCalcResult;

btnDiv.addEventListener('click', () => {
    chooseOp("d");
});
btnSub.addEventListener('click', () => {
    chooseOp("s");
});
btnAdd.addEventListener('click', () => {
    chooseOp("a");
});
btnMult.addEventListener('click', () => {
    chooseOp("m");
});
reset.addEventListener('click', () => {
    output.textContent = "0";
    clear();
    second = false;
    hasCalculated = false;
    lastCalcResult = "";

});
equals.addEventListener('click', () => {
    if (op == "" || last == "" || first == "") {
        msg.textContent = "Please supply operator or start a new calculation";
    } else if (last == 0 && first == 0) {
        output.textContent = "quit trying to break my calculator";
        msg.textContent = "quit trying to break my calculator";
        clear();
    } else {
        lastCalcResult = operate(first, last, op);
        output.textContent = lastCalcResult;
        clear();
        hasCalculated = true;
    }
});



//numpad buttons
const num1 = document.getElementById("1");
const num2 = document.getElementById("2");
const num3 = document.getElementById("3");
const num4 = document.getElementById("4");
const num5 = document.getElementById("5");
const num6 = document.getElementById("6");
const num7 = document.getElementById("7");
const num8 = document.getElementById("8");
const num9 = document.getElementById("9");
const num0 = document.getElementById("0");
const back = document.getElementById("back");

num1.addEventListener('click', () => {
    choice(1);
});
num2.addEventListener('click', () => {
    choice(2);
});
num3.addEventListener('click', () => {
    choice(3);
});
num4.addEventListener('click', () => {
    choice(4);
});
num5.addEventListener('click', () => {
    choice(5);
});
num6.addEventListener('click', () => {
    choice(6);
});
num7.addEventListener('click', () => {
    choice(7);
});
num8.addEventListener('click', () => {
    choice(8);
});
num9.addEventListener('click', () => {
    choice(9);
});
num0.addEventListener('click', () => {
    if (first == 0 || last == 0) {
        msg.textContent = "Invalid, Please enter value greater than 0";
        output.textContent = "";
    } else {
        choice(0);
    }
});
back.addEventListener('click', () => {
    del();
});

/* CORE LOGIC*/

// calculation logic
const operate = (a, b, f) => {
    switch (f) {
        case 'a':
            return add(+a, +b);
            break;
        case 'd':
            return divide(+a, +b);
            break;
        case 'm':
            return multiply(+a, +b);
            break;
        case 's':
            return subtract(+a, +b);
            break;
        default:
            output.textContent = "";
            msg.textContent = "No Operator supplied!";

    }
};

// collects user input
const choice = input => {
    msg.textContent = "";
    if (second == false) {
        first += input;
        output.textContent = first;
    } else if (second == true) {
        last += input;
        output.textContent = last;
    } else {
        msg.textContent = "Something is broken";
    }
}

// collects operator
const chooseOp = input => {
    msg.textContent = "";
    if (hasCalculated == true) {
        first = lastCalcResult;
        hasCalculated = false;
    }
    op = input;
    output.textContent = "0"
    second = true;
}


const clear = () => {
    op = "";
    last = "";
    first = "";
    msg.textContent = "";
}

const del = () => {
    if (second == false) {
       let array = first.split();
       let removed = array.pop();
       array.join("");
       return array;
    } else {
        let array = last.split();
       let removed = array.pop();
       array.join("");
       return array;
    }
}