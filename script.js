'use strict';

let number = Math.trunc(Math.random() * 20) + 1;
// document.querySelector('.number').textContent = number;

let score = 20;
let highscore = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  if (!guess) {
    // document.querySelector('.message').textContent = '🛑No Number!';
    displayMessage('🛑No Number!');
  } else if (guess == number) {
    document.querySelector('.number').textContent = number;
    // document.querySelector('.message').textContent = '✅Correct Guess';
    displayMessage('✅Correct Guess');

    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
  } else if (guess != number) {
    if (score > 1) {
      //   document.querySelector('.message').textContent =
      // guess > number ? '📈 Too High' : '📉 Too Low';
      displayMessage(guess > number ? '📈 Too High' : '📉 Too Low');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      //   document.querySelector('.message').textContent = '💥 You lost the game!';
      displayMessage('💥 You lost the game!');
      document.querySelector('.score').textContent = 0;
    }
  }

  function restore() {
    document.querySelector('.guess').value = '';
    // document.querySelector('.message').textContent = 'Start guessing...';
    displayMessage('Start guessing...');
    document.querySelector('body').style.backgroundColor = '#222';
    number = Math.trunc(Math.random() * 20) + 1;
    score = 20;
    document.querySelector('.score').textContent = score;
    document.querySelector('.number').textContent = '?';
  }

  document.querySelector('.again').addEventListener('click', restore);
});
