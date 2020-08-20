// 1.
let TenPhim = ['Hyouka', 'Sword Art Online', 'Nisekoi', 'DAL', 'HighSchoolDxD'];
alert(TenPhim);
console.log(TenPhim);
// 2.
let TenPhim = ['Hyouka', 'Sword Art Online', 'Nisekoi', 'DAL', 'HighSchoolDxD'];
let n = TenPhim.length/2
for(let i = 0; i < n; i++){
    console.log(TenPhim[i]);
} 
//3.
let TenPhim = ['Hyouka', 'Sword Art Online', 'Nisekoi', 'DAL', 'HighSchoolDxD'];
let c = 1;
for(let i = 1; i < TenPhim.length; i++){
    console.log(c++ + ". " + TenPhim[i]);
}