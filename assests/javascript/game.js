//Array of letters that will be guessed by the computer.
let letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o",
    "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

//Variables with values as they will appear before first user guess.
let wins = 0;
let losses = 0;
let guessesLeft = 10;
let guesses = [];

let winsText = document.getElementById("wins");
let lossesText = document.getElementById("losses");
let guessesLeftText = document.getElementById("guesses-left");
let guessesText = document.getElementById("your-guesses");

//Function used to generate random computer guess and user input. 
document.onkeyup = function (event) {
    
//Random cumputer guess.
    let computerGuess = letters[Math.floor(Math.random() * letters.length)];
    
    let userGuess = event.key;

//This will push user guess to the 'guesses' array to be displayed.
    guesses.push(userGuess);
    guessesLeft--;


//If statement that will determine if user wins or loses.
    if (userGuess === computerGuess) {
        wins++;
        restart();
        alert("You got it! The correct letter was " + computerGuess + "!");
    } else if (guessesLeft === 0) {
        losses++;
        restart();
        alert("Sorry, I was thinking of the letter " + computerGuess + "."); 
    }

//This will update user's wins, losses, guesses left and display user guesses.
    winsText.textContent = "Wins: " + wins;
    lossesText.textContent = "Losses: " + losses;
    guessesLeftText.textContent = "Guesses Left: " + guessesLeft;
    guessesText.textContent = "Your guesses so far: " + guesses;
}

//This function will reset number of guesses left & user guesses after win or loss.
let restart = function () {
    guessesLeft = 10;
    guesses = [];
    let computerGuess = letters[Math.floor(Math.random() * letters.length)];
}



