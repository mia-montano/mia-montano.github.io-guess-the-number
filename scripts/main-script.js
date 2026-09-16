
let target = 10; //will be random number later
let playerAttempts = 0;
let playerGuesses = [];
let playerWinCount = 0;
let playerLossCount = 0;

let guessButton = document.querySelector("#guessButton");
let guessMessage = document.querySelector("#guessMessage");
let guessInput = document.querySelector("#guessInput");
let previousGuesses = document.querySelector("#previousGuesses");
let attempts = document.querySelector("#attempts");
let winOrLossCount = document.querySelector("#winOrLossCount");
let playAgainButton = document.querySelector("#playAgainButton");

let winMessage = "Congratulations, you guessed it!";
let loseMessage = "Sorry, you lost.";

playAgainButton.style.visibility = "hidden";

guessButton.addEventListener('click', function () {
    guessMessage.style.color = "black";
    previousGuesses.style.visibility = "visible";
    attempts.style.visibility = "visible";

    if (playerAttempts >= 7) {
        guessMessage.style.color = "red";
        guessMessage.textContent = loseMessage;
        playerLossCount += 1;
        guessInput.value = "";
        guessButton.style.visibility = "hidden";
        playAgainButton.style.visibility = "visible";
        previousGuesses.textContent = playerGuesses;
        lossCount.textContent = "You've lost: " + playerLossCount + " times.";
    }
    else {

        if (guessInput.value <= 0 || guessInput.value >= 100) {
            guessMessage.textContent = "Please input a number between 1 and 99 ONLY.";
            guessInput.value = "";
        }
        else if (guessInput.value == "") {
            guessMessage.textContent = "Please input a number between 1 and 99 ONLY.";
            guessInput.value = "";
        } else {

            if (guessInput.value == target) { //for some reason doesn't work with ===
                guessMessage.style.color = "green";
                guessMessage.textContent = winMessage;
                playerWinCount += 1;
                playerAttempts += 1;
                playerGuesses.push(guessInput.value);
                previousGuesses.textContent = playerGuesses;
                attempts.textContent = "You've attempted " + playerAttempts + " times.";
                winCount.textContent = "You've won: " + playerWinCount + " times!";
                guessInput.value = "";
                guessButton.style.visibility = "hidden";
                playAgainButton.style.visibility = "visible";
            }
            else if (guessInput.value < target) {
                guessMessage.textContent = "You are low.";
                playerAttempts += 1;
                playerGuesses.push(guessInput.value);
                previousGuesses.textContent = playerGuesses;
                attempts.textContent = "You've attempted: " + playerAttempts + " times.";
                guessInput.value = "";
            }
            else if (guessInput.value > target) {
                guessMessage.textContent = "You are high.";
                playerAttempts += 1;
                playerGuesses.push(guessInput.value);
                previousGuesses.textContent = playerGuesses;
                attempts.textContent = "You've attempted: " + playerAttempts + " times.";
                guessInput.value = "";
            }
        }
    }
})

playAgainButton.addEventListener('click', function () {
    guessButton.style.visibility = "visible";
    playAgainButton.style.visibility = "hidden";
    playerGuesses = [];
    playerAttempts = 0;
    target = 2; //should also be random
    previousGuesses.style.visibility = "hidden";
    attempts.style.visibility = "hidden";
})