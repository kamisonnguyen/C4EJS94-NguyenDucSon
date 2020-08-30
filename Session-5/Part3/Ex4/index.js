const inventory = [

    {
    
        name: 'HP Envy 13aq',
    
        price: 21000,
    
        brand: 'HP',
    
        quantity: 5,
    
    },
    
    {
    
        name: 'Dell XPS 9370',
    
        price: 30000,
    
        brand: 'Dell',
    
        quantity: 1,
    
    },
    
    {
    
        name: 'Dell Inspiron 3567',
    
        price: 9300,
    
        brand: 'Dell',
    
        quantity: 12,
    
    },
    
    {
    
        name: 'Dell Latitude E5450',
    
        price: 8600,
    
        brand: 'Dell',
    
        quantity: 2,
    
    },
    
    {
    
        name: 'Asus Zenbook',
    
        brand: 'Asus',
    
        price: 20000,
    
        quantity: 4,
    
    },
    
    {
    
        name: 'HP Pavilion',
    
        brand: 'HP',
    
        price: 14000,
    
        quantity: 7,
    
    },
];
let inventoryByBrand = {};
for(let a of inventory){
    let brand = a.brand;
    if(inventoryByBrand[brand]){
        inventoryByBrand[brand].push(a);
    }else{
        inventoryByBrand[brand] = [];
        inventoryByBrand[brand].push(a);
    }
}
//Tim hieu them cua ban than hoang anh 
let brand = prompt("Which brand?");
if(inventoryByBrand[brand]){
    let str = `There are ${inventoryByBrand[brand].length} ${inventoryByBrand[brand].length == 1 ? 'generation': 'generations'}\
 of ${brand.toLocaleUpperCase()} in inventory `;
    for(let d of inventoryByBrand[brand]){
        str += '\n' + d.name ;
    }
    alert(str);
}else{ 
    alert(`Don't have ${brand.toLocaleUpperCase()} in inventory`);
}