/* 
This function randomly returns 'rock, 'paper' or 'scissors' from an array.
It represents the choice made by the opponent, the computer.
*/

function computerPlay() {
    const gameOptions = ['rock', 'paper', 'scissors'];
    let computerOption = gameOptions[Math.floor(Math.random() * gameOptions.length)];
    return computerOption;
}

console.log(computerPlay())


/*
This function plays five rounds of rock paper scissors.
*/

function game() {
    playRound();
    playRound();
    playRound();
    playRound();
    playRound();
    
/*
This function plays a single round of rock paper scissors.
*/
    function playRound(playerSelection, computerSelection) {
        let playerOption = playerSelection.toLowerCase();
        let computerOption = computerSelection.toLowerCase();
    
        if ((playerOption == "rock") && (computerOption == "scissors")) {
            return ("You win! Rock beats scissors");
        } else if ((playerOption == 'paper') && (computerOption == 'rock')) {
            return ("You win! Paper beats rock");
        } else if ((playerOption == 'scissors') && (computerOption == 'paper')) {
            return ("You win! Scissors beat paper");
        } else if ((playerOption == 'scissors') && (computerOption == 'rock')) {
            return ("You lose! Rock beats scissors");
        } else if ((playerOption == 'rock') && (computerOption == 'paper')) {
            return ("You lose! Paper beats rock");
        } else if ((playerOption == 'paper') && (computerOption == 'scissors')) {
            return ("You lose! Scissors beat paper");
        } else if (playerOption == computerOption) {
            return ("It's a tie!");
        }
    }

}
