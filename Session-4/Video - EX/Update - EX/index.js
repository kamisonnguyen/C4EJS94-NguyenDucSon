const movie = {
    title: 'Hyouka',
    year: 2017,
    rate: 9.2,
};
movie['rate'] = 8.7;
console.log(movie.rate);
movie['rate'] ++;
console.log(movie.rate);