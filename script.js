"use strict";

/*
console.log(document.querySelector(".massage-show").textContent);
document.querySelector(".massage-show").textContent = "🎉Correct Number";
document.querySelector(".number-show").textContent = 13;
document.querySelector(".score").textContent = 10;

/// ----  value

document.querySelector(".number-guess").value = 23;
console.log(document.querySelector(".number-guess").value);

*/

//////------------------- real project -
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".number-guess").value);
  console.log(guess, typeof guess);

  ////---- When there is no input
  if (!guess) {
    document.querySelector(".massage-show").textContent = "⛔ No Number";

    ////---- When player wins
  } else if (guess === secretNumber) {
    document.querySelector(".massage-show").textContent = "🎉Correct Number";

    document.querySelector(".number-show").textContent = secretNumber;

    document.querySelector("body").style.backgroundColor = "#60b347";
    document.querySelector(".number-show").style.width = "35rem";

    if (score > highScore) {
      highScore = score;
      document.querySelector(".Highscore").textContent = highScore;
    }

    ////---- When guess number is to high
  } else if (guess > secretNumber) {
    if (score > 1) {
      document.querySelector(".massage-show").textContent = "Too High 📈";
      score--; ////// score = score -1 at ar at soman score--
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".massage-show").textContent =
        "💥You loos the game";
      document.querySelector(".score").textContent = 0;
    }
    ////---- When guess number is to low
  } else if (guess < secretNumber) {
    if (score > 1) {
      document.querySelector(".massage-show").textContent = "Too Low 📉";
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".massage-show").textContent =
        "💥You loos the game";
      document.querySelector(".score").textContent = 0;
    }
  }
});

// ------------- Ebar sikhbo kivabe again button ta kaj korba

document.querySelector(".again-button").addEventListener("click", function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;

  document.querySelector(".massage-show").textContent = "Start guessing...";
  document.querySelector(".score").textContent = score;
  document.querySelector(".number-show").textContent = "?";
  document.querySelector(".number-guess").value = "";

  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".number-show").style.width = "20rem";
});

/*
///// practice ------------------

const secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
document.querySelector(".number-show").textContent = secretNumber;

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".number-guess").value);
  console.log(guess);

  if (!guess) {
    document.querySelector(".massage-show").textContent = "⛔ No Number";
  } else if (guess === secretNumber) {
    document.querySelector(".massage-show").textContent =
      "This Number is Correct ✨🎉";
  } else if (guess > secretNumber) {
    if (score > 0) {
      document.querySelector(".massage-show").textContent = "Too High";
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".massage-show").textContent = "you loss the game";
    }
  } else if (guess < secretNumber) {
    document.querySelector(".massage-show").textContent = "Too low";
    score--;
    document.querySelector(".score").textContent = score;
  }
});

*/
