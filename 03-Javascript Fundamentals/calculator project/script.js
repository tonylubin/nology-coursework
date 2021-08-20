const plusButton = document.getElementById("plus");  //  +
const equalsButton = document.getElementById("equals");  //  =
const minusButton = document.getElementById("minus");  //  -
const multiplyButton = document.getElementById("times"); //  *
const divisionButton = document.getElementById("divide");  //  divide
const decimalButton = document.getElementById("percent"); //  %
const parenthesesButton = document.getElementById("brackets"); //  ()
const resetButton = document.getElementById("cancel"); //   cancel (C)
const backspaceButton = document.getElementById("back");  //  backspace
const calcScreen = document.getElementById("output"); //  output screen
const buttons = document.querySelectorAll(".digit");  // values & numbers printed onto screen

//  grab number pressed and print to screen

const buttonPress = buttons.forEach((digit) => {
  digit.addEventListener("click", (event) => {
      const grabValue = event.target.innerText;
      const value = document.createTextNode(grabValue);
      calcScreen.appendChild(value); 
  })
  // console.log(number);  // grabs and logs each element in nodelist (array)
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

if (calcScreen.innerText.includes("+")) {
const outputToArray = calcScreen.innerText.split("+");
const convertToNumber = outputToArray.map(number => Number(number));
const addCalculation = convertToNumber.reduce((total, currentValue) => {
  return total + currentValue;
});
calcScreen.innerText = addCalculation;
}
});

// subtraction calculation

const minusCalculation = equalsButton.addEventListener("click", () => {

  if (calcScreen.innerText.includes("-")) {
  const outputToArray = calcScreen.innerText.split("-");
  const convertToNumber = outputToArray.map(number => Number(number));
  const subCalculation = convertToNumber.reduce((total, currentValue) => {
    return total - currentValue;
  });
  calcScreen.innerText = subCalculation;
  }
  });

  //  multiplication calculation

  const multiplyCalculation = equalsButton.addEventListener("click", () => {

    if (calcScreen.innerText.includes("x")) {
    const outputToArray = calcScreen.innerText.split("x");
    const convertToNumber = outputToArray.map(number => Number(number));
    const timesCalculation = convertToNumber.reduce((total, currentValue) => {
      return total * currentValue;
    },);
    calcScreen.innerText = timesCalculation;
    }
    });

    //  division calculation

    const divisionCalculation = equalsButton.addEventListener("click", () => {

      if (calcScreen.innerText.includes("/")) {
      const outputToArray = calcScreen.innerText.split("/");
      const convertToNumber = outputToArray.map(number => Number(number));
      const divideCalculation = convertToNumber.reduce((total, currentValue) => {
        return total / currentValue;
      });
      calcScreen.innerText = divideCalculation;
      }
      });