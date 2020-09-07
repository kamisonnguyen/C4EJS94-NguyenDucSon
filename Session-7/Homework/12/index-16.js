var items = ['Backpack', 'MiBand watch', 'Ring'];
var list = document.getElementById("item_list_ul");
var newItem = document.getElementById("item_input");
var addBtn = document.getElementById("add_btn");

function reloadList() {
    list.innerHTML = '';
    for (let i = 0; i < items.length; i++) {
        list.insertAdjacentHTML("beforeend", '<li><span>' + items[i] + '</span><button class="remove_btn">Remove</button></li>');
    };

    //Add actionListener for Remove button
    let rmvBtn = document.getElementsByClassName('remove_btn');
    for (let i = 0; i < rmvBtn.length; i++) {
        rmvBtn[i].addEventListener("click", (e) => {
            items.splice(i, 1);
            console.log(items);
            reloadList();
        });
    };
}

reloadList();

//Add actionListener for Add button
addBtn.addEventListener("click", (e) => {
    var valueInput = document.getElementById("item_input").value;
    items.push(valueInput);
    reloadList();
    document.getElementById("item_input").value = "";
    console.log(items);
});
