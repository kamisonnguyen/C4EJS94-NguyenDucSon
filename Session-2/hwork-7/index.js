console.log("Write a program asking user to enter two numbers, x and n, then check if x is in lower \
half or higher half of n")
var n1 = prompt("n = ");
var n = parseInt(n1);
var x1 = prompt("x =");
var x = parseInt(x1);
z = n/2
if (x < z){
    alert( x + " lower half of " + n);
}else{
    alert( x + " High half of " + n);
}