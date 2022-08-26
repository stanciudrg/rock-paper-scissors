console.log("\nWelcome to Rock, Paper and Scissors! Type 'startGame()' in the console to start playing.\n\n")
let computer = 0;
let player = 0;

function getComputerChoice() {
    const choices = ['ROCK', 'PAPER', 'SCISSORS']
    return (choices[Math.floor(choices.length * Math.random())]);
}

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

function playRound(playerSelection, computerSelection) {

    if (playerSelection === computerSelection) {
        return `\nYou both chose ${playerSelection}, it's a tie!\n\n`;
    } else if (playerSelection === 'ROCK' && computerSelection === 'PAPER') {
        computer++;
        return `\nYou chose ${playerSelection} and the computer chose ${computerSelection}. \nPAPER beats ROCK. You lost!\n\n`;
    } else if (playerSelection === 'ROCK' && computerSelection === 'SCISSORS') {
        player++;
        return `\nYou chose ${playerSelection} and the computer chose ${computerSelection}. \nROCK beats SCISSORS. You won!\n\n`;
    } else if (playerSelection === 'PAPER' && computerSelection === 'ROCK') {
        player++;
        return `\nYou chose ${playerSelection} and the computer chose ${computerSelection}. \nPAPER beats ROCK. You won!\n\n`;
    } else if (playerSelection === 'PAPER' && computerSelection === 'SCISSORS') {
        computer++;
        return `\nYou chose ${playerSelection} and the computer chose ${computerSelection}. \nSCISSORS beats PAPER. You lost!\n\n`;
    } else if (playerSelection === 'SCISSORS' && computerSelection === 'ROCK') {
        computer++;
        return `\nYou chose ${playerSelection} and the computer chose ${computerSelection}. \nROCK beats SCISSORS. You lost!\n\n`;
    } else if (playerSelection === 'SCISSORS' && computerSelection === 'PAPER') {
        player++;
        return `\nYou chose ${playerSelection} and the computer chose ${computerSelection}. \nSCISSORS beats PAPER. You won!\n\n`;
    } else {
        return "\nYou cancelled the game. Enter 'startGame()' in the console if you want to play again.\n\n";
    }
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
}
