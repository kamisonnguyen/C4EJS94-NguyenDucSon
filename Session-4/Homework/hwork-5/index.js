let products = [{
        name: 'Xiaomi portable charger 20000mah',
        brand: 'Xiaomi',
        price: 428,
        color: 'while',
        category: 'charger',
    },
    {
        name: 'VSmart active 1',
        brand: 'Vsmart',
        price: 5438,
        color: 'black',
        category: 'phone',
    },
    {
        name: 'Iphone X',
        brand: 'Apple',
        price: 21490,
        color: 'gray',
        category: 'phone',
    },
    {
        name: 'SamSung Galaxy A9',
        brand: 'SamSung',
        price: 8490,
        category: 'phone',
    },
];
//Bai 1.
for(let i = 0; i < products.length; i++){
    console.log("----------------")
    console.log(products[i].name);
    console.log("%c" + products[i].price,'Black');
}
//Bai 2.
let index = Number(prompt("Enter product position"));
console.log("printing/logging out the products with their number, then \
print/logging out the details of a product with its position entered by users");
for(let x in products[index]){
    console.log(x + ": "+ products[index][x]);
}
//Bai 3.
console.log("printing/logging out the products based on category");
let cate = prompt("Enter your category?");
for (let i = 0; i < products.length; i++) {
    if (products[i].category == cate) {
        console.log("----------------");
        console.log(`Name : ${products[i].name}`);
        console.log(`Price : ${products[i].price}`);
    }
}
//Bai 4.
products[0].providers = ['Phu kien zero','Dientuccc'];
products[1].providers = ['Tgdd','ddghn','vhstore'];
products[2].providers = ['tgdd'];
products[3].providers = ['tgdd'];
for (let index = 0; index < products.length; index++) {
    console.log(`#${index+1}. ${products[index].name}`);
    console.log(`Price: ${products[index].price}`);
    console.log(`Providers: ${products[index].providers}`)
}
//Bai 5.
products[0].providers = ['Phu kien zero','Dientuccc'];
products[1].providers = ['tgdd','ddghn','vhstore'];
products[2].providers = ['tgdd'];
products[3].providers = ['tgdd'];
let provid = prompt("Enter provider?");
for (let index = 0; index < products.length; index++) {
    for (let i = 0; i < products[index].providers.length; i++) {
        if(products[index].providers[i] == provid){
            console.log("-----------------------");
            console.log(`Name : ${products[index].name}`);
            console.log(`brand : ${products[index].brand}`);
            console.log(`Price : ${products[index].price}`);
            console.log(`Color : ${products[index].color}`);
            console.log(`Category : ${products[index].category}`);
            console.log(`providers : ${products[index].providers}`);
            break;
        }
        
    }
}