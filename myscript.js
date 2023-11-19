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
    switch (p_choice) {
        case "rock":
            if (computerSelection === "Scissors") {
                return 1;
            }
            else if (computerSelection === "Paper") {
                return -1;
            }
            else {
                return 0;
            }
        case "paper":
            if (computerSelection === "Scissors") {
                return -1;
            }
            else if (computerSelection === "Rock") {
                return 1;
            }
            else {
                return 0;
            }
        case "scissor":
            if (computerSelection === "Rock") {
                return -1;
            }
            else if (computerSelection === "Paper") {
                return 1;
            }
            else {
                return 0;
            }
    }

}

function game() {
    let c_score = 0;
    let p_score = 0;
    for (i = 0; i < 5; i++) {
        const playerSelection = prompt("Enter rock, paper or scissors");
        const computerSelection = getComputerChoice();
        let point = playRound(playerSelection, computerSelection)
        if (point === 1) {
            p_score++;
        }
        else if (point === -1) {
            c_score++;
        }
    }
    if (p_score > c_score) {
        return "You Win!";
    }
    else {
        return "You Lose!";
    }

}


console.log(game());