let str = prompt('Enter a sequence of numbers,separated by commas(,)');
const splits = str.split(',');
let i;
let temp1 = 0;
let temp = parseInt(temp1);
for (i = 0; i < splits.length; i++) {
    temp += parseInt(splits[i]);
}
alert('The sum of them is ' + temp);