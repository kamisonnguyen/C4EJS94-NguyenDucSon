let x = [11,2,33,4,55,6,885];
let y = prompt('Enter a number: ');
let y1 = parseInt(y);
let temp = false;
for(let i = 0; i < x.length; i++){
    if(y1 == x[i]){
        alert( y1 + ' is FOUND in my array at index ' + i);
        temp = true;
    }
}
if(!temp){
    alert(y + ' is NOT found in my array');
}
        