'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;

let score = 20;
let highscore = 0;

const displayMessage = function(message) {
  document.querySelector('.message').textContent = message;
}
 

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess);

  // If the user does not select a number
  if (!guess) {
    displayMessage('Pick a number!');
  // If the user guesses correctly
  } else if (guess === secretNumber) {
    displayMessage('Correct Number!');
    document.querySelector('.number').textContent = secretNumber;
  // Bacakground changes to green and secret number box is increased in size
    document.querySelector('body').style.backgroundColor = "#60b347";
    document.querySelector('.number').style.width = "30rem";

    // Set high score
    if(score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }

  // If the guess does not equal the secret number
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? 'Too high!' : 'Too low!');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      displayMessage('You lose.');
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
  displayMessage("Start guessing...");
  document.querySelector('body').style.backgroundColor = "#222";
  document.querySelector('.number').style.width = "15rem";
  document.querySelector('.number').textContent = "?";

})



 