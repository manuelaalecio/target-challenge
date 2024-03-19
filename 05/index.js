const setElementResult = document.querySelector("#result");

function reverseString() {
  const input = document.querySelector("#inputString").value;
  let resultReversedString = "";
  if (input === "") {
    setElementResult.innerText = "Por favor, digite uma palavra.";
    return;
  }
  for (let i = input.length - 1; i >= 0; i--) {
    resultReversedString += input[i];
  }
  setElementResult.innerText = resultReversedString;
}
