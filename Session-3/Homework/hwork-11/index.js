let numbers = prompt("Enter a sequence number");
let x = numbers.split(",");
let x1 = x.filter(x => x %2 == 1);
let str = "";
for (let index = 0; index < x.length; index++) {
    if (index == (x.length - 1)) {
        str += x[index];
    } else {
        str += x[index] + ", ";
    }
}
str += " => ";
for (let index = 0; index < x1.length; index++) {
    if (index == (x1.length - 1)) {
        str += x1[index];
    } else {
        str += x1[index] + ", ";
    }

}
alert(str);