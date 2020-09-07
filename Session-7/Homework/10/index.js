console.log('Write a function, using alert to show user’s name and one wish of the user this year, name and wish are function parameters');
function message(name, wish){
    alert(`My name is ${name} and my wish is ${wish}`);
}

var name = prompt('Tell me your name');
var wish = prompt('Tell me your wish');
message(name, wish);