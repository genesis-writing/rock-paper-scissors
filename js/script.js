/* 
This function randomly returns 'rock, 'paper' or 'scissors' from an array.
It represents the choice made by the opponent, the computer.
*/

function computerPlay() {
    const gameOptions = ['rock', 'paper', 'scissors'];
    let computerOption = gameOptions[Math.floor(Math.random() * gameOptions.length)];
    console.log(computerOption)
}

computerPlay()