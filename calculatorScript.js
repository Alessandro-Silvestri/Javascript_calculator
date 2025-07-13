// Dom elements conversion
let button_1 = document.getElementById("button_1");
let button_2 = document.getElementById("button_2");
let resultField = document.getElementById("resultField");
let cancel = document.getElementById("cancel");
let button_Add = document.getElementById("button_Add");
let button_divide = document.getElementById("button_divide");
let button_mult = document.getElementById("button_mult");
let button_sub = document.getElementById("button_sub");
let equal = document.getElementById("equal");

// vars
let equalPressed = false;

function addToDisplay(numOrOperator) {
    if (equalPressed){
        resultField.textContent = "0";
        equalPressed = false;
    }

    if (resultField.textContent != "0") {
        resultField.textContent += numOrOperator;
    }
    else {
        resultField.textContent = numOrOperator;
    }
}

// Dom elements actions
button_1.addEventListener('click', () => {
    addToDisplay("1");
})

button_2.addEventListener('click', () => {
    addToDisplay("2")
})

button_3.addEventListener('click', () => {
    addToDisplay("3")
})

button_4.addEventListener('click', () => {
    addToDisplay("4")
})

button_5.addEventListener('click', () => {
    addToDisplay("5")
})

button_6.addEventListener('click', () => {
    addToDisplay("6")
})

button_7.addEventListener('click', () => {
    addToDisplay("7")
})

button_8.addEventListener('click', () => {
    addToDisplay("8")
})

button_9.addEventListener('click', () => {
    addToDisplay("9")
})

button_0.addEventListener('click', () => {
    addToDisplay("0")
})


// operators actions
button_Add.addEventListener('click', () => {
    addToDisplay("+");
})

button_divide.addEventListener('click', () => {
    addToDisplay("/");
})

button_mult.addEventListener('click', () => {
    addToDisplay("*");
})

button_sub.addEventListener('click', () => {
    addToDisplay("-");
})

equal.addEventListener('click', () => {
    resultField.textContent = eval(resultField.textContent);
    equalPressed = true;
})

cancel.addEventListener('click', () => {
    resultField.textContent = "0";
})