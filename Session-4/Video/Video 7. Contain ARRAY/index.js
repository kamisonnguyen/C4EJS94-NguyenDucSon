let person = {
    name : 'Nam',
    age: 18,
    favs: ['netflix','cafe','Code'],
}
let favs = person.favs;
console.log(favs);
for(let i = 0; i < favs.length; i ++){
    console.log(favs[i]);
}
console.log(favs);
favs.push('Macbook');
console.log(favs);
console.log(person);
