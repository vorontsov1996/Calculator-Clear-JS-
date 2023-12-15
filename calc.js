let firstNumber = "";
let secondNumber = "";
let sign = "";
let finish = false;

const digit = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "."];
const action = ["-", "+", "x", "/"];

const out = document.querySelector(".calc-screen p");

function clearAll() {
  firstNumber = "";
  secondNumber = "";
  sign = "";
  finish = false;
  out.textContent = 0;
}

document.querySelector(".ac").onclick = clearAll;

document.querySelector(".buttons").onclick = (event) => {
  if (!event.target.classList.contains("btn")) return;
  if (event.target.classList.contains("ac")) return;

  out.textContent = "";
  const key = event.target.textContent;

  if (digit.includes(key)) {
    if (secondNumber === "" && sign === "") {
      firstNumber += key;
      out.textContent = firstNumber;
    } else if (firstNumber !== "" && secondNumber !== "" && finish) {
      secondNumber = key;
      finish = false;
      out.textContent = secondNumber;
    } else {
      secondNumber += key;
      out.textContent = secondNumber;
      return;
    }
  }

  if (action.includes(key)) {
    sign = key;
    out.textContent = sign;
    return;
  }

  if (key === "=") {
    if (secondNumber === "") {
      secondNumber = firstNumber;
    }
    switch (sign) {
      case "+":
        firstNumber = +firstNumber + +secondNumber;
        break;
      case "-":
        firstNumber = firstNumber - secondNumber;
        break;
      case "x":
        firstNumber = firstNumber * secondNumber;
        break;
      case "/":
        if (secondNumber === "0") {
          out.textContent = "Error";
          firstNumber = "";
          secondNumber = "";
          sign = "";
          return;
        }
        firstNumber = firstNumber / secondNumber;
        break;
    }

    finish = true;
    out.textContent = firstNumber;
  }

  if (key === "%" || key === "+/-") {
    switch (key) {
      case "%":
        firstNumber = firstNumber / 100;
        break;
      case "+/-":
        firstNumber = -firstNumber;
        break;
    }

    finish = true;
    out.textContent = firstNumber;
  }
};
