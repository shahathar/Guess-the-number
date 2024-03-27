'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

const displayMessage = message =>
  (document.querySelector(`.message`).textContent = message);

const displayScore = score =>
  (document.querySelector(`.score`).textContent = score);

document.querySelector(`.check`).addEventListener('click', function () {
  let guess = Number(document.querySelector(`.guess`).value); //for an <input> tag we use value instead of textContent

  //when no value entered by the usr
  if (!guess) {
    displayMessage(`Select a Number!!`);
    // when user entered the correct number
  } else if (guess === secretNumber) {
    displayMessage(`Correct Number!!!`);
    document.querySelector(`.number`).textContent = secretNumber;
    document.querySelector(`body`).style.backgroundColor = `#5cb85c`;
    document.querySelector(`.number`).style.width = `30rem`;
    if (score > highScore) {
      highScore = score;
      document.querySelector(`.highscore`).textContent = highScore;
    }
    //when usèr guessed thè wrong number
  } else if (guess !== secretNumber) {
    displayMessage(guess > secretNumber ? `Too High ^` : `Too Low v`);
    score--;
    if (score > 0) {
      displayScore(score);
    } else {
      displayMessage(`You Lose...`);
      displayScore('0');
      document.querySelector(`body`).style.backgroundColor = `#ff0000`;
    }
  }

  ///when user wantes to play again
  document.querySelector(`.again`).addEventListener('click', function () {
    score = 20;
    displayScore(score);
    secretNumber = Math.trunc(Math.random() * 20) + 1;
    displayMessage(`Start guessing...`);
    document.querySelector(`.guess`).value = ``; //for an <input> tag we use value instead of textContent
    document.querySelector(`.number`).textContent = `?`;
    document.querySelector(`body`).style.backgroundColor = `#222`;
    document.querySelector(`.number`).style.width = `15rem`;
  });
});
