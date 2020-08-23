let person = {
    name: 'Nam',
    age: 18,
};
// way 1:
// console.log(person.name);
// person.name = 'Nguyen Phuong Nam'
// console.log(person.name);
// way 2:
console.log(person['age']);
person['age'] = 19;
console.log(person['age']);
console.log(person);
person.age++;
console.log(person);
person['age']++;
console.log(person);
