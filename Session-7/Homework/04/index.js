console.log('Use getElementsByTagName function to get ALL of the <li> tag.');
var array = document.getElementsByTagName('li');

console.log('Print/log out the first element');
console.log(array[1]);

console.log('Use for loop to print ALL of the DOM you get from the function.');
for(let x of array){
    console.log(x);
}