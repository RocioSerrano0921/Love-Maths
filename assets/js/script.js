// Event Listeners

//Wait for the DOM to finishing loading before running the game
// Get the button elements and add event listeners

document.addEventListener('DOMContentLoaded', function () {
    let buttons = document.getElementsByTagName('button');

    for (button of buttons) {
        button.addEventListener('click', function () {
            if (this.getAttribute('data-type') === 'submit') {
                alert('You have clicked submit!');
            } else {
                let gameType = this.getAttribute('data-type');
                alert(`You have clicked ${gameType}!`);
                console.log(gameType);
            }
        });
    }
});

// Functions

/**
 * The main game "loop", called when the script is first loaded
 * and after the user answer has been processed
 */
function runGame() {
    // Creates two random numbers between 1 and 25
    let num1 = Math.floor(Math.random() * 25) + 1;
    let num2 = Math.floor(Math.random() * 25) + 1;
}

function checkAnswers() {}

function calculateCorrectAnswer() {}

function incrementScore() {}

function incrementWrongAnswer() {}

function displayAdditionQuestion() {}

function displaySubtractQuestion() {}

function displayMultiplyQuestion() {}
