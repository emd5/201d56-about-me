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

// Array to track displayed questions so duplicates do not get put on the screen.
let questUsed = ['no','no','no','no','no','no','no','no','no','no','no','no','no','no','no','no'];

// Array for Question 7.  What is Rogers Highest Level of Education?
// const wifeName = ['m', 'i', 'c', 'h', 'a', 'e', 'l', 'a']
const wifeName = ['michelle', 'michaela'];

// let wifeNameHint = [];
// let userGuessWifeName = '';
let userGuessWifeNameNumber = 6;
let userAnswer = [];
let randomQuestion = '';
let totalRight = 0;
let numberOfQuestions = 5;
let gameAnswer = Math.floor(Math.random() * 101);
let numberOfGuesses = 0;
let guessChances = 4;
let userGuess = 0;
let guessString = ' ';
let guessChancesLeft = guessChances;
let guessMessage = 'Lets Play a quick Guessing Game.';
let confirmButton = false;


let userName = prompt('Please enter your name');

for (let i = 0; i < numberOfQuestions; i++){
  randomQuestion = Math.floor(Math.random() * (rndQues.length));
  console.log('Random Number: ' + randomQuestion);

  while (questUsed[randomQuestion] === 'yes') {
    randomQuestion = Math.floor(Math.random() * (rndQues.length));
  }
  questUsed[randomQuestion] = 'yes';
  userAnswer[i] = prompt(userName + ': ' + rndQues[randomQuestion]).toLocaleLowerCase();
  console.log('Users Answer is: ' + userAnswer[i]);

  if (userAnswer[i].charAt(0) === rndAns[randomQuestion].charAt(0)){
    totalRight += 1;
    console.log('Total Right Answers: ' + totalRight);
    alert('You got that one right ' + userName + '!  Nice work.');
  } else {
    alert('Sorry ' + userName + '.  Feels Bad Man!');
  }
}

while (userGuess !== gameAnswer && numberOfGuesses < guessChances) {
  userGuess = prompt(guessMessage + '\nNumbers Guessed so far: ' + guessString + ' ' + '\nPick a number ' +
    'between 1 and 100. (' + guessChancesLeft + ') more chances left!');
  numberOfGuesses += 1;
  console.log('UserGuess: ' + userGuess + '. GameAnswer: ' + gameAnswer + '. Number of Guesses: ' + numberOfGuesses);

  guessString += userGuess + ' ';

  if (parseInt(userGuess) === gameAnswer) {
    totalRight += 1;
    console.log('Total Right Answers: ' + totalRight);
    confirmButton = confirm('DING DING DING.  You got it.  Great work. On to the last question!');
    while (confirmButton === false) {
      if (confirmButton) {
        break;
      } else {
        confirmButton = confirm('Please Press Ok to continue');
      }
    }
    break;
  } else if (userGuess > gameAnswer) {
    guessMessage = 'Try Again.  This time Lower';
    guessChancesLeft -= 1;
  } else if (userGuess < gameAnswer) {
    guessMessage = 'Try Again.  This time Higher';
    guessChancesLeft -= 1;
  }
}

if ( guessChancesLeft < 1) {
  confirm('Sorry, all out of guesses. The correct answer was: ' + gameAnswer + '. On to the last question');
  numberOfQuestions =+ 1;
  while (confirmButton === false) {
    if (confirmButton) {
      break;
    } else {
      confirmButton = confirm('Please Press Ok to continue to the last question.');
    }
  }
}

let userGuessWifeName = prompt('Can you guess Roger\'s Wife\'s Name? \n She goes by 2 names starting with M');
while (userGuessWifeNameNumber > 0) {
  console.log('User guess on wife name: ' + userGuessWifeName);
  console.log('Names Used: ' + wifeName[0] + ' ' + wifeName[1]);
  userGuessWifeNameNumber -= 1;
  if (userGuessWifeName === wifeName[0] || userGuess === wifeName[1]) {
    confirm('You got it.  Great job.');
    totalRight += 1;
    break;
  } else {
    userGuessWifeName = prompt('Try again! Can you guess Roger\'s Wife\'s Name?');
  }
}
//   else if (userGuessWifeNameNumber === 1) {
//     userGuessWifeName = prompt('Can you guess Roger\'s Wife\'s Name? \n * i * * * * * *');
//   }
//   else if (userGuessWifeNameNumber === 2) {
//     userGuessWifeName = prompt('Can you guess Roger\'s Wife\'s Name? \n * i * * * * * e');
//   }
//   else if (userGuessWifeNameNumber === 3) {
//     userGuessWifeName = prompt('Can you guess Roger\'s Wife\'s Name? \n * i * h * * * e');
//   }
//   else if (userGuessWifeNameNumber === 4) {
//     userGuessWifeName = prompt('Can you guess Roger\'s Wife\'s Name? \n * i * h * l * e');
//   }
//   else if (userGuessWifeNameNumber === 5) {
//     userGuessWifeName = prompt('Can you guess Roger\'s Wife\'s Name? \n * i * h * l l e');
//   }
//   else if (userGuessWifeNameNumber === 5) {
//     userGuessWifeName = prompt('Can you guess Roger\'s Wife\'s Name? \n * i c h * l l e');
//   } else {
//     alert('You were so close.  Her name is Michaela');
//   }
// }
alert('You got ' + totalRight + ' answers correct out of 7');
