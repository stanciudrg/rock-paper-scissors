// UI program

// Home

let startGameContainer = document.querySelector(".start-game-container");
let startButton = document.querySelector(".start-game-button");
let gameContainer = document.querySelector(".game-container");


// Replace Start Game button with loading animation
startButton.addEventListener('click', () => {
    startButton.classList.add('hide');
    setTimeout(() => {
        startGameContainer.style.display = 'none';
        startButton.style.display = 'none';
        gameContainer.style.display = 'flex';
        // Adds transition for Game Container
        setTimeout(() => {
            gameContainer.classList.add('show');
        });
    }, 300)
})

// Game

// Internal game variables
let computer = 0;
let player = 0;
let playerSelection;
let computerSelection;

// Player and computer icons container
let buttonsContainer = document.querySelector('.game-buttons');

// Player icons
let rockIconPlayer = document.querySelector('.rock-icon-player');
let paperIconPlayer = document.querySelector('.paper-icon-player');
let scissorsIconPlayer = document.querySelector('.scissors-icon-player')

// Computer icons
let rockIconComputer = document.querySelector('.rock-icon-computer');
let paperIconComputer = document.querySelector('.paper-icon-computer');
let scissorsIconComputer = document.querySelector('.scissors-icon-computer');

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
    // If the choice is already selected, reset the animation
    if (rockIconPlayer.classList.contains('selected')) {
        rockIconPlayer.classList.remove('selected');
        setTimeout(() => {
            rockIconPlayer.classList.add('selected');
        }, 200);
    } else {
        rockIconPlayer.classList.add('selected');
    }
    paperIconPlayer.classList.remove('selected');
    scissorsIconPlayer.classList.remove('selected');
    playRound(playerSelection, computerSelection);
});

paperIconPlayer.addEventListener('click', () => {
    playerSelection = 'PAPER';
    // If the choice is already selected, reset the animation
    if (paperIconPlayer.classList.contains('selected')) {
        paperIconPlayer.classList.remove('selected');
        setTimeout(() => {
            paperIconPlayer.classList.add('selected');
        }, 200);
    } else {
        paperIconPlayer.classList.add('selected');
    }
    rockIconPlayer.classList.remove('selected');
    scissorsIconPlayer.classList.remove('selected');
    playRound(playerSelection, computerSelection);
});

scissorsIconPlayer.addEventListener('click', () => {
    playerSelection = 'SCISSORS';
    // If the choice is already selected, reset the animation
    if (scissorsIconPlayer.classList.contains('selected')) {
        scissorsIconPlayer.classList.remove('selected');
        setTimeout(() => {
            scissorsIconPlayer.classList.add('selected');
        }, 200);
    } else {
        scissorsIconPlayer.classList.add('selected');
    }
    rockIconPlayer.classList.remove('selected');
    paperIconPlayer.classList.remove('selected');
    playRound(playerSelection, computerSelection);
});

restartButton.addEventListener('click', restartGame);

// Functions

// Function that generates a random choice for the computer
function getComputerChoice() {
    const choices = ['ROCK', 'PAPER', 'SCISSORS']
    return (choices[Math.floor(choices.length * Math.random())]);
}

// Function that compares the choice of the player and computer and displays the score. It also animates the choices of the computer.
function playRound(playerSelection, computerSelection) {

    computerSelection = getComputerChoice();

    // Generate animations based on the choice of the computer.
    if (computerSelection === 'ROCK') {
        // If the choice is already selected, reset the animation
        if (rockIconComputer.classList.contains('selected')) {
            rockIconComputer.classList.remove('selected');
            setTimeout(() => {
                rockIconComputer.classList.add('selected');
            }, 200);
        } else {
            rockIconComputer.classList.add('selected');
        }
        paperIconComputer.classList.remove('selected');
        scissorsIconComputer.classList.remove('selected');
    } else if (computerSelection === 'PAPER') {
        // If the choice is already selected, reset the animation
        if (paperIconComputer.classList.contains('selected')) {
            paperIconComputer.classList.remove('selected');
            setTimeout(() => {
                paperIconComputer.classList.add('selected');
            }, 200);
        } else {
            paperIconComputer.classList.add('selected');
        }
        rockIconComputer.classList.remove('selected');
        scissorsIconComputer.classList.remove('selected');
    } else {
        // If the choice is already selected, reset the animation
        if (scissorsIconComputer.classList.contains('selected')) {
            scissorsIconComputer.classList.remove('selected');
            setTimeout(() => {
                scissorsIconComputer.classList.add('selected');
            }, 200);
        } else {
            scissorsIconComputer.classList.add('selected');
        }
        rockIconComputer.classList.remove('selected');
        paperIconComputer.classList.remove('selected');
    }

    // Compare the choices of the computer vs player and update the score along with gameInfo.
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
    // Run the endGame function after each round to check the score and end the game if necessary.
    endGame();
}

// Function that constantly checks the score of the game. If it finds a winner, it will end the game immediately.
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
    buttonsContainer.style = 'pointer-events: auto'
    computer = 0;
    player = 0;
    rockIconPlayer.classList.remove('selected');
    paperIconPlayer.classList.remove('selected');
    scissorsIconPlayer.classList.remove('selected');
    rockIconComputer.classList.remove('selected');
    paperIconComputer.classList.remove('selected');
    scissorsIconComputer.classList.remove('selected');
    gameInfo.textContent = 'Select your weapon';
    computerScore.textContent = `${computer}`;
    playerScore.textContent = `${player}`;
    setTimeout(() => {
        playerFinalResults.classList.remove('show');
        computerFinalResults.classList.remove('show');
    }, 500)
}