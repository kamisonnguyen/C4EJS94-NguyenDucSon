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
console.log(quizs);
let long = quizs.length;
let count = 0;
let out = false;
while(true){
    if(quizs.length == 0){
        break;
    }
    let index = Math.floor(Math.random()*quizs.length);
    let quiz = prompt(`${quizs[index].question}\n${quizs[index].choices[0]}\n${quizs[index].choices[1]}\n${quizs[index].choices[2]}\n${quizs[index].choices[3]}`);
    if(quiz === null){
        alert('You out!!!');
        out = true;
        break;
    }
    if(Number(quiz) == quizs[index].result){
        count++;
    }
    quizs.splice(index,1);
}
if(!out){
    alert('We are out of question :(');
}
alert(`You answer correctly ${count} out of ${long} questions`);



