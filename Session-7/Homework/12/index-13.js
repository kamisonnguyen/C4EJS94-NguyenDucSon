var items = ['Backpack', 'MiBand watch', 'Ring'];
console.log(items);

var list = document.getElementById("item_list_ul");
console.log(list);

var newItem = document.getElementById("item_input");
console.log(newItem);

var addBtn = document.getElementById("add_btn");
console.log(addBtn);

addBtn.addEventListener("click", (e) => {
    var valueInput = document.getElementById("item_input").value;
    items.push(valueInput);
    list.insertAdjacentHTML("beforeend", '<li>' + valueInput + '</li>');
    document.getElementById('item_input').value = "";
});

var rmvBtn = document.getElementsByClassName("remove_btn");

for(var x of rmvBtn){
    x.addEventListener("click", (e) => {
        console.log('Removed');
    }); 
}