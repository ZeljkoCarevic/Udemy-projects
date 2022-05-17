'use strict';
/*
console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent = 'Correct number';
console.log(document.querySelector('.message').textContent);

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 20;

document.querySelector('.guess').value = 23;
*/

let number = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;
const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(typeof guess, guess);

  if (!guess) {
    //document.querySelector('.message').textContent = 'Nie broj';
    displayMessage(' nie broj');
  } else if (guess == number) {
    document.querySelector('.number').textContent = number;
    //document.querySelector('.message').textContent = 'Correct number';
    displayMessage('točan broj');
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';

    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
    //when guess is wrong
  } else if (guess !== number) {
    if (score > 1) {
      //document.querySelector('.message').textContent =
      //guess > number ? 'previsoko' : 'prenisko';
      displayMessage(guess > number ? 'previsoko' : 'prenisko');
      score = score - 1;
      document.querySelector('.score').textContent = score;
    } else {
      //document.querySelector('.message').textContent = 'Spusia si asu';
      displayMessage('ispusia si');
      document.querySelector('.score').textContent = 0;
    }
  }
});
document.querySelector('.again').addEventListener('click', function () {
  document.querySelector('.score').textContent = 20;

  number = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.message').textContent = 'Start guessin...';
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
