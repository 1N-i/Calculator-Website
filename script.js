let on = false
let newNumber = false
let a = null
let b = null
let oper = null
let lastOper = null
const screenVisual = document.getElementById("screen")

function start() { //Done
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

function saveMemory() { //To Do
    
}

function saveNegative() { //To Do
    
}

function savePositive() { //To Do
    
}

//Operators
function rootSquare() {
    if (on === true) {
        if (a !== null) {
            if (newNumber === false) {
                a = seeResult()
                newNumber = true
            }
        } else {
            a = Number(screenVisual.textContent)
            newNumber = true
        }
    }
}

function percentage() { //To Do
    if (on === true) {

    }
}

function divide() {
    if (on === true) {
        if (a !== null) {
            if (newNumber === false) {
                a = seeResult()
                newNumber = true
            }
        } else {
            a = Number(screenVisual.textContent)
            newNumber = true
        }
        lastOper = "/"
    }
}

function multiply() {
    if (on === true) {
        if (a !== null) {
            if (newNumber === false) {
                a = seeResult()
                newNumber = true
            }
        } else {
            a = Number(screenVisual.textContent)
            newNumber = true
        }
        lastOper = "*"
    }
}

function subtract() {
    if (on === true) {
        if (a !== null) {
            if (newNumber === false) {
                a = seeResult()
                newNumber = true
            }
        } else {
            a = Number(screenVisual.textContent)
            newNumber = true
        }
        lastOper = "-"
    }
}

function plus() {
    if (on === true) {
        if (a !== null) {
            if (newNumber === false) {
                a = seeResult()
                newNumber = true
            }
        } else {
            a = Number(screenVisual.textContent)
            newNumber = true
        }
        lastOper = "+"
    }
}

function seeResult() {
    if (on === true) {
        b = Number(screenVisual.textContent)
        screenVisual.innerHTML = eval(`${a} ${lastOper} ${b}`)
        start()
        return screenVisual.innerHTML
    }
}