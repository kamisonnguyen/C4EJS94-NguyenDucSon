console.log('Ex 1');
//1
console.log('Cases that give you SyntaxError invalid variable names are: \n'
    + '1. Variable names is a keyword\n'
    + '2. Variable names start with a number\n'
    + '3. Variable names contain special characters');
console.log('For example: \n'
    + '1: let let = "abc"\n'
    + '2: let 1st = "first"\n'
    + '3: let #F = 1');
//2
console.log('In JavaScript, we use "typeof" check a variable data types \n' +
    'The typeof operator returns the type of the argument.\n' +
    'It’s useful when we want to process values of different types differently.');

console.log('Ex 2');
console.log('1-b, 2-a, 3-e, 4-c');

console.log('Ex 3_a');
let x = 'Coding is great';
console.log(x);

console.log('Ex 3_b');
let StudentCount = 0;
console.log(StudentCount);

console.log('Ex 4_a');
x = 'Coding might not be easy, but still great';
console.log(x);

console.log('Ex 4_b');
StudentCount = 16;
console.log(StudentCount);

console.log('Ex 4_c');
newx = x.toLowerCase();
console.log(newx);

console.log('Ex 4_d');
console.log(StudentCount += 1);

console.log('Ex 5');
alert('You lock beautiful to day');

console.log('Ex 6');
x = prompt('Hi there, your name please!!');

console.log('Ex 7');
console.log(`Hi ${x}`);
alert(`Hi~ ` + x);
lastname = prompt('Enter your last name: ');
alert(`Hi~ ` + x + " " + lastname);

console.log('Ex 8');
square = prompt('Enter side length of the square');
alert(`The square area is ` + Math.pow(square,2));

console.log('Ex 9');
circle = prompt('Enter the radlus of the circle');
alert(`The circle area is ` + Math.floor((Math.pow(circle,2) * Math.PI)));

console.log('Ex 10');
clecius = prompt('Enter the temperature in Clecius');
alert(clecius + ' (C) = ' + parseFloat(1.8 * clecius + 32).toFixed(1) + ' (F)');







