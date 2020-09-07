console.log('Use getElementsByTagName function to get ALL of the <div> tag.');
var array = document.getElementsByTagName("div");

console.log('Print/log out the second element');
console.log(array[2]);

console.log('Use for loop to print ALL of the DOM you get from the function.');
for(var x of array){
    console.log(x);
}