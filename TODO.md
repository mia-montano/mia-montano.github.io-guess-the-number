PSUEDOCODE:
1. Generate a random number between 1 and 99 and store it as the target number.

✅ 2. Create and initialize variables
    i. Create variable to store the player's number of attempts and set it to 0.
   ii. Create variables to store the player's total wins and losses and set them to 0.

✅ 3. Display a message to the user prompting them to guess a number between 1 and 99.

✅ 4. Get the user's input as their guess.
    a. Create a text box
    b. Create a "Guess" button
    c. Add an event listener to the button
    d. Display user's guesses (append it to previous guesses) 

✅ 5. Create a function to validate the user's input:
    If the input is outside the range of 1 to 100 display an error message 

✅ 6. Compare the user's guess with the target number:
   a. If the guess is equal to the target number:
      i. Display a congratulatory message to the user along with the number of attempts taken.
     ii. Increase variable that keeps track of number of wins and display its value
    iii. Disable/Hide Guess button,  display "Play Again" button
   b. If the guess is less than the target number:
      i. Display a message asking the user to guess a higher number.
     ii.  Increment the attempts variable by 1.
   c. If the guess is greater than the target number:
      i. Display a message asking the user to guess a lower number.
     ii. Increment the attempts variable by 1.

✅ 8. Check the number of attempts, if it's 7:
    i. Display a "You Lost" message
   ii. Increase variable that keeps track of the number of losses and display its value
   iii. Disable/Hide Guess button,  display "Play Again" button

✅ 9. Create an event listener for the "Play Again" button
   i.  Clear previous guesses
   ii. Reset number of attempts
  iii. Generate a new random number
  iv.  Enable/Show Guess button, hide "Play Again" button

  
✅ More:
1. When you win or lose, the guess button disappears
2. Include a reset button. It shows when you finish (win or lose the game)
3. When you click the reset button, the previous guesses display gets cleared out, the random number is reset, and the number of tries goes back up to 7
4. The reset button disappears when you click on it (and doesn't reappear again until you win or lose)