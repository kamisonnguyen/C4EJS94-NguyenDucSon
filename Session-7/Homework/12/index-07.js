var items = ['Backpack', 'MiBand watch', 'Ring'];
console.log(items);

var list = document.getElementById("item_list_ul");
console.log(list);

var newItem = document.getElementById("item_input");
console.log(newItem);

var addBtn = document.getElementById("add_btn");
console.log(addBtn);

addBtn.addEventListener("click", (e) => {
    alert('Registed');
});