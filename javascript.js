function getComputerChoice() {
    const choices = ['ROCK', 'PAPPER', 'SCISSORS']
    return (choices[Math.floor(choices.length * Math.random())]);
}

function getPlayerChoice() {
    return prompt('Rock, Papper or Scissors?').toUpperCase();
}

const playerSelection = getPlayerChoice()
const computerSelection = getComputerChoice();