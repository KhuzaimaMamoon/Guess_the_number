
Number Guessing Game
Overview
This is a simple web-based number guessing game where the user tries to guess a randomly generated number between 1 and 100. The game provides feedback on each guess and ends when the user guesses correctly or runs out of attempts.

Features
Random number generation between 1 and 100.
User input validation to ensure guesses are between 1 and 100.
Feedback on each guess indicating whether the guess is too low, too high, or correct.
Game reset functionality to start a new game after winning or losing.
Background color change to provide visual feedback on guesses (green for correct, red for too low).
File Structure
index.html: Contains the HTML structure for the game.
style.css: Contains the CSS for styling the game.
script.js: Contains the JavaScript logic for the game.
How to Play
Start the Game:

Open index.html in a web browser.
A random number between 1 and 100 will be generated automatically.
Make a Guess:

Enter a number between 1 and 100 in the input field.
Click the "Submit" button to submit your guess.
Feedback:

The game will provide feedback if your guess is too low, too high, or correct.
The remaining number of guesses will be displayed.
Game End:

If you guess the correct number, the game will congratulate you and change the background color to green.
If you run out of attempts (10 guesses), the game will end and reveal the correct number.
Restart the Game:

After the game ends, a "Start new game" button will appear.
Click this button to reset the game with a new random number.
JavaScript Code Explanation
Variables
random_num: Stores the randomly generated number between 1 and 100.
body: Selects the body element for background color changes.
user_input: Selects the input field where the user enters their guess.
submit: Selects the submit button for submitting guesses.
guess_slot: Selects the element where previous guesses are displayed.
remaining: Selects the element where remaining guesses are displayed.
low_or_high: Selects the element where feedback messages are displayed.
startOver: Selects the element where the "Start new game" button will be appended.
p: Creates a paragraph element for the "Start new game" button.
preGuess: Array to store previous guesses.
numGuess: Counter for the number of guesses made.
playGame: Boolean to control the game state.
Functions
validate_guess(guess): Validates the user's guess to ensure it's a number between 1 and 100.
check_guess(guess): Checks if the guess is correct, too low, or too high, and provides feedback.
display_guess(guess): Updates the display with the current guess and the number of remaining guesses.
display_message(message): Displays a message to the user.
end_game(): Ends the game by disabling the input field and displaying the "Start new game" button.
new_game(): Resets the game state to start a new game.
Event Listeners
submit.addEventListener("click", function(e) {...}): Listens for click events on the submit button to process guesses.
new_game_button.addEventListener("click", function(e) {...}): Listens for click events on the "Start new game" button to reset the game.
How to Customize
You can change the range of the random number by modifying the random_num generation logic.
The maximum number of guesses can be adjusted by changing the value in the validate_guess function and the remaining.innerHTML.
Customize the feedback messages and styling by modifying the corresponding functions and CSS.
Enjoy the game!
