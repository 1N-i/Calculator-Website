let on = false
const screenVisual = document.getElementById("screen")

function once() { //Done
    if (on === false) {
        screenVisual.innerHTML = "0"
        on = true
    }
    else {
        screenVisual.innerHTML = "0"
    }
}

function add_ (num) {
    if (on === true) {
        if (screenVisual.textContent[0] === "0") {
            screenVisual.innerHTML = ""
        }
        screenVisual.innerHTML += `${num}`
    }
}

function saveMemory() {
    
}

function saveNegative() {
    
}

function savePositive() {
    
}

function off() { //Done
    if (on === true) {
        screenVisual.innerHTML = " "
        on = false
    }
}

function rootSquare() {
    
}

function percentage() {
    
}

function divide() {
    
}

function multiply() {
    
}

function subtract() {
    
}

function plus() {
    
}

function addDot() {
    
}

function seeResult() {
    
}