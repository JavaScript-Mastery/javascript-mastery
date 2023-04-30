function calculate() {
  // Get user input
  let num1 = parseInt(document.getElementById("num1").value);
  let num2 = parseInt(document.getElementById("num2").value);
  let operation = document.getElementById("operation").value;

  // Perform calculation
  let result;
  if (operation === "add") {
    result = num1 + num2;
  } else if (operation === "subtract") {
    result = num1 - num2;
  } else if (operation === "multiply") {
    result = num1 * num2;
  } else if (operation === "divide") {
    result = num1 / num2;
  }

  // Display result
  document.getElementById("result").innerHTML =result;
}
