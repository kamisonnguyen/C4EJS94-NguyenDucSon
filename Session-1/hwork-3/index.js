console.log("a.7 numbers, starting from 0 (no user input)")
for(let i = 0; i <7; i++){
    console.log(i);
}

console.log("b. n numbers, starting from 0, n entered by user")
let x = prompt("Enter a number: ")
alert(x)
for(let i = 0; i < x; i++){
     console.log(i)
}

console.log("c.A sequence of numbers, starting from 3, ending before n, n entered by user")
let x = prompt("Enter a number: ")
alert(x);
for(let i = 3; i < x; i++)

console.log("d. A sequence of numbers, starting from c, ending \
before n, c and n entered by user")
let n = prompt("Enter n")
let c = prompt("Enter c")
alert(n)
alert(c)
for(c; c < n; c++){
    console.log(c);
}

console.log("e. A sequence of numbers, starting from c, ending before n, stepping by 3, c and entered by user");
var n = prompt("Enter n"); // 7
var c = prompt("Enter c"); // 2
alert(n);
alert(c);
var temp;
temp = parseInt(c);
for (c; c < n; c++) {
    if (temp < n) {
        console.log(temp);
    } else {
        break;
    }
    temp += 3;
}

console.log("A sequence of numbers, starting from c, ending \
before n, stepping by s. c, and s entered by user")
var n = prompt("Enter n"); // 7
var c = prompt("Enter c"); // 2
var s = prompt("Enter s");
var n1 = parseInt(n)
var c1 = parseInt(c)
var s1 = parseInt(s)
for (c1; c1 < n1; c1+=s1){
    console.log(c1);
}