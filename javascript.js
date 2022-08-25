function getComputerChoice() {
    const choices = ['Rock', 'Papper', 'Scissors']
    return (choices[Math.floor(choices.length * Math.random())]);
}

function getPlayerChoice() {
    return prompt('Rock, Papper or Scissors?')
}