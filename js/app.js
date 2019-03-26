'use strict';

let rndQues = [
  'Did Roger win a National Championship?',
  'Has Roger completed his Doctorate Degree?',
  'Does Roger work for Amazon?',
  'Is Roger a business owner?',
  'Can Roger speak any other spoken languages?',
  'Does Roger know Latin?',
  'Has Roger ever binged 10+ hours on Netflix?',
  'Is Roger a Star Wars Nerd?',
  'Has Roger ever participated in a cosplay event?',
  'Does Roger like yoga?',
  'Has Roger ever participated in a throwdown with Bobby Flay?',
  'Has Roger evern been on TV?',
  'Is Roger a good cook?',
  'Has Roger ever lived in a foreign country?',
  'Is Roger a natural born citizen of the USA?',
  'Has Roger ever held a dual citizenship with another country?',
  'Intentionally left Blank'
];
let rndAns = ['yes', 'no', 'yes', 'yes', 'no', 'no', 'yes', 'yes', 'yes', 'yes', 'no', 'no', 'yes', 'no', 'no', 'no','no'];
let questUsed = ['no','no','no','no','no','no','no','no','no','no','no','no','no','no','no','no','no'];
let userAnswer = [];
let randomQuestion = '';
let i = 0

for (i = 0; i < 5; i++){
        console.log('Loop number is: ' + i)
        randomQuestion = Math.floor(Math.random() * (rndQues.length));
        console.log('Random Number: ' + randomQuestion)
        if (questUsed[randomQuestion] === 'no'){
            userAnswer[i] = prompt(rndQues[randomQuestion]);
        }
}
