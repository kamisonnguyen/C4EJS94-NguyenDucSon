let menu = {
    debug: 'The process of figuring out why your program has a certain error and how to fix it',
    done: 'When your task is complete, the only thing you have to do is to wait for users to use it\
     (no additional codes or actions needed)',
    defect: 'The formal word for ‘error’',
    pm: 'The short version of Project Manager, the person in charge of the final result of a project',
    uiux: 'UI means User Interface, UX mean User Experience, are the process\
        to define how your products looks and feels',
}
// 4.1
alert("Hi there, this is dev dictionary");
let x = prompt("Enter a keyword");
if(x in menu){
    alert(x+ '\n' + menu[x]);
}else{
    alert('We could not find your word: '+ x);
}

// 4.2
while (true) {
    let x = prompt("Enter a key word");
    if (x in menu) {
        alert(`${x}\n ${menu[x]}`);
    } else {
        let newValue = prompt(`we cound not find the word : ${x} : leave your explaination`);
        dictionary[x] = newValue;
        if (newValue == null || newValue == undefined) {          
        } else {
            alert("Done");
        }
    }
}