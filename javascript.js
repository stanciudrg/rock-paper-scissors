function getComputerChoice() {
    const choices = ['ROCK', 'PAPER', 'SCISSORS']
    return (choices[Math.floor(choices.length * Math.random())]);
}

function checkPlayerChoice() {
    let choice = prompt('Rock, Paper or Scissors?').toUpperCase();
    while (choice !== 'ROCK' && choice !== 'PAPER' && choice !== 'SCISSORS' && choice !== null) {
        alert('Please enter a correct value');
        return checkPlayerChoice();
    }
    return choice;
}

function playRound(playerSelection, computerSelection) {

    if (playerSelection === computerSelection) {
        return `You both chose ${playerSelection}, it's a tie!`;
    } else if (playerSelection === 'ROCK' && computerSelection === 'PAPER') {
        return `You chose ${playerSelection} and the computer chose ${computerSelection}. PAPER beats ROCK. You lost!`;
    } else if (playerSelection === 'ROCK' && computerSelection === 'SCISSORS') {
        return `You chose ${playerSelection} and the computer chose ${computerSelection}. ROCK beats SCISSORS. You won!`;
    } else if (playerSelection === 'PAPER' && computerSelection === 'ROCK') {
        return `You chose ${playerSelection} and the computer chose ${computerSelection}. PAPER beats ROCK. You won!`;
    } else if (playerSelection === 'PAPER' && computerSelection === 'SCISSORS') {
        return `You chose ${playerSelection} and the computer chose ${computerSelection}. SCISSORS beats PAPER. You lost!`;
    } else if (playerSelection === 'SCISSORS' && computerSelection === 'ROCK') {
        return `You chose ${playerSelection} and the computer chose ${computerSelection}. ROCK beats SCISSORS. You lost!`;
    } else if (playerSelection === 'SCISSORS' && computerSelection === 'PAPER') {
        return `You chose ${playerSelection} and the computer chose ${computerSelection}. SCISSORS beats PAPER. You won!`;
    }
}

function startGame() {

    for (i = 0; i < 5; i++) {
        const playerSelection = checkPlayerChoice();
        const computerSelection = getComputerChoice();
        console.log(playRound(playerSelection, computerSelection));
    }
}
