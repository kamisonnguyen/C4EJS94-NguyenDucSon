let person = {
    name: 'Nam',
    age: 19,

};

console.log(person);
console.log(person.age);
// "." ở đây là "của".
let prop = 'age';
console.log(person.prop); /** thay vì dùng dấu chấm chúng ta 
sẽ dùng cặp ngoặc vuông vào bên trong là 
string hay chính là giá trị của thuộc
tính chúng ta cần truy cập */

console.log(person['name']);