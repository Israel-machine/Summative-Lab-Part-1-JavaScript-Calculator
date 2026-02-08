function add(num1, num2) {
    const sumResult = num1 + num2;
    return sumResult;
};

function subract(num1, num2) {
    const subResult = num1 - num2;
    return subResult;
};

function multiply(num1, num2) {
    const multResult = num1 * num2;
    return multResult;
};

function divide(num1, num2) {
    const divResult = num1 / num2;
    return divResult;
};

const historyLog = [];

function addToHistory(oppFunc, num1, num2) {
    const operationResult = oppFunc(num1, num2)
    historyLog.push({operands: [num1, num2], operator: oppFunc.name, result: operationResult})
};

function displayLog() {
    if (historyLog.length === 0) {
        console.log("You have no stored calculations")
    } else {
        console.log(historyLog)
    }
};

addToHistory(add, 2,3);
addToHistory(subract, 2,3);
addToHistory(multiply, 2,3);
addToHistory(divide, 2,3);
displayLog();