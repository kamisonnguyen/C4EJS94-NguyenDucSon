function getInputN(n) {
    var n;
    if (n < 4 || n > 20) {
        console.log("You must input n in range 4 - 20");
    } 
    return n;
}

function getInputNumberFormUser(inputNumber) {
    if (inputNumber < 0) {
        console.log("must be positive numbers");
    } 
    return inputNumber;
}

function findOppositeNumber(n, inputNumber) {
    let count = 0;
    let temp;
    for (let i = 0; i < n - 1; i++) {
        for (let j = inputNumber; j < i - 1; i++) {
            temp = j;
            count++;
        }
        if (count == 5) {
            break;
        }
    }
    return temp;
}
var input = prompt("Enter a number: ");
var input2 = parseInt(input);
var inputN = prompt("Enter n: ");
var inputN2 = parseInt(inputN2)
var result = findOppositeNumber(inputN2, input2);
if (input != null && inputN != null) {
    console.log(result);
}