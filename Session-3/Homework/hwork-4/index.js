var list = ['Jeans', 'T-Shirt', 'Socks'];
listNumber = parseInt(list.length)
while (true) {
    var ans = prompt("Hi there, welcome to shop admin panel, what do you want (C,R,U,D)?").toLowerCase();
    switch (ans) {
        case 'r':
            var dem = 1;
            console.log('The current item are: ');
            for (var i = 0; i < listNumber; i++) {
                console.log(dem++ + '. ' + list[i]);
            }
            break;
        case 'c':
            var newItem = prompt('Enter the name of new item');
            list.push(newItem);
            if (newItem == null || newItem == undefined) {
                alert('Please enter new item');
            } else {
                alert('Done');
            }
            break;
        case 'u':
            var pos = prompt('Enter the position you want to update');
            var newName = prompt('Enter the new name');
            list[(pos - 1)] = newName;
            if (pos == null || pos == undefined) {
                alert('Please enter new name');
            } else {
                alert('Done');
            }
            console.log(list)
            break;
        case 'd':
            var indexDelete = prompt('Enter the position you want to delete');
            list.splice((indexDelete - 1), 1);
            if (indexDelete == null || indexDelete == undefined) {
                alert('Please enter position you want to delete');
            } else {
                alert('Done');
            }
            default:
                alert('This command is not supported');
                break;
    }
}