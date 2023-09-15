// Load our variables

let submitButton = document.getElementById("submitButton");
let button1 = document.getElementById("button1");
let button2 = document.getElementById("button2");
let button3 = document.getElementById("button3");
let button4 = document.getElementById("button4");
let button5 = document.getElementById("button5");
let scoreDisplay = document.getElementById("scoreDisplay");
let mainWindow = document.getElementById("mainWindow");
let secondaryWindow = document.getElementById("secondaryWindow");

let selectedValues = [];

// Hide the main window and show the secondary window
submitButton.addEventListener("click", () => {
    mainWindow.classList.remove("block");
    mainWindow.classList.add("hidden");
    secondaryWindow.classList.remove("hidden");
    secondaryWindow.classList.add("block");
});

// Load the selected button's value into our array. When another button is selected, the previous value will be cleared.
button1.addEventListener("click", () => {
    let value = button1.textContent;
    let number = Number(value);
    if (selectedValues.length !== 0) {
        selectedValues = [];
        selectedValues.push(number);
    } else {
        selectedValues.push(number);
    }
    scoreDisplay.innerText = `You selected ${selectedValues[0]} out of 5`;
});

button2.addEventListener("click", () => {
    let value = button2.textContent;
    let number = Number(value);
    if (selectedValues.length !== 0) {
        selectedValues = [];
        selectedValues.push(number);
    } else {
        selectedValues.push(number);
    }
    scoreDisplay.innerText = `You selected ${selectedValues[0]} out of 5`;
});

button3.addEventListener("click", () => {
    let value = button3.textContent;
    let number = Number(value);
    if (selectedValues.length !== 0) {
        selectedValues = [];
        selectedValues.push(number);
    } else {
        selectedValues.push(number);
    }
    scoreDisplay.innerText = `You selected ${selectedValues[0]} out of 5`;
});

button4.addEventListener("click", () => {
    let value = button4.textContent;
    let number = Number(value);
    if (selectedValues.length !== 0) {
        selectedValues = [];
        selectedValues.push(number);
    } else {
        selectedValues.push(number);
    }
    scoreDisplay.innerText = `You selected ${selectedValues[0]} out of 5`;
});

button5.addEventListener("click", () => {
    let value = button5.textContent;
    let number = Number(value);
    if (selectedValues.length !== 0) {
        selectedValues = [];
        selectedValues.push(number);
    } else {
        selectedValues.push(number);
    }
    scoreDisplay.innerText = `You selected ${selectedValues[0]} out of 5`;
});
