// let person = {
//     name: 'Nam',
//     age: 18,
// };
// console.log(person);
// person.location = 'Hanoi';
// console.log(person);

// // way 2:

// person['status'] = 'Single';
// console.log(person);

let movie = {
    title: 'Hyouka',
    year: 2017,
    rate: 9.2,
};

var x = prompt("what you want to update?");
var y = movie.hasOwnProperty(x);
if(y == true){
    alert(movie[x]);
}else{
    alert(x + ' does not exist in our data, we will add new');
    let z = prompt('Enter the new data');
    movie[x] = z;
    console.log(movie);
}