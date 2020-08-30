//Tham khao bai cua ban Than Hoang ANh
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
while(true){
    if(quizs.length == 0){
        break;
    }
    let index = Math.floor(Math.random()*quizs.length);
    let str = '';
    while(true){
        if(quizs[index].choices.length == 0){
            break;
        }
        let i = Math.floor(Math.random()*quizs[index].choices.length);
        str += quizs[index].choices[i] + '\n';
        quizs[index].choices.splice(i,1);
    }
    let quiz = prompt(`${quizs[index].question}\n ${str}`);
    if(quizs === null){
        alert('You out!!');
        break;
    }
    if(Number(quiz) == quizs[index].result){
        count++;
    }
    quizs.splice(index,1);
}
alert(`You answer correctly ${count} out of ${long} questions`);




