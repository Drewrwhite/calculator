// business logic
function add(number1, number2) {
  return number1 + number2;
}
function subtract(number3, number4) {
  return number3 - number4;
}
function multiply(number5, number6) {
  return number5 * number6;
}
function divide(number7, number8) {
  return number7 / number8;
}


// user interface logic 
const number1 = parseInt(prompt("Enter a number:"));
const number2 = parseInt(prompt("Enter another number:"));

window.alert(add(number1, number2));

const number3 = parseInt(prompt("Enter a number:"));
const number4 = parseInt(prompt("Enter another number:"));

window.alert(subtract(number3, number4));

const number5 = parseInt(prompt("Enter a number:"));
const number6 = parseInt(prompt("Enter another number:"));

window.alert(multiply(number5, number6));

const number7 = parseInt(prompt("Enter a number:"));
const number8 = parseInt(prompt("Enter another number:"));

window.alert(divide(number7, number8));