console.log('We have 4 ways to swap variables in JavaScript\n\
1. Destructuring assignment\
2. Temporary variable\n\
3. Addition and difference\n\
4. Bitwise XOR operator\n\
Example:');
console.log('Ex1: ');
let a = 10,
    b = 20;
[a, b] = [b, a];
console.log(a);
console.log(b);
console.log('Ex2: ');
let c = 6;
let d = 9;
let temp;
temp = c;
c = d;
d = temp;
console.log(c);
console.log(d);