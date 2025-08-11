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
            }
        });
    }
});

// Functions
function runGame() {}

function checkAnswers() {}

function calculateCorrectAnswer() {}

function incrementScore() {}

function incrementWrongAnswer() {}

function displayAdditionQuestion() {}

function displaySubtractQuestion() {}

function displayMultiplyQuestion() {}
