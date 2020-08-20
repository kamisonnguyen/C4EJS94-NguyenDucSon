let TenPhim = ['Hyouka', 'Sword Art Online', 'Nisekoi'];
alert(TenPhim);
// TenPhim.splice(0,1);
// console.log(TenPhim);
let i = prompt("Enter the index u want delete")
// TenPhim.splice(i,1);
// console.log(TenPhim)

let n = prompt("Enter number of movies you want to delete from position i")
TenPhim.splice(i, n);
console.log(TenPhim);