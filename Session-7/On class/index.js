// function hi(name, comment) {
//     alert('Hi ' + name);
//     alert(`${name}, ${comment}`);
// }

// let name = prompt('Tell me your name');
// let comment = prompt('Tell me the comment');
// hi(name, comment);


//*Callback
function sayHi(name){
    alert('Hi, ' + name);
}

function sayGoodbye(name){
    alert('Goodbye, ' + name);
}

function testSay(f){
    let name = prompt('Tell me your name');
    alert('Here I say');
    f(name);
}

testSay(sayHi);
testSay(sayGoodbye);

//Arrow Function 
//setTimeOut
function run(){
    console.log('Hihi');
}

setTimeout(run, 1000);