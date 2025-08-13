// Event Listeners

//Wait for the DOM to finishing loading before running the game to
// Get the button elements and add event listeners

document.addEventListener('DOMContentLoaded', function () {
    let buttons = document.getElementsByTagName('button');

    for (button of buttons) {
        button.addEventListener('click', function () {
            if (this.getAttribute('data-type') === 'submit') {
                checkAnswers(); // If the button is a submit button, check the answer
            } else {
                let gameType = this.getAttribute('data-type'); // Get the game type from the button
                runGame(gameType);
            }
        });
    }

    document.getElementById('answer-box').addEventListener('keydown', function (e) {
        if (e.key === 'Enter') {
            checkAnswers();
        }
    });

    runGame('addition'); // Start the game with addition
});

// Functions

/**
 * The main game "loop", called when the script is first loaded
 * and after the user answer has been processed
 */
function runGame(gameType) {
    document.getElementById('answer-box').value = ''; // Clear the answer box
    document.getElementById('answer-box').focus(); // Focus on the answer box, with the cursor placed inside

    // Generates two random numbers between 1 and 25
    let num1 = Math.floor(Math.random() * 25) + 1;
    let num2 = Math.floor(Math.random() * 25) + 1;

    if (gameType === 'addition') {
        displayAdditionQuestion(num1, num2);
    } else if (gameType === 'multiply') {
        displayMultiplyQuestion(num1, num2);
    } else if (gameType === 'subtract') {
        displaySubtractQuestion(num1, num2);
    } else if (gameType === 'division') {
        displayDivisionQuestion(num1, num2);
    } else {
        alert(`Unknown game type: ${gameType}`);
        throw `Unknown game type: ${gameType}. Aborting!`; //Stop the game from running and whatever we supply an error message here it will print that in the console for debugging
    }
}

function checkAnswers() {
    /**
     * Check the user's answer against the first element in
     * the returned calculatedCorrectAnswer array
     */
    let userAnswer = parseInt(document.getElementById('answer-box').value); //Read the user answer from the DOM
    let calculatedAnswer = calculateCorrectAnswer();
    let isCorrect = userAnswer === calculatedAnswer[0]; //Check if the user answer is equal to the correct answer (remember it is an array, so we have to be sure that we are comparing with the right element within the array)
    if (isCorrect) {
        alert(`Congratulation!!! ${userAnswer} is correct! :D`);
        incrementScore();
    } else {
        alert(`Awww.... you answered ${userAnswer}. The correct answer is ${calculatedAnswer[0]}`);
        incrementWrongAnswer();
    }
    runGame(calculatedAnswer[1]); //Run the game again with the same game type (addition, subtraction, multiplication...etc) that we have just played
}

/**
 * Get the operands (random numbers, we have generated) and operator (plus, minus...etc)
 * directly from the DOM , and returns the correct answer
 */
function calculateCorrectAnswer() {
    let operand1 = parseInt(document.getElementById('operand1').innerText); //Read from the DOM as a number and pass it to the vble let operand1...
    let operand2 = parseInt(document.getElementById('operand2').innerText);
    let operator = document.getElementById('operator').innerText;

    if (operator === '+') {
        return [operand1 + operand2, 'addition']; //Return an array with the correct answer and the game type
    } else if (operator === 'x') {
        return [operand1 * operand2, 'multiply'];
    } else if (operator === '-') {
        return [operand1 - operand2, 'subtract'];
    } else if (operator === '/') {
        return [operand1 / operand2, 'division'];
    } else {
        alert(`Unimplement operator ${operator}`);
        throw `Unimplement operator ${operator}. Aborting!`;
    }
}

/**
 * Gets the current score from the DOM and increments it by 1
 */
function incrementScore() {
    //Get the current score from the DOM, increment it by 1 and set it back to the DOM
    let oldScore = parseInt(document.getElementById('score').innerText);
    document.getElementById('score').innerText = ++oldScore;
    //The ++oldScore is the same as oldScore + 1, but it is a shorthand way to write it
}

/**
 * Gets the current tally of the incorrect answer from the DOM and increments it by 1
 */
function incrementWrongAnswer() {
    //Get the current score from the DOM, increment it by 1 and set it back to the DOM
    let oldScore = parseInt(document.getElementById('incorrect').innerText);
    document.getElementById('incorrect').innerText = ++oldScore;
}

//Display questions functions
//Display the addition question in the DOM (screen)
function displayAdditionQuestion(operand1, operand2) {
    //Get the elements from the DOM and set their text content to the operands and operator
    document.getElementById('operand1').textContent = operand1; //the operand1 or 2 (which are generated randomly in the runGAme function) give the document.getElementById().textContent their value, and writes them on their place in the DOM
    document.getElementById('operand2').textContent = operand2; //in this case where the id = operand 1 and id=operand2, i mean, here we are not declaring a variable, we are writing their value
    document.getElementById('operator').textContent = '+';
}

function displaySubtractQuestion(operand1, operand2) {
    document.getElementById('operand1').textContent = operand1 > operand2 ? operand1 : operand2;
    document.getElementById('operand2').textContent = operand1 > operand2 ? operand2 : operand1;
    document.getElementById('operator').textContent = '-';
}

//Display the multiply question in the DOM (screen)
function displayMultiplyQuestion(operand1, operand2) {
    //Get the elements from the DOM and set their text content to the operands and operator
    document.getElementById('operand1').textContent = operand1; //the operand1 or 2 (which are generated randomly in the runGAme function) give the document.getElementById().textContent their value, and writes them on their place in the DOM
    document.getElementById('operand2').textContent = operand2; //in this case where the id = operand 1 and id=operand2, i mean, here we are not declaring a variable, we are writing their value
    document.getElementById('operator').textContent = 'x';
}

function displayDivisionQuestion(operand1, operand2) {
    let moduleNum = Math.floor(Math.random() * 10) + 1;
    operand1 = operand2 * operand1;

    document.getElementById('operand1').textContent = operand1;
    document.getElementById('operand2').textContent = operand2;
    document.getElementById('operator').textContent = '/';
}
