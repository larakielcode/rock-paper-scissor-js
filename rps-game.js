// Define global vars
let humanScore = 0;
let computerScore = 0;

// Define functions for choices
let getComputerChoice = () => Math.random();
const buttonsMenu = document.querySelector("#buttons");
const resultContainer = document.querySelector("#results");
const commentsPara = document.createElement("p");
const resultsPara = document.createElement("p");


buttonsMenu.addEventListener("click", (event) => {
    let target = event.target;

    switch (target.id) {
        case 'rock':
            playRound(target.id, parseFloat(getComputerChoice().toFixed(3)));
            checkWinner();
            break;
        case 'paper':
            playRound(target.id, parseFloat(getComputerChoice().toFixed(3)));
            checkWinner();
            break;
        case 'scissor':
            playRound(target.id, parseFloat(getComputerChoice().toFixed(3)));
            checkWinner();
            break;
    }
});

function resetScore() {
    humanScore = 0;
    computerScore = 0;
}

function checkWinner() {
    if (humanScore === 5) {
        resetScore();
        commentsPara.textContent = "You win in a game of race to 5!"
        commentsPara.style.color = "red";
        resultContainer.appendChild(commentsPara);
    }
    if (computerScore === 5) {
        resetScore();
        commentsPara.textContent = "Computer wins in a game of race to 5!"
        commentsPara.style.color = "red";
        resultContainer.appendChild(commentsPara);
    }
    if (computerScore === 5 && humanScore === 5) {
        resetScore();
        commentsPara.textContent = "Its a draw match!"
        commentsPara.style.color = "red";
        resultContainer.appendChild(commentsPara);
    }
}

function playRound(humanChoice, computerChoice) {
    if ((computerChoice <= .333) && (humanChoice == "rock")) {
        computerScore++;
        humanScore++;
        commentsPara.textContent = "Its a Draw! Both are rock."
        resultsPara.textContent = "Computer Score : " + computerScore + " Your Score : " + humanScore;
        resultContainer.appendChild(commentsPara);
        resultContainer.appendChild(resultsPara);
    } else if ((computerChoice <= .333) && (humanChoice == "paper")) {
        humanScore++;
        commentsPara.textContent = "You win! Paper beats rock.";
        resultsPara.textContent = "Computer Score : " + computerScore + " Your Score : " + humanScore;
        resultContainer.appendChild(commentsPara);
        resultContainer.appendChild(resultsPara);
    } else if ((computerChoice <= .333) && (humanChoice == "scissor")) {
        computerScore++;
        commentsPara.textContent = "You Lose! Rock beats scissor.";
        resultsPara.textContent = "Computer Score : " + computerScore + " Your Score : " + humanScore;
        resultContainer.appendChild(commentsPara);
        resultContainer.appendChild(resultsPara);
    }
    if ((computerChoice >= .334 && computerChoice <= .666) && (humanChoice == "rock")) {
        computerScore++;
        commentsPara.textContent = "You Lose. Paper beats rock.";
        resultsPara.textContent = "Computer Score : " + computerScore + " Your Score : " + humanScore;
        resultContainer.appendChild(commentsPara);
        resultContainer.appendChild(resultsPara);
    } else if ((computerChoice >= .334 && computerChoice <= .666) && (humanChoice == "paper")) {
        computerScore++;
        humanScore++;
        commentsPara.textContent = "Its a draw! Both are paper.";
        resultsPara.textContent = "Computer Score : " + computerScore + " Your Score : " + humanScore;
        resultContainer.appendChild(commentsPara);
        resultContainer.appendChild(resultsPara);
    } else if ((computerChoice >= .334 && computerChoice <= .666) && (humanChoice == "scissor")) {
        humanScore++;
        commentsPara.textContent = "You Win. Scissor beats paper.";
        resultsPara.textContent = "Computer Score : " + computerScore + " Your Score : " + humanScore;
        resultContainer.appendChild(commentsPara);
        resultContainer.appendChild(resultsPara);
    }
    if ((computerChoice >= .667 && computerChoice <= 1) && (humanChoice == "rock")) {
        humanScore++;
        commentsPara.textContent = "You Win. Rock beats scissor.";
        resultsPara.textContent = "Computer Score : " + computerScore + " Your Score : " + humanScore;
        resultContainer.appendChild(commentsPara);
        resultContainer.appendChild(resultsPara);
    } else if ((computerChoice >= .667 && computerChoice <= 1) && (humanChoice == "paper")) {
        computerScore++;
        commentsPara.textContent = "You Lose. Scissor beats paper.";
        resultsPara.textContent = "Computer Score : " + computerScore + " Your Score : " + humanScore;
        resultContainer.appendChild(commentsPara);
        resultContainer.appendChild(resultsPara);
    } else if ((computerChoice >= .667 && computerChoice <= 1) && (humanChoice == "scissor")) {
        computerScore++;
        humanScore++;
        commentsPara.textContent = "Its a draw! Both are scissor.";
        resultsPara.textContent = "Computer Score : " + computerScore + " Your Score : " + humanScore;
        resultContainer.appendChild(commentsPara);
        resultContainer.appendChild(resultsPara);
    }
    return;
}
