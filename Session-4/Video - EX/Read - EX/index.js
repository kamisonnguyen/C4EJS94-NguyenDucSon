// Part 1:
// const movie = {
//     title: 'Hyouka',
//     year: 2017,
//     rate: 9.2,
// };
// way 1:
// console.log(movie);
// console.log(movie.title);
// console.log(movie.year);
// console.log(movie.rate);
// way 2:
// console.log(movie['title']);
// console.log(movie['year']);
// console.log(movie['rate']);
// console.log(movie['null']); // -> underfined

// Part 2:
// let x = ['Sport', 'LOL', 'BTS', 'edit'];
// for (let i = 0; i < x.length; i++){
//     console.log(x[i].toUpperCase());
// }

// Part 3:
const movie = {
    title: 'Hyouka',
    year: 2017,
    rate: 9.2,
};
while (true) {
    var x = prompt('What you want to watch?');
    let y = (movie.hasOwnProperty(x));
    if (y == true) {
        alert(movie[x]);
    } else {
        alert(x + ' This not exist in object');
    }
}