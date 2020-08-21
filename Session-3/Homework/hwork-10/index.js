let names = prompt("Enter a sequence of names");
let z = names.split(",");
let c = z.map(x => "<" + x + ">");
let str = "";
for (let index = 0; index < z.length; index++) {
    if (index == (z.length - 1)) {
        str += z[index];
    } else {
        str += z[index] + ", ";
}
}
str += " => ";
for (let index = 0; index < c.length; index++) {
    if (index == (c.length - 1)) {
        str += c[index];
    } else {
        str += c[index] + ", ";
    }

}
alert(str);