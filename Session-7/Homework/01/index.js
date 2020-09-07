const container = document.getElementById('list');
for (let i = 0; i < 3; i++) {
    container.insertAdjacentHTML("beforebegin", `<li>${i}</li>`)
}

for (let i = 0; i < 3; i++) {
    container.insertAdjacentHTML("afterbegin", `<li>${i}</li>`)
}

for (let i = 0; i < 3; i++) {
    container.insertAdjacentHTML("beforeend", `<li>${i}</li>`)
}

for (let i = 0; i < 3; i++) {
    container.insertAdjacentHTML("afterend", `<li>${i}</li>`)
}

console.log('1-d: \n' +
    'Beforebegin: \n' +
    '<li>0</li> \n' +
    '<li>1</li> \n' +
    '<li>2</li> \n' +
    '<ul id="list"></ul>');

console.log('2-a: \n' +
    'Afterbegin: \n' +
    '<ul id="list"> \n' +
    '<li>2</li> \n' +
    '<li>1</li> \n' +
    '<li>0</li> \n' +
    '</ul>');

console.log('3-c: \n' +
    'Beforeend:\n' +
    '<ul id="list"> \n' +
    '<li>0</li> \n' +
    '<li>1</li> \n' +
    '<li>2</li> \n' +
    '</ul>');

console.log('4-b: \n' +
    'Afterend: \n' +
    '<ul id="list"></ul> \n' +
    '<li>2</li> \n' +
    '<li>1</li> \n' +
    '<li>0</li>');