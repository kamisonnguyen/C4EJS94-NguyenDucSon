// demo1
// let n = Number(prompt('Enter a number'));
// console.log(n);
// if(n){
//     console.log('Is Number');
// }else{
//     console.log('Not a number');
// }
// let n;
// while(true){
//     n = Number(prompt('Enter a number'));
//     if(n){
//         // n is valid
//         break;
//     }
// }
// console.log(n);
let n;
let y;
while(true){
    n = prompt("Register an username");
    y = n.length;
    y1 = parseInt(y);
    if (y1 <= 15) {
        alert('Good username');
    } else {
        alert('Your user name is too long');
    }
}