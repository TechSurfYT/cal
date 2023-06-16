const resultFinal = document.getElementById('result')
var currentString  = document.getElementById("statusCurrent")
const buttonOne = document.getElementById("1")
const buttonTwo = document.getElementById("2")
const buttonThree = document.getElementById("3")
const buttonFour = document.getElementById("4")
const buttonFive = document.getElementById("5")
const buttonSix = document.getElementById("6")
const buttonSeven= document.getElementById("7")
const buttonEight = document.getElementById("8")
const buttonNine = document.getElementById("9")
const buttonTen = document.getElementById("0")
const buttonAdd = document.getElementById("add")
const buttonSubtract = document.getElementById("subtract")
const buttonDivide = document.getElementById("divide")
const buttonMultiply = document.getElementById("multiply")
const buttonEquals = document.getElementById("equals")
const clearButton  = document.getElementById("clear")




buttonOne.onclick = function() { currentString.conc(buttonOne.innerHTML)}
buttonTwo.onclick = function() { currentString.append(buttonTwo.innerHTML)}
buttonThree.onclick = function() { currentString.append(buttonThree.innerHTML)}
buttonFour.onclick = function() { currentString.append(buttonFour.innerHTML)}
buttonFive.onclick = function() { currentString.append(buttonFive.innerHTML)}
buttonSix.onclick = function() { currentString.append(buttonSix.innerHTML)}
buttonSeven.onclick = function() { currentString.append(buttonSeven.innerHTML)}
buttonEight.onclick = function() { currentString.append(buttonEight.innerHTML)}
buttonNine.onclick = function() { currentString.append(buttonNine.innerHTML)}
buttonTen.onclick = function() { currentString.append(buttonTen.innerHTML)}
buttonAdd.onclick = function() { currentString.append(buttonAdd.innerHTML)}
buttonSubtract.onclick = function() { currentString.append(buttonSubtract.innerHTML)}
buttonDivide.onclick = function() { currentString.append(buttonDivide.innerHTML)}
buttonMultiply.onclick = function() { currentString.append(buttonMultiply.innerHTML)}





buttonEquals.onclick = function() {var expression = currentString.innerHTML
    expression = expression.replace(/\s+/g, '')
    console.log(expression)
    const result = eval(expression)
    resultFinal.innerHTML = result}


clearButton.onclick = function() {currentString.innerHTML = " "
resultFinal.innerHTML = " "
}
