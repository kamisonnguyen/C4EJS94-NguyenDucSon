/**Write a script to randomly select a quiz from the list above, show 
 * them to users */

var Quizzes = [{
        Question: 'What is your favorist anime',
        Choices: ['Hyouka', 'Nisekoi', 'DxD', 'S.A.O'],
        rightChoice: '1',
    },
    {
        Question: 'What is your favorist game',
        Choices: ['L.O.L', 'Varlorant', 'DAL', 'FGO'],
        rightChoice: '4',
    },
    {
        Question: 'What is your favorist gear',
        Choices: ['Mouse', 'KeyBroad', 'Laptop', 'HearGamming'],
        rightChoice: '2',
    },
];
let randomQuizzes = Quizzes[Math.round(Math.random() * Quizzes.length)];
prompt(randomQuizzes.Question + "\n" +randomQuizzes.Choices[0] + "\n" + randomQuizzes.Choices[1] + "\n" + randomQuizzes.Choices[2]);



