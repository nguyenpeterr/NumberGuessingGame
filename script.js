'use strict';


/*
console.log(document.querySelector('.message').textContent);


document.querySelector('.message').textContent = 'Correct Number!';


document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;


console.log(document.querySelector('.guess').value);
*/


let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;


document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess);

  // If the user does not select a number
  if (!guess) {
    document.querySelector('.message').textContent = 'Pick a number!';
  // If the user guesses correctly
  } else if (guess === secretNumber) {
    document.querySelector('.message').textContent = 'Correct Number!';
    document.querySelector('.number').textContent = secretNumber;
  // Bacakground changes to green and secret number box is increased in size
    document.querySelector('body').style.backgroundColor = "#60b347";
    document.querySelector(".number").style.width = "30rem";

    // Set high score
    if(score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }

  // If number guess is too high
  } else if (guess > secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = 'Too high!';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'You lose.';
      document.querySelector('.score').textContent = 0;
    }
  // If number guessed is too low
  } else if (guess < secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = 'Too low!';
      score--;
      document.querySelector('.score').textContent = score;
    // If the score reaches 0
    } else {
      document.querySelector('.message').textContent = 'You lose.';
      document.querySelector('.score').textContent = 0;
    }
  }

});

// Resets the game but not the high score
document.querySelector('.again').addEventListener('click', function() {
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  score = 20;

  document.querySelector('.score').textContent = score;
  document.querySelector('.guess').value = "";
  document.querySelector('.message').textContent = "Start guessing...";
  document.querySelector('body').style.backgroundColor = "#222";
  document.querySelector('.number').style.width = "15rem";
  document.querySelector('.number').textContent = "?";

})



