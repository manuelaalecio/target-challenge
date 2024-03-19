const setElementResult = document.querySelector("#result");
const number = parseInt(input);

function checkFibonacci() {
  const number = parseInt(document.getElementById("number").value);
  if (isNaN(number)) {
    setElementResult.innerText = `Por favor, digite um número.`;
    return;
  }

  if (isFibonacci(number)) {
    setElementResult.innerText = `O número ${number} está na sequência de Fibonacci.`;
  } else {
    setElementResult.innerText = `O número ${number} NÃO está na sequência de Fibonacci.`;
  }
}

function isFibonacci(number) {
  if (number === 0 || number === 1) {
    return true;
  }
  let firstNumber = 0,
    secondNumber = 1;
  while (secondNumber < number) {
    let temp = secondNumber;
    secondNumber = firstNumber + secondNumber;
    firstNumber = temp;
  }
  return secondNumber === number;
}
