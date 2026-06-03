let on = false
let memory = 0
let newNumber = false
let a = null
let b = null
let lastOper = null
const sleep = ms => new Promise((resolve) => setTimeout(resolve, ms));
const screenVisual = document.getElementById("screen")

function start() {
    newNumber = false
    a = null
    b = null
    lastOper = null
}
start()

function once() {
    if (on === false) {
        on = true
    }
    else {
        start()
    }
    screenVisual.innerHTML = "0"
}

function off() {
    if (on === true) {
        screenVisual.innerHTML = " "
        on = false
        start()
    }
}

async function delay() {
    let visualDelay = screenVisual.innerHTML
    screenVisual.innerHTML = ""
    await sleep(50)
    screenVisual.innerHTML = visualDelay
}

async function add_(num) {
    if (on === true) {
        if (screenVisual.textContent[0] === "0" && screenVisual.innerHTML.includes(".") !== true) {
            screenVisual.innerHTML = ""
        } else if (newNumber === true) {
            screenVisual.innerHTML = ""
            newNumber = false
        }
        await delay()
        screenVisual.innerHTML += `${num}`
    }
}

async function addDot() {
    if (on === true) {
        if (screenVisual.innerHTML.includes(".") !== true) {
            await delay()
            screenVisual.innerHTML += "."
        }
    }
}

//Memory
async function saveMemory() {
    if (on === true) {
        await delay()
        screenVisual.innerHTML = memory
        newNumber = true
    }
}

async function subtractMemory() {
    if (on === true) {
        await delay()
        memory -= Number(screenVisual.textContent)
        newNumber = true
    }
}

async function addMemory() {
    if (on === true) {
        await delay()
        memory += Number(screenVisual.textContent)
        newNumber = true 
    }}

//Operators
async function rootSquare() {
    if (on === true) {
        await delay()
        let value = Number(screenVisual.textContent)
        screenVisual.innerHTML = (value ** (1/2))
        newNumber = true
    }
}

async function percentage() {
    if (on === true) {
        await delay()
        let value = Number(screenVisual.textContent)
        screenVisual.innerHTML = (value / 100)
        newNumber = true
    }
}

async function divide() {
    if (on === true) {
        if (a !== null) {
            if (newNumber === false) {
                a = seeResult()
            }
        } else {
            a = Number(screenVisual.textContent)
            newNumber = true
        }
        await delay()
        lastOper = "/"
    }
}

async function multiply() {
    if (on === true) {
        if (a !== null) {
            if (newNumber === false) {
                a = seeResult()
            }
        } else {
            a = Number(screenVisual.textContent)
            newNumber = true
        }
        await delay()
        lastOper = "*"
    }
}

async function subtract() {
    if (on === true) {
        if (a !== null) {
            if (newNumber === false) {
                a = seeResult()
            }
        } else {
            a = Number(screenVisual.textContent)
            newNumber = true
        }
        await delay()
        lastOper = "-"
    }
}

async function plus() {
    if (on === true) {
        if (a !== null) {
            if (newNumber === false) {
                a = seeResult()
            }
        } else {
            a = Number(screenVisual.textContent)
            newNumber = true
        }
        await delay()
        lastOper = "+"
    }
}

function seeResult() {
    if (on === true) {
        b = Number(screenVisual.textContent)
        if (lastOper === "/") {
            screenVisual.innerHTML = a / b
        } else if (lastOper === "*") {
            screenVisual.innerHTML = a * b
        } else if (lastOper === "-") {
            screenVisual.innerHTML = a - b
        } else if (lastOper === "+") {
            screenVisual.innerHTML = a + b
        }
        start()
        newNumber = true
        return screenVisual.innerHTML
    }
}