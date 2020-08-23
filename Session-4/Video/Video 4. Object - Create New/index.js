let person = {
    name: 'Nam',
    age: 18,
};
console.log(person);
person.location = 'Hanoi';
console.log(person);

// way 2:

person['status'] = 'Single';
console.log(person);
