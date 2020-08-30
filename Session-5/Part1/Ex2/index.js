var arr = [2, 5, 6, 9 ,10];

function random_item(items){
    return items[Math.floor(Math.random()*items.length)];
}

console.log(random_item(arr));