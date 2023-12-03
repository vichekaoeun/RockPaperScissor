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

    const rock = document.createElement('button');
    const paper = document.createElement('button');
    const scissor = document.createElement('button');

    rock.textContent = "Rock";
    paper.textContent = "Paper";
    scissor.textContent = "Scissor";

    const body = document.querySelector('.container');
    body.appendChild(rock);
    body.appendChild(paper);
    body.appendChild(scissor);

    const display = document.querySelector('.result');

    rock.addEventListener('click', () => {
        let result = playRound('rock', getComputerChoice());
        updateScores(result);
    });
    paper.addEventListener('click', () => {
        let result = playRound('paper', getComputerChoice());
        updateScores(result);
    });
    scissor.addEventListener('click', () => {
        let result = playRound('scissor', getComputerChoice());
        updateScores(result);
    });

    function updateScores(result) {
        if (result === 1) {
            p_score++;
        } else if (result === -1) {
            c_score++;
        }


        if (p_score >= 5 && c_score < p_score) {
            display.textContent = "You Win!";
            console.log(display.textContent);

        } else if (c_score >= 5 && p_score < c_score) {
            display.textContent = "You Lose!";
            console.log(display.textContent);

        } else {
            display.textContent = "Continue";
            console.log(display.textContent);

        }
    }

}


console.log(game());