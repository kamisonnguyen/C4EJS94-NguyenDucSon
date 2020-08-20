let x = prompt('Enter a sequence of numbers,seperated by","');
let str = x.split(',');
let Min = parseInt(str[0]);
for(let i = 1; i < str.length; i++){
    if(Min > parseInt(str[i])){
        Min = parseInt(str[i]);
    }
}
alert(Min);