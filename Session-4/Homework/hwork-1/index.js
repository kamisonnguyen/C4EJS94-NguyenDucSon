const product = {
    name: 'Xiaomi rice cooker',
    price: 1700,
    brand: 'Xiaomi',
    color: 'White',
};

for (let x in product) {
    console.log(x);
}

//Answer:
console.log('1.1');
console.log('X receives from product property');
console.log('1.2');
for (let x in product) {
    console.log(`${x}: ${product[x]}`);
}