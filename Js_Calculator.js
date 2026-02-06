function add(num1, num2) {
    let sumResult = num1 + num2;
    return sumResult;
};

function subract(num1, num2) {
    let subResult = num1 - num2;
    return subResult;
};

function multiply(num1, num2) {
    let multResult = num1 * num2;
    return multResult;
};

function divide(num1, num2) {
    let divResult = num1 / num2;
    return divResult;
};

const historyLog = [];

function addToHistory(oppFunc, num1, num2) {
    const operationResult = oppFunc(num1, num2)
    historyLog.push(operationResult)
};

function displayLog() {
    if (historyLog.length === 0) {
        console.log("You have no stored calculations")
    } else {
        console.log(historyLog)
    }
};