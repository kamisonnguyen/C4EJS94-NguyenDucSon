//Create data 
var quizs = [
    {
        question: 'how many months in a year?',
        choices: ['1. 12 month', '2. 6 month', '3. 9 month', '4. 3 month'],
        result: '1',
    },

    {
        question: 'how many legs does a spider have?',
        choices: ['1. 4 legs', '2. 6 legs', '3. 8 legs', '4. 12 legs'],
        result: '3',
    },

    {
        question: 'What started world war II?',
        choices: ['1. 1910', '2. 1924', '3. 1945', '4. 1939'],
        result: '4',
    },

];
//Random quizs in list array
console.log(quizs);
// for(let i = 0; i < quizs.length; i++){
//     quizs[Math.floor(Math.random() * 10)];
// }
var randomItem = quizs[Math.floor(Math.random() * quizs.length)];
console.log(randomItem);
let answer = prompt(`${randomItem.question}\n${randomItem.choices[0]}\n${randomItem.choices[1]}\n${randomItem.choices[2]}\n${randomItem.choices[3]}`);
let x = randomItem.result;

if (x == answer) {
    alert('Bravo!!!');
} else {
    alert('Good luck next time');
}


