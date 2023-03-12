let inputString = "";

function input(value) {
  inputString += value;
  document.getElementById("display").value = inputString;
}

function calculate() {
  const result = eval(inputString);
  document.getElementById("display").value = result;
  inputString = result.toString();
}

function clearDisplay() {
  inputString = "";
  document.getElementById("display").value = "";
}

function backspace() {
  inputString = inputString.slice(0, -1);
  document.getElementById("display").value = inputString;
}
