let reset = document.querySelector('.reset');
let guessBtn = document.querySelector('.guessBtn');
let guessInput = document.querySelector('.guessInput');
let msg = document.querySelector('.msg');
let chancesTxt = document.querySelector('.chances');
let scoreTxt = document.querySelector('.score');

let hiddenNumber = Math.trunc(Math.random() * 10) + 1;
let chances = 10;
let score = 0;
let LoadAllFunctions = () => {
  guessBtn.onclick = () => {
    let guessBtnNumber = Number(guessInput.value);
    if (!guessInput.value) {
      msg.textContent = 'Please Write A Number between 1 & 10';
      msg.style.color = 'rgb(61, 61, 251)';
    } else {
      if (guessBtnNumber === hiddenNumber) {
        msg.textContent = 'Correct';
        msg.style.color = 'Green';
        if (chances > score) {
          score = chances;
          scoreTxt.textContent = chances;
        }
        guessInput.value = '';
      } else {
        if (chances > 1) {
          guessBtnNumber > hiddenNumber ? (msg.textContent = 'To High') : '';
          guessBtnNumber < hiddenNumber ? (msg.textContent = 'To Low') : '';
          msg.style.color = 'Red';
          chances--;
          chancesTxt.textContent = chances;
          if (chances === 1) {
            msg.textContent = 'Game Over';
          }
        }
      }
    }
  };
  reset.onclick = () => {
    hiddenNumber = Math.trunc(Math.random() * 10) + 1;

    msg.textContent = 'Result will show here';
    msg.style.color = 'black';
    chances = 10;
    chancesTxt.textContent = 10;
    guessInput.value = '';
  };
};
LoadAllFunctions();
