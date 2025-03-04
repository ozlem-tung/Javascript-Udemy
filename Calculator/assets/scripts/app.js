const defaultResult = 0;
let currentResult = defaultResult;

function getUserNumberInput() {
  return parseInt(usrInput.value);
}
function createAndWriteOutput(operator, resultBeforeCalc, calcNumber){
  const calcDescription= `${resultBeforeCalc} ${operator}${calcNumber}`;
outputResult(currentResult,calcDescription); //from vendor.js
}

function add() {
  const enteredNumber = getUserNumberInput();
  const initialResult =currentResult; 
  currentResult += enteredNumber;
  createAndWriteOutput('+',initialResult,enteredNumber);
}
function substract() {
  const enteredNumber = getUserNumberInput();
  const initialResult =currentResult; 
  currentResult -= enteredNumber;
  createAndWriteOutput('-',initialResult,enteredNumber);
}
 function multiply(){
  const enteredNumber = getUserNumberInput();
  const initialResult =currentResult; 
  currentResult *= enteredNumber;
  createAndWriteOutput('*',initialResult,enteredNumber);
 }
function divide(){
  const enteredNumber = getUserNumberInput();
  const initialResult =currentResult; 
  currentResult /= enteredNumber;
  createAndWriteOutput('/',initialResult,enteredNumber);
}

subtractBtn.addEventListener('click', substract);
addBtn.addEventListener('click', add);
multiplyBtn.addEventListener('click', multiply);
divideBtn.addEventListener('click', divide);
