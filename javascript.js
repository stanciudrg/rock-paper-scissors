function getComputerChoice() {
    const choices = ['Rock', 'Papper', 'Scissors']
    return (choices[Math.floor(choices.length * Math.random())]);
}