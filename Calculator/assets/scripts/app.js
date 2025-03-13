const logEntries = [];
const defaultResult = 0;
let currentResult = defaultResult;
// ctrl+d kısayolu ile seçtiğimiz keyword'ün kullanıldğı yerleri tek tek seçer. ctrl+shift+l ile de kullanıldığı tüm yerleri seçer.
 
function getUserNumberInput() {
  return parseInt(usrInput.value);
}
function createAndWriteOutput(operator, resultBeforeCalc, calcNumber) {
  const calcDescription = `${resultBeforeCalc} ${operator}${calcNumber}`;
  outputResult(currentResult, calcDescription); //from vendor.js
}
function writeToLog(
  operationIdentifier,
  prevResult,
  operationNumber,
  newResult
) {
  const logEntry = {
    operation: operationIdentifier,
    prevResult: prevResult,
    number: operationNumber,
    result: newResult,
  };
  logEntries.push(logEntry);
  console.log(logEntries);
}

function calculateResult(calculationType) {
  const enteredNumber = getUserNumberInput();
  const initialResult = currentResult;
  let mathOperator;
  if(calculationType==='ADD'){
    currentResult += enteredNumber;
    mathOperator ='+';
  }else if(calculationType==='SUBTRACT'){
    currentResult -= enteredNumber;
    mathOperator ='-';
  }else if(calculationType === 'MULTIPLY'){
    currentResult *= enteredNumber;
    mathOperator = '*' ;
  }else if (calculationType === 'DIVIDE'){
    currentResult /= enteredNumber;
    mathOperator = '/';
  }
  createAndWriteOutput(mathOperator, initialResult, enteredNumber);
  writeToLog(calculationType, initialResult, enteredNumber, currentResult);
}

function add() {
  calculateResult('ADD');
}
function subtract() {
  calculateResult('SUBTRACT');
}
function multiply() {
  calculateResult('MULTIPLY');
}
function divide() {
  calculateResult('DIVIDE');
}

subtractBtn.addEventListener('click', subtract);
addBtn.addEventListener('click', add);
multiplyBtn.addEventListener('click', multiply);
divideBtn.addEventListener('click', divide);
