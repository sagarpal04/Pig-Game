"use strict";
const sectionLeft = document.querySelector(".left");
const sectionRight = document.querySelector(".right");
const player0 = document.querySelector(".player-score-0");
const player1 = document.querySelector(".player-score-1");
const currentScore0 = document.querySelector(".current-score-0");
const currentScore1 = document.querySelector(".current-score-1");
const newGame = document.querySelector(".new-game");
const rollDice = document.querySelector(".roll-dice");
const hold = document.querySelector(".hold");
const dice = document.querySelector(".dice");
const scoreArray = [0, 0];
let current = 0;
let playerNumber = 0;
let playing = true;
const switchOverlay = () => {
  sectionLeft.classList.toggle("overlay");
  sectionRight.classList.toggle("overlay");
  playerNumber = playerNumber === 0 ? 1 : 0;
};
const setCurrent = (playerNumber) => {
  if (!playerNumber) {
    currentScore0.textContent = current;
  } else {
    currentScore1.textContent = current;
  }
};

rollDice.addEventListener("click", function () {
  const randomNumber = Math.trunc(Math.random() * 6 + 1);
  if (playing) {
    dice.classList.remove("hidden");
    dice.src = `dice-${randomNumber}.png`;
    if (randomNumber === 1) {
      current = 0;
      setCurrent(playerNumber);
      switchOverlay();
    } else {
      current += randomNumber;
      setCurrent(playerNumber);
    }
  }
});
hold.addEventListener("click", function () {
  if (playing) {
    scoreArray[playerNumber] += current;
    if (!playerNumber) {
      player0.textContent = Number(scoreArray[playerNumber]);
    } else {
      player1.textContent = Number(scoreArray[playerNumber]);
    }
    if (scoreArray[playerNumber] >= 20) {
      if (!playerNumber) {
        sectionLeft.classList.add("player-winner");
      } else {
        sectionRight.classList.add("player-winner");
      }
      dice.classList.add("hidden");
      playing = playing ? false : true;
    }
    current = 0;
    setCurrent(playerNumber);
    switchOverlay();
  }
});
// Project Done
