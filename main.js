// wants to link the userName and userQuestion to the DOM


// takes in user's name
let userName = '';

// says hello if user doesn't enter a name 
// says hello and their name if userName variable isn't empty
userName ? console.log(`Hello ${userName}!`) :
console.log('Hello!');

// question from user 
let userQuestion = 'Will today be a good day?';
console.log(`${userName} asked ${userQuestion}`);

// generates random number
let randomNumber = Math.floor(Math.random() * 8);
// program printing to the console
let eightBall = '';
switch(randomNumber){
  case 0:
  console.log('It is certain');
  break
  case 1:
  console.log('It is decidedly so');
  break
  case 2:
  console.log('Reply hazy try again');
  break
  case 3:
  console.log('Cannot predict now');
  break
  case 4:
  console.log('Do not count on it');
  break
  case 5:
  console.log('My sources say no');
  break
  case 6:
  console.log('Outlook not so good');
  break
  case 7:
  console.log('Signs point to yes');
  break
}