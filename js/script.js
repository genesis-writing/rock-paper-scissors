/* 
This function randomly returns 'rock, 'paper' or 'scissors' from an array.
It represents the choice made by the opponent, the computer.
*/

function computerPlay() {
    const gameOptions = ['rock', 'paper', 'scissors'];
    let computerOption = gameOptions[Math.floor(Math.random() * gameOptions.length)];
    return computerOption;
}

/*
This function plays a single round of rock paper scissors. TEST
*/
function playRound(playerSelection, computerSelection) {
    let playerOption = playerSelection.toLowerCase();

    if ((playerOption == "rock") && (computerSelection == "scissors")) {
        return "You win! Rock beats scissors";
    } else if ((playerOption == 'paper') && (computerSelection == 'rock')) {
        return "You win! Paper beats rock";
    } else if ((playerOption == 'scissors') && (computerSelection == 'paper')) {
        return "You win! Scissors beat paper";
    } else if ((playerOption == 'scissors') && (computerSelection == 'rock')) {
        return "You lose! Rock beats scissors";
    } else if ((playerOption == 'rock') && (computerSelection == 'paper')) {
        return "You lose! Paper beats rock";
    } else if ((playerOption == 'paper') && (computerSelection == 'scissors')) {
        return "You lose! Scissors beat paper";
    } else if (playerOption == computerSelection) {
        return "It's a tie!";
    }
}

/*
This function plays five rounds of rock paper scissors
It keeps score and reports the winner and loser at the end.
*/

function game( {
    
}

console.log(game());