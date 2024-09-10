let num1 = 8
let num2 = 2
let x = 0
let result = document.getElementById("result-el")
let selector = document.getElementById("select")

document.getElementById("num1-el").textContent = num1
document.getElementById("num2-el").textContent = num2

function add() {
    selector.textContent = ""
    result.textContent = "Result: "
    x = num1 + num2
    result.textContent += x
    selector.textContent = "+"
}

function subtract() {
    selector.textContent = ""
    result.textContent = "Result: "
    x = num1 - num2
    result.textContent += x
    selector.textContent = "-"
}


function divide() {
    selector.textContent = ""
    result.textContent = "Result: "
    x = num1 / num2
    result.textContent += x
    selector.textContent = "/"
}


function multiply() {
    selector.textContent = "x"
    result.textContent = "Result: "
    x = num1 * num2
    result.textContent += x
    selector.textContent = "x"
}
