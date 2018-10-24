// JavaScript!!
'use strict';
//Username question
var userName = prompt('What is your name?');
console.log('userName', userName);
//Instructions
alert('Hi ' + userName + '! Let\'s play a game! Answer each question with YES/Yes/y or NO/No/n based on your best guess about me!');

//first question
var responseOne = prompt('Is purple my favorite color?');
console.log('responseOne', responseOne);
//force uppercase
var uppercaseResponseOne = responseOne.toUpperCase();
console.log('uppercaseResponseOne', uppercaseResponseOne);
//first answer
if (uppercaseResponseOne === 'YES' || uppercaseResponseOne === 'Y'){
  alert('Correct! I love purple!');
} else {
  alert('Sorry! I love purple! Better luck next time!');
}

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
}

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
}

//fourth question
var responseFour = prompt('Do I have a dog?');
console.log('responseFour', responseFour);
//force uppercase
var uppercaseResponseFour = responseFour.toUpperCase();
console.log('uppercaseResponseFour', uppercaseResponseFour);
//fourth answer
if (uppercaseResponseFour === 'YES' || uppercaseResponseFour === 'Y'){
  alert('You\'re right! I do have a dog! His name is Zeus!');
} else {
  alert('Sorry! I do have a dog! Better luck next time!');
}

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
}

//sixth question
var myNumber = 17;
console.log('myNumber', myNumber);
var numberGuess = parseInt(prompt('Hey, ' + userName + ' can you guess my favorite number?'));
console.log('numberGuess', numberGuess);
while (numberGuess !== myNumber) {
  if (numberGuess > myNumber){
    parseInt(prompt(numberGuess +' is too high! Guess again!'));
  }
  if (numberGuess < myNumber) {
    parseInt(prompt(numberGuess + ' is too low! Guess again!'));
  }
}
if (numberGuess === myNumber) {
  alert('Congrats! You guessed that' + myNumber + ' is my number!')
}

