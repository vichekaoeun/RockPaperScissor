function getComputerChoice() {
    let choice = Math.floor(Math.random() * 3);
    if (choice === 1) {
        console.log("Rock");
        return "Rock";
    }
    else if (choice === 2) {
        console.log("Paper");
        return "Paper";
    }
    else {
        console.log("Scissors");
        return "Scissors";
    }
}

function playRound(playerSelection, computerSelection) {
    let p_choice = playerSelection.toLowerCase();
    switch (playerSelection) {
        case "rock":
            if (computerSelection === "Scissors") {
                return "You Win! Rock beats Scissors";
            }
            else if (computerSelection === "Paper") {
                return "You Lose! Paper beats Rock";
            }
            else {
                return "It's a tie!";
            }
        case "paper":
            if (computerSelection === "Scissors") {
                return "You Lose! Scissors beats Paper";
            }
            else if (computerSelection === "Rock") {
                return "You Win! Paper beats Rock";
            }
            else {
                return "It's a tie!";
            }
        case "scissor":
            if (computerSelection === "Rock") {
                return "You Lose! Rock beats Scissors";
            }
            else if (computerSelection === "Paper") {
                return "You Win! Scissors beat Paper";
            }
            else {
                return "It's a tie!";
            }
    }

}

const playerSelection = prompt("Enter rock, paper or scissors");
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));