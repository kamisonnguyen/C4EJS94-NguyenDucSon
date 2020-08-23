let person1 = {
    name: 'Nam',
    age: 19,
};

let person2 = {
    name: 'Duc',
    age: 25,
};

let personArr = [];
console.log(personArr);
personArr.push(person1);
personArr.push(person2);
console.log(personArr);

// console.log(personArr[0]);
// let p = personArr[0];
// console.log(p);
// console.log(p.name);

// console.log(personArr[0].name);
// let n = personArr[0].name;
// console.log(n);

for(let i = 0; i<personArr.length; i++){
    // console.log(personArr[i]);
    let p = personArr[i];
    console.log(p);
    console.log(p.age);
}