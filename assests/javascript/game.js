let letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

let wins = 0;
let losses = 0;
let guessesLeft = 10;
let guesses = [];

let winsText = document.getElementById("wins");
let lossesText = document.getElementById("losses");
let guessesLeftText = document.getElementById("guesses-left");
let guessesText = document.getElementById("your-guesses");

document.onkeyup = function (event) {
    let userGuess = event.key;

    let computerGuess = letters[Math.floor(Math.random() * letters.length)];

    if (userGuess === computerGuess) {
        wins++;
    } else {
        losses++;
    }

    winsText.textContent = "Wins: " + wins;
    lossesText.textContent = "Losses: " + losses;
    guessesText.textContent = "Your guesses so far: " + userGuess;


}




