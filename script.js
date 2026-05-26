let on = false
let newNumber = false
let a = null
let b = null
let oper = null
let lastOper = null
const screenVisual = document.getElementById("screen")

function start() {
    newNumber = false
    a = null
    b = null
    oper = null
}
start()

function once() { //Done
    if (on === false) {
        screenVisual.innerHTML = "0"
        on = true
    }
    else {
        screenVisual.innerHTML = "0"
        start()
    }
}

function off() { //Done
    if (on === true) {
        screenVisual.innerHTML = " "
        on = false
        start()
    }
}

function add_ (num) { //Done
    if (on === true) {
        if (screenVisual.textContent[0] === "0") {
            screenVisual.innerHTML = ""
        } else if (newNumber === true) {
            screenVisual.innerHTML = ""
            newNumber = false
        }
        screenVisual.innerHTML += `${num}`
    }
}

function addDot() { //To Do
    
}

function saveMemory() {
    
}

function saveNegative() {
    
}

function savePositive() {
    
}

//Operators
function rootSquare() {
    if (on === true) {

    }
}

function percentage() {
    if (on === true) {

    }
}

function divide() {
    if (on === true) {
        if (a !== null) {
            b = Number(screenVisual.textContent)
            a = seeResult(a, lastOper, b)
            a = null
            divide()
        } else {
            a = Number(screenVisual.textContent)
            lastOper = "/"
            newNumber = true
        }
    }
}

function multiply() {
    if (on === true) {
        if (a !== null) {
            b = Number(screenVisual.textContent)
            a = seeResult(a, lastOper, b)
            a = null
            multiply()
        } else {
            a = Number(screenVisual.textContent)
            lastOper = "*"
            newNumber = true
        }
    }
}

function subtract() {
    if (on === true) {
        if (a !== null) {
            b = Number(screenVisual.textContent)
            a = seeResult(a, lastOper, b)
            a = null
            subtract()
        } else {
            a = Number(screenVisual.textContent)
            lastOper = "-"
            newNumber = true
        }
    }
}

function plus() {
    if (on === true) {
        if (a !== null) {
            b = Number(screenVisual.textContent)
            a = seeResult(a, lastOper, b)
            a = null
            plus()
        } else {
            a = Number(screenVisual.textContent)
            lastOper = "+"
            newNumber = true
        }
    }
}

function seeResult(a, oper, b) {
    if (on === true) {
        screenVisual.innerHTML = eval(`${a} ${oper} ${b}`)
        newNumber = true
        start()
        return eval(`${a} ${oper} ${b}`)
    }
}