let on = false
let newNumber = false
let a = null
let b = null
let lastOper = null
let memory = 0
const screenVisual = document.getElementById("screen")

function start() { //Done
    newNumber = false
    a = null
    b = null
    lastOper = null
}
start()

function once() { //Done
    if (on === false) {
        on = true
    }
    else {
        start()
    }
    screenVisual.innerHTML = "0"
}

function off() { //Done
    if (on === true) {
        screenVisual.innerHTML = " "
        on = false
        start()
    }
}

function add_ (num) { //Add delay and quick disappear and appear to show something happened
    if (on === true) {
        if (screenVisual.textContent[0] === "0" && screenVisual.innerHTML.includes(".") !== true) {
            screenVisual.innerHTML = ""
        } else if (newNumber === true) {
            screenVisual.innerHTML = ""
            newNumber = false
        }
        screenVisual.innerHTML += `${num}`
    }
}

function addDot() { //Done
    if (on === true) {
        if (screenVisual.innerHTML.includes(".") !== true) {
            screenVisual.innerHTML += "."
        }
    }
}

//Memory
function saveMemory() { //To Do
    
}

function saveNegative() { //To Do
    
}

function savePositive() { //To Do
    
}

//Operators
function rootSquare() { //Done
    if (on === true) {
        let value = Number(screenVisual.textContent)
        screenVisual.innerHTML = eval(`${value} ** ${1/2}`)
        newNumber = true
    }
}

function percentage() { //Done
    if (on === true) {
        let value = Number(screenVisual.textContent)
        screenVisual.innerHTML = eval(`${value} / ${100}`)
        newNumber = true
    }
}

function divide() { //Done
    if (on === true) {
        if (a !== null) {
            if (newNumber === false) {
                a = seeResult()
            }
        } else {
            a = Number(screenVisual.textContent)
            newNumber = true
        }
        lastOper = "/"
    }
}

function multiply() { //Done
    if (on === true) {
        if (a !== null) {
            if (newNumber === false) {
                a = seeResult()
            }
        } else {
            a = Number(screenVisual.textContent)
            newNumber = true
        }
        lastOper = "*"
    }
}

function subtract() { //Done
    if (on === true) {
        if (a !== null) {
            if (newNumber === false) {
                a = seeResult()
            }
        } else {
            a = Number(screenVisual.textContent)
            newNumber = true
        }
        lastOper = "-"
    }
}

function plus() { //Done
    if (on === true) {
        if (a !== null) {
            if (newNumber === false) {
                a = seeResult()
            }
        } else {
            a = Number(screenVisual.textContent)
            newNumber = true
        }
        lastOper = "+"
    }
}

function seeResult() { //Done
    if (on === true) {
        b = Number(screenVisual.textContent)
        screenVisual.innerHTML = eval(`${a} ${lastOper} ${b}`)
        start()
        newNumber = true
        return screenVisual.innerHTML
    }
}