let currentInput = "";

function press(value) {
  if (currentInput === "0") currentInput = "";
  currentInput += value;
  document.getElementById("display").textContent = currentInput;
}

function calculate() {
  try {
    currentInput = eval(currentInput).toString(); // evaluates the math expression
    document.getElementById("display").textContent = currentInput;
  } catch {
    document.getElementById("display").textContent = "Error";
    currentInput = "";
  }
}

function clearDisplay() {
  currentInput = "";
  document.getElementById("display").textContent = "0";
}



Resources
