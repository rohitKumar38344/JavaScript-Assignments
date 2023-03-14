const firstInput = document.getElementById("firstNum");
const secondInput = document.getElementById("secondNum");
const outputField = document.querySelector(".output");
const operation = document.getElementById("operation");

let firstValue;
let secondValue;
let operationToPerform;

const getUserInput = function () {
  firstValue = Number(firstInput.value);
  secondValue = Number(secondInput.value);
  operationToPerform = operation.value;
};
const displayOutput = function (value) {
  outputField.innerText = value;
};

const calculate = function () {
  let result;
  getUserInput();
  switch (operationToPerform) {
    case "+":
      result = firstValue + secondValue;
      displayOutput(result);
      break;
    case "-":
      result = firstValue - secondValue;
      displayOutput(result);
      break;
    case "*":
      result = firstValue * secondValue;
      displayOutput(result);
      break;
    case "/":
      result = (firstValue / secondValue).toFixed(4);
      displayOutput(result);
      break;
    default:
      console.log("Invalid Operation!");
  }
};
document.querySelector("button").addEventListener("click", calculate);
