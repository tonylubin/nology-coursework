const plusButton = document.getElementById("plus"); //  +
const equalsButton = document.getElementById("equals"); //  =
const minusButton = document.getElementById("minus"); //  -
const multiplyButton = document.getElementById("times"); //  *
const divisionButton = document.getElementById("divide"); //  divide
const decimalButton = document.getElementById("percent"); //  %
const parenthesesButton = document.getElementById("brackets"); //  ()
const resetButton = document.getElementById("cancel"); //   cancel (C)
const backspaceButton = document.getElementById("back"); //  backspace
const calcScreen = document.getElementById("output"); //  output screen
const buttons = document.querySelectorAll(".digit"); // values & numbers printed onto screen

//  grab number pressed, add event listener and print to screen

const buttonPress = buttons.forEach((digit) => {
  digit.addEventListener("click", () => {
    const grabValue = digit.innerText;
    const value = document.createTextNode(grabValue);
    calcScreen.appendChild(value);
  });
});

//  clear screen

const clearScreen = resetButton.addEventListener("click", () => {
  calcScreen.innerText = "";
});

//  backspace

const backspace = backspaceButton.addEventListener("click", () => {
  calcScreen.lastChild.remove();
});

// addition calculation

const plusCalculation = equalsButton.addEventListener("click", () => {
  if (
    calcScreen.innerText.includes("+") &&
    !calcScreen.innerText.endsWith("%")
  ) {
    const outputToArray = calcScreen.innerText.split("+");
    const convertToNumber = outputToArray.map((number) => Number(number));
    const addCalculation = convertToNumber.reduce((total, currentValue) => {
      return total + currentValue;
    });
    calcScreen.innerText = addCalculation;
  }
});

// subtraction calculation

const minusCalculation = equalsButton.addEventListener("click", () => {
  if (
    calcScreen.innerText.includes("-") &&
    !calcScreen.innerText.endsWith("%")
  ) {
    const outputToArray = calcScreen.innerText.split("-");
    const convertToNumber = outputToArray.map((number) => Number(number));
    const subCalculation = convertToNumber.reduce((total, currentValue) => {
      return total - currentValue;
    });
    calcScreen.innerText = subCalculation;
  }
});

//  multiplication calculation

const multiplyCalculation = equalsButton.addEventListener("click", () => {
  if (
    calcScreen.innerText.includes("x") &&
    !calcScreen.innerText.endsWith("%")
  ) {
    const outputToArray = calcScreen.innerText.split("x");
    const convertToNumber = outputToArray.map((number) => Number(number));
    const timesCalculation = convertToNumber.reduce((total, currentValue) => {
      return total * currentValue;
    });
    calcScreen.innerText = timesCalculation;
  }
});

//  division calculation

const divisionCalculation = equalsButton.addEventListener("click", () => {
  if (
    calcScreen.innerText.includes("/") &&
    !calcScreen.innerText.endsWith("%")
  ) {
    const outputToArray = calcScreen.innerText.split("/");
    const convertToNumber = outputToArray.map((number) => Number(number));
    const divideCalculation = convertToNumber.reduce((total, currentValue) => {
      return total / currentValue;
    });
    calcScreen.innerText = divideCalculation;
  }
});

//  percentage calculation

const calculatePercentage = equalsButton.addEventListener("click", () => {
  const mathsOperators = ["-", "+", "/", "x"];

  mathsOperators.forEach((symbol) => {
    if (calcScreen.innerText.includes("%" && symbol)) {
      const outputScreenToArray = calcScreen.innerText
        .slice(0, -1)
        .split(symbol);
      const convertToNumber = outputScreenToArray.map((number) =>
        Number(number)
      );
      const percentCalculation = convertToNumber.reduce(
        (total, currentValue) => {
          switch (symbol) {
            case "-":
              return Math.abs((total / (100 / currentValue)) - total);
            case "+":
              return Math.abs((total / (100 / currentValue)) + total);
            case "/":
              return Math.abs((total / (100 / currentValue)) * 100);
            case "x":
              return Math.abs((total/100) * currentValue);
          }
        }
      );
      calcScreen.innerText = percentCalculation;
    }
  });
});
