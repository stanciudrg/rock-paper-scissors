// UI program

// Home

let startContainer = document.querySelector(".start-game-container");
let startButton = document.querySelector(".start-game-button");
console.log(startButton);
let loadingElement = document.querySelector("#loading");
console.log(loading);
let gameContainer = document.querySelector(".game-container");


// Replace Start Game button with loading animation
startButton.addEventListener('click', () => {
    startButton.style.display = 'none';
    loadingElement.style.display = 'block';

    // Display the loading animation for 3s and start the game
    setTimeout(() => {
        loadingElement.style.display = 'none';
        startContainer.style.display = 'none';
        gameContainer.style.display = 'flex';
        // Adds transition for Game Container
        setTimeout(() => {
            gameContainer.classList.add('show');
        }, 10)
    }, 3000);
}, false)

// Game

// Internal game variables
let computer = 0;
let player = 0;
let playerSelection;
let computerSelection;

// Player and computer icons container
let buttonsContainer = document.querySelector('.game-buttons');

// Player icons
let rockIconPlayer = document.querySelector('#rock-icon-player');
let paperIconPlayer = document.querySelector('#paper-icon-player');
let scissorsIconPlayer = document.querySelector('#scissors-icon-player')

// Computer icons
let rockIconComputer = document.querySelector('#rock-icon-computer');
let paperIconComputer = document.querySelector('#paper-icon-computer');
let scissorsIconComputer = document.querySelector('#scissors-icon-computer');

// Game info text
let gameInfo = document.querySelector('.game-info p');

// Game score
let playerScore = document.querySelector('.player-score');
let computerScore = document.querySelector('.computer-score');

// Final results
let playerFinalResults = document.querySelector('.player-final-results');
let computerFinalResults = document.querySelector('.computer-final-results');

// Restart game button
let restartButton = document.querySelector('.restart-button');

// Event listeners
rockIconPlayer.addEventListener('click', () => {
    playerSelection = 'ROCK';
    computerSelection = getComputerChoice();
    iconSelect();
    playRound(playerSelection, computerSelection);
});

paperIconPlayer.addEventListener('click', () => {
    playerSelection = 'PAPER';
    computerSelection = getComputerChoice();
    iconSelect();
    playRound(playerSelection, computerSelection);
});

scissorsIconPlayer.addEventListener('click', () => {
    playerSelection = 'SCISSORS';
    computerSelection = getComputerChoice();
    iconSelect();
    playRound(playerSelection, computerSelection);
});

restartButton.addEventListener('click', restartGame);

// Functions

// Function that generates a random choice for the computer
function getComputerChoice() {
    const choices = ['ROCK', 'PAPER', 'SCISSORS']
    return (choices[Math.floor(choices.length * Math.random())]);
}

// Function that keeps track of the game, it increments the score and displays a text containing the results of reach round
function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        gameInfo.textContent = `You both chose ${playerSelection}, it's a tie.`;
        computer++;
        player++;
        computerScore.textContent = `${computer}`;
        playerScore.textContent = `${player}`;
    } else if (playerSelection === 'ROCK' && computerSelection === 'PAPER') {
        gameInfo.textContent = `PAPER beats ROCK. You lost.`;
        computer++;
        computerScore.textContent = `${computer}`;
    } else if (playerSelection === 'ROCK' && computerSelection === 'SCISSORS') {
        gameInfo.textContent = `ROCK beats SCISSORS. You won.`;
        player++;
        playerScore.textContent = `${player}`;
    } else if (playerSelection === 'PAPER' && computerSelection === 'ROCK') {
        gameInfo.textContent = `PAPER beats ROCK. You won.`;
        player++;
        playerScore.textContent = `${player}`;
    } else if (playerSelection === 'PAPER' && computerSelection === 'SCISSORS') {
        gameInfo.textContent = `SCISSORS beats PAPER. You lost.`;
        computer++;
        computerScore.textContent = `${computer}`;
    } else if (playerSelection === 'SCISSORS' && computerSelection === 'ROCK') {
        gameInfo.textContent = `ROCK beats SCISSORS. You lost.`;
        computer++;
        computerScore.textContent = `${computer}`;
    } else if (playerSelection === 'SCISSORS' && computerSelection === 'PAPER') {
        gameInfo.textContent = `SCISSORS beats PAPER. You won.`;
        player++;
        playerScore.textContent = `${player}`;
    } else {
        gameInfo.textContent = "An error has occurred. Please restart the game.";
    }
    // Run the endGame function after each round to check the score and end the game if necessary
    endGame();
}

