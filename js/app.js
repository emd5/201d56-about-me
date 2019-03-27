'use strict';

// Question Bank
let rndQues = [
  'Did Roger win a National Championship?',
  'Has Roger completed his Doctorate Degree?',
  'Does Roger work for Amazon?',
  'Is Roger a business owner?',
  'Can Roger speak any other spoken languages?',
  'Does Roger know Latin?',
  'Has Roger ever binged 10+ hours on Netflix?',
  'Is Roger a Star Wars Nerd?',
  'Has Roger ever participated in a co-splay event?',
  'Does Roger like yoga?',
  'Has Roger ever participated in a throw down with Bobby Flay?',
  'Has Roger ever been on TV?',
  'Is Roger a good cook?',
  'Has Roger ever lived in a foreign country?',
  'Is Roger a natural born citizen of the USA?',
  'Has Roger ever held a dual citizenship with another country?',
];

// Answer Bank
const rndAns = ['yes', 'no', 'yes', 'yes', 'no', 'no', 'yes', 'yes', 'yes', 'no', 'no', 'no', 'yes', 'no', 'yes', 'no'];
let questUsed = ['no','no','no','no','no','no','no','no','no','no','no','no','no','no','no','no'];
let userAnswer = [];
let randomQuestion = '';
let totalRight = 0;
let numberOfQuestions = 2;

let userName = prompt('Please enter your name');
for (let i = 0; i < numberOfQuestions; i++){
  console.log('Loop number is: ' + i);
  randomQuestion = Math.floor(Math.random() * (rndQues.length));
  console.log('Random Number: ' + randomQuestion);
  while  (questUsed[randomQuestion] === 'yes') {
    randomQuestion = Math.floor(Math.random() * (rndQues.length));
  }
  questUsed[randomQuestion] = 'yes';
  userAnswer[i] = prompt(userName + ': ' + rndQues[randomQuestion]).toLocaleLowerCase();
  console.log('Users Answer is: ' + userAnswer[i]);
  if (userAnswer[i].charAt(0) === rndAns[randomQuestion].charAt(0)){
    totalRight += 1;
    alert('You got that one right ' + userName + '!  Nice work.');
  } else {
    alert('Sorry ' + userName + '.  Feels Bad Man!');
  }
}
alert('You got ' + totalRight + ' answers correct out of ' + numberOfQuestions + '.')
