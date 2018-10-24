// JavaScript!!
'use strict';
//Username question
var userName = prompt('What is your name?');
console.log('userName', userName);
//Instructions
alert('Hi ' + userName + '! Let\'s play a game! Answer each question with YES/Yes/y or NO/No/n based on your best guess about me!');

//score variable
var numberCorrect = 0;

//first question
var responseOne = prompt('Is purple my favorite color?');
console.log('responseOne', responseOne);
//force uppercase
var uppercaseResponseOne = responseOne.toUpperCase();
console.log('uppercaseResponseOne', uppercaseResponseOne);
//first answer
if (uppercaseResponseOne === 'YES' || uppercaseResponseOne === 'Y'){
  alert('Correct! I love purple!');
  numberCorrect++;
} else {
  alert('Sorry! I love purple! Better luck next time!');
}
console.log('numberCorrect', numberCorrect);

//secondQuestion
var responseTwo = prompt('Do I like Eggplant?');
console.log('responseTwo', responseTwo);
//force uppercase
var uppercaseResponseTwo = responseTwo.toUpperCase();
console.log('uppercaseResponseTwo', uppercaseResponseTwo);
//second answer
if (uppercaseResponseTwo === 'YES' || uppercaseResponseTwo === 'Y' ){
  alert('Sorry! I don\'t like eggplan! Better luck next time!');
} else {
  alert('You\'re right! I think eggplan is gross!');
  numberCorrect++;
}
console.log('numberCorrect', numberCorrect);

//third question
var responseThree = prompt('Have I been to France?');
console.log('responseThree', responseThree);
//force uppercase
var uppercaseResponseThree = responseThree.toUpperCase();
console.log('uppercaseResponseThree', uppercaseResponseThree);
//third answer
if (uppercaseResponseThree === 'YES' || uppercaseResponseThree === 'Y'){
  alert('Sorry! I haven\'t been to France. I want to go, though!');
} else {
  alert('Correct! I have not been to France!');
  numberCorrect++;
}
console.log('numberCorrect', numberCorrect);

//fourth question
var responseFour = prompt('Do I have a dog?');
console.log('responseFour', responseFour);
//force uppercase
var uppercaseResponseFour = responseFour.toUpperCase();
console.log('uppercaseResponseFour', uppercaseResponseFour);
//fourth answer
if (uppercaseResponseFour === 'YES' || uppercaseResponseFour === 'Y'){
  alert('You\'re right! I do have a dog! His name is Zeus!');
  numberCorrect++;
} else {
  alert('Sorry! I do have a dog! Better luck next time!');
}
console.log('numberCorrect', numberCorrect);

//fifth question
var responseFive = prompt('Is summer my favorite season?');
console.log('responseFive', responseFive);
//force uppercase
var uppercaseResponseFive = responseFive.toUpperCase;
console.log('uppercaseResponseFive', uppercaseResponseFive);
//fifth answer
if (uppercaseResponseFive === 'YES' || uppercaseResponseFive === 'Y'){
  alert('Sorry! My favorite season is Fall, not Summer! Better luck next time!');
} else {
  alert('You\'re right! I prefer Fall to Summer!');
  numberCorrect++;
}
console.log('numberCorrect', numberCorrect);

//sixth question
var myNumber = 17;
console.log('myNumber', myNumber);
var numberGuess = parseInt(prompt('Hey, ' + userName + ' can you guess my favorite number?'));
console.log('numberGuess', numberGuess);
var i = 0;
console.log('i',i);
//if they guess wrong
while (numberGuess !== myNumber && i < 3) {
  if (numberGuess > myNumber){
    numberGuess = parseInt(prompt(numberGuess +' is too high! Guess again!'));
    i++;
    console.log('i', i);
  }
  if (numberGuess < myNumber) {
    numberGuess = parseInt(prompt(numberGuess + ' is too low! Guess again!'));
    i++;
    console.log('i', i);
  }

}
//if they guess right
if (numberGuess === myNumber && i < 3) {
  alert('Congrats! You guessed that' + myNumber + ' is my number!');
  numberCorrect++;
}
//if they run out of guesses
if (i === 3) {
  alert('Sorry! You\'re out of tries! My number was ' + myNumber + '!');
}
console.log('numberCorrect', numberCorrect);

//7th Question
var myVacations = ['GREECE', 'ARUBA', 'BELIZE', 'BAHAMAS', 'ENGLAND', 'MEXICO' ];
//ask question
var vacation = prompt('Where have I been on vacation?')
//force uppercase
var vacationsUppercase = vacation.toUpperCase;

for (i = 0; i < myVacations.length; i++) {
  if (myVacations[i] === vacationsUppercase) {
    alert('Congrats! You\'re right! I have been to ' + vacation);
  }
  if (myVacations[i] !== vacationsUppercase) {
    vacation = prompt('Try again!');
  }
}


