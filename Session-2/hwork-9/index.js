// console.log("Write a program asking user to enter two numbers, x and n, then check if x is in lower \
// half or higher half of n")

// var x1 = 6
// var x = parseFloat(x1);
// if (x % 2 == 0) {
//     x /= 2
//     console.log("H " + x)
//     console.log("L " + x)
// } else {
//     x /= 2
//     console.log("L " + Math.ceil(x));
//     console.log("H " + Math.floor(x));
// }

// //2.2
// var x1 = prompt("Enter the total number of 'L' and 'H's?");
// var x = parseFloat(x1);
// if (x % 2 == 0) {
//     x /= 2
//     console.log("H " + x)
//     console.log("L " + x)
// } else {
//     x /= 2
//     console.log("L " + Math.ceil(x));
//     console.log("H " + Math.floor(x));
// }

console.log("8 1’s and 0’s in total, consecutively")
var x = 8;
for (var i = 0; i < x; i++) {
    if (i % 2 == 0) {
        console.log("0");
    }else{
        console.log("1");
    }

}

console.log("n 1’s and 0’s in total, consecutively, n entered by user")
var x = prompt("Enter the total number of 1's and 0's???")
for (var i = 0; i < x; i++) {
    if (i % 2 == 0) {
        console.log("0");
    }else{
        console.log("1");
    }
}