// Function that displays animations when a value is selected by player or computer
function iconSelect() {
    // Player

    // If the selected element is already selected, restart the animation
    if (playerSelection == 'ROCK') {
        if (rockIconPlayer.style.transform == 'scale(1.25)') {
            rockIconPlayer.style.transform = 'scale(0.8)';
            setTimeout(() => {
                rockIconPlayer.style.transform = 'scale(1.25)';
            }, 100);
        } else {
            rockIconPlayer.style.transform = 'scale(1.25)';
        }
        paperIconPlayer.style.transform = 'scale(1)';
        scissorsIconPlayer.style.transform = 'scale(1) rotate(90deg)';
    } else if (playerSelection == 'PAPER') {

        // If the selected element is already selected, restart the animation
        if (paperIconPlayer.style.transform == 'scale(1.25)') {
            paperIconPlayer.style.transform = 'scale(0.8)';
            setTimeout(() => {
                paperIconPlayer.style.transform = 'scale(1.25)';
            }, 100);
        } else {
            paperIconPlayer.style.transform = 'scale(1.25)';
        }
        rockIconPlayer.style.transform = 'scale(1)';
        scissorsIconPlayer.style.transform = 'scale(1) rotate(90deg)';
    } else if (playerSelection = 'SCISSORS') {

        // If the selected element is already selected, restart the animation
        if (scissorsIconPlayer.style.transform == 'scale(1.25) rotate(90deg)') {
            scissorsIconPlayer.style.transform = 'scale(0.8) rotate(90deg)';
            setTimeout(() => {
                scissorsIconPlayer.style.transform = 'scale(1.25) rotate(90deg)';
            }, 100);
        } else {
            scissorsIconPlayer.style.transform = 'scale(1.25) rotate(90deg)';
        }
        rockIconPlayer.style.transform = 'scale(1)';
        paperIconPlayer.style.transform = 'scale(1)';
    }
    // Computer
    if (computerSelection == 'ROCK') {

        // If the selected element is already selected, restart the animation
        if (rockIconComputer.style.transform == 'scale(1.25)') {
            rockIconComputer.style.transform = 'scale(0.8)';
            setTimeout(() => {
                rockIconComputer.style.transform = 'scale(1.25)';
            }, 100);
        } else {
            rockIconComputer.style.transform = 'scale(1.25)';
        }
        paperIconComputer.style = 'transform: scale(1);';
        scissorsIconComputer.style = 'transform: scale(1) rotate(90deg);';
    } else if (computerSelection == 'PAPER') {

        // If the selected element is already selected, restart the animation
        if (paperIconComputer.style.transform == 'scale(1.25)') {
            paperIconComputer.style.transform = 'scale(0.8)';
            setTimeout(() => {
                paperIconComputer.style.transform = 'scale(1.25)';
            }, 100);
        } else {
            paperIconComputer.style.transform = 'scale(1.25)';
        }
        rockIconComputer.style = 'transform: scale(1);';
        scissorsIconComputer.style = 'transform: scale(1) rotate(90deg);';
    } else if (computerSelection = 'SCISSORS') {

        // If the selected element is already selected, restart the animation
        if (scissorsIconComputer.style.transform == 'scale(1.25) rotate(90deg)') {
            scissorsIconComputer.style.transform = 'scale(0.8) rotate(90deg)';
            setTimeout(() => {
                scissorsIconComputer.style.transform = 'scale(1.25) rotate(90deg)';
            }, 100);
        } else {
            scissorsIconComputer.style.transform = 'scale(1.25) rotate(90deg)';
        }
        rockIconComputer.style = 'transform: scale(1);';
        paperIconComputer.style = 'transform: scale(1);';
    }
}

// Function that constantly checks the score of the game. If there is a winner, it will end the game immediately
function endGame() {
    if (computer == 5 || player == 5) {
        setTimeout(() => {
            playerFinalResults.classList.add('show');
            computerFinalResults.classList.add('show');
        }, 500)
        buttonsContainer.style = 'pointer-events:none';
        if (computer > player) {
            playerFinalResults.firstElementChild.textContent = 'Loser';
            computerFinalResults.firstElementChild.textContent = 'Winner';
        } else if (computer < player) {
            playerFinalResults.firstElementChild.textContent = 'Winner';
            computerFinalResults.firstElementChild.textContent = 'Loser';
        } else {
            playerFinalResults.firstElementChild.textContent = 'Tie';
            computerFinalResults.firstElementChild.textContent = 'Tie';
        }
    };
}

// Function that runs when restartButton is clicked. It resets all the information regarding the current game and starts
// a new one with fresh values
function restartGame() {
    computer = 0;
    player = 0;
    gameInfo.textContent = 'Select your weapon';
    computerScore.textContent = `${computer}`;
    playerScore.textContent = `${player}`;
    buttonsContainer.style = 'pointer-events: auto'
    rockIconPlayer.style = 'transform: scale(1);';
    paperIconPlayer.style = 'transform: scale(1);';
    scissorsIconPlayer.style = 'transform: scale(1) rotate(90deg);';
    rockIconComputer.style = 'transform: scale(1);';
    paperIconComputer.style = 'transform: scale(1);';
    scissorsIconComputer.style = 'transform: scale(1) rotate(90deg);';
    setTimeout(() => {
        playerFinalResults.classList.remove('show');
        computerFinalResults.classList.remove('show');
    }, 300)
}



/* Console program

let computer = 0;
let player = 0;


function convertPlayerChoice() {
    let choice = prompt('Rock, Paper or Scissors?');
    if (choice != null) {
        return choice.toUpperCase();
    } else {
        return null;
    }
}

function checkPlayerChoice() {
    let choice = convertPlayerChoice();
    while (choice !== 'ROCK' && choice !== 'PAPER' && choice !== 'SCISSORS' && choice !== null) {
        alert('Please enter a correct value');
        return checkPlayerChoice();
    }
    return choice;
}

function startGame() {

    computer = 0;
    player = 0;

    for (let i = 0; i < 5; i++) {

        const playerSelection = checkPlayerChoice();
        const computerSelection = getComputerChoice();

        console.log(playRound(playerSelection, computerSelection));

        if (playerSelection !== null) {
            console.log(`Computer: ${computer} | Player: ${player}`);
        } else {
            computer = null;
            player = null;
            break;
        }
    }

    if (computer == null && player == null) {
        return;
    } else if (computer == player) {
        return console.log("\nYou both have the same score, I recommend playing another game to decide the winner. Type 'startGame()' in the console to begin. Have fun!\n\n")
    } else if (computer > player) {
        return console.log("\nYou lost the game, the computer has a higher overall score. Type 'startGame()' in the console to play again.\n\n")
    } else {
        return console.log("\nLooks like you won the game, as you have the higher overall score. Good job! Type 'startGame()' in the console to play again.\n\n")
    }
} */
