/**
Learn how to randomly pick an item from an array

For example:

Array: [2, 5, 6, 9, 10]

First run: 5

Second run: 7
*/

function random_item(items) {
    return items[Math.floor(Math.random() * items.length)];
}
var items = [2, 5, 6, 9, 10];
while (true) {
    alert(random_item(items));
}