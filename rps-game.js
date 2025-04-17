// Define global vars
let humanScore = 0;
let computerScore = 0;

// Define functions for choices
let getComputerChoice = () => Math.random();
//let getHumanChoice = () => userInput = prompt("Enter your choice [rock | paper | scissor] :");
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

function checkWinner() {
    if (humanScore === 5) {
        commentsPara.textContent = "You win in a game of race to 5!"
        commentsPara.style.color = "red";
        resultContainer.appendChild(commentsPara);
    }
    if (computerScore === 5) {
        commentsPara.textContent = "Computer wins in a game of race to 5!"
        commentsPara.style.color = "red";
        resultContainer.appendChild(commentsPara);
    }
    if (computerScore === 5 && humanScore === 5) {
        commentsPara.textContent = "Its a draw match!"
        commentsPara.style.color = "red";
        resultContainer.appendChild(commentsPara);
    }
}

function playRound(humanChoice, computerChoice) {
    if ((computerChoice <= .333) && (humanChoice == "rock")) {
        //console.log("Its a draw! Both are rock");
        computerScore++;
        humanScore++;
        commentsPara.textContent = "Its a Draw! Both are rock."
        resultsPara.textContent = "Computer Score : " + computerScore + " Your Score : " + humanScore;
        resultContainer.appendChild(commentsPara);
        resultContainer.appendChild(resultsPara);
    } else if ((computerChoice <= .333) && (humanChoice == "paper")) {
        //console.log("You win! Paper beats rock.");
        humanScore++;
        commentsPara.textContent = "You win! Paper beats rock.";
        resultsPara.textContent = "Computer Score : " + computerScore + " Your Score : " + humanScore;
        resultContainer.appendChild(commentsPara);
        resultContainer.appendChild(resultsPara);
    } else if ((computerChoice <= .333) && (humanChoice == "scissor")) {
        //console.log("You Lose! Rock beats scissor.");
        computerScore++;
        commentsPara.textContent = "You Lose! Rock beats scissor.";
        resultsPara.textContent = "Computer Score : " + computerScore + " Your Score : " + humanScore;
        resultContainer.appendChild(commentsPara);
        resultContainer.appendChild(resultsPara);
    }
    if ((computerChoice >= .334 && computerChoice <= .666) && (humanChoice == "rock")) {
        //console.log("You Lose. Paper beats rock.");
        computerScore++;
        commentsPara.textContent = "You Lose. Paper beats rock.";
        resultsPara.textContent = "Computer Score : " + computerScore + " Your Score : " + humanScore;
        resultContainer.appendChild(commentsPara);
        resultContainer.appendChild(resultsPara);
    } else if ((computerChoice >= .334 && computerChoice <= .666) && (humanChoice == "paper")) {
        //console.log("Its a draw! Both are paper.");
        computerScore++;
        humanScore++;
        commentsPara.textContent = "Its a draw! Both are paper.";
        resultsPara.textContent = "Computer Score : " + computerScore + " Your Score : " + humanScore;
        resultContainer.appendChild(commentsPara);
        resultContainer.appendChild(resultsPara);
    } else if ((computerChoice >= .334 && computerChoice <= .666) && (humanChoice == "scissor")) {
        //console.log("You Win. Scissor beats paper.");
        humanScore++;
        commentsPara.textContent = "You Win. Scissor beats paper.";
        resultsPara.textContent = "Computer Score : " + computerScore + " Your Score : " + humanScore;
        resultContainer.appendChild(commentsPara);
        resultContainer.appendChild(resultsPara);
    }
    if ((computerChoice >= .667 && computerChoice <= 1) && (humanChoice == "rock")) {
        //console.log("You Win. Rock beats scissor.");
        humanScore++;
        commentsPara.textContent = "You Win. Rock beats scissor.";
        resultsPara.textContent = "Computer Score : " + computerScore + " Your Score : " + humanScore;
        resultContainer.appendChild(commentsPara);
        resultContainer.appendChild(resultsPara);
    } else if ((computerChoice >= .667 && computerChoice <= 1) && (humanChoice == "paper")) {
        //console.log("You Lose. Scissor beats paper.");
        computerScore++;
        commentsPara.textContent = "You Lose. Scissor beats paper.";
        resultsPara.textContent = "Computer Score : " + computerScore + " Your Score : " + humanScore;
        resultContainer.appendChild(commentsPara);
        resultContainer.appendChild(resultsPara);
    } else if ((computerChoice >= .667 && computerChoice <= 1) && (humanChoice == "scissor")) {
        //console.log("Its a draw! Both are scissor.");
        computerScore++;
        humanScore++;
        commentsPara.textContent = "Its a draw! Both are scissor.";
        resultsPara.textContent = "Computer Score : " + computerScore + " Your Score : " + humanScore;
        resultContainer.appendChild(commentsPara);
        resultContainer.appendChild(resultsPara);
    }
    return;
}

/* function playGame(numOfGames) {
    for (let index = 1; index <= numOfGames; index++) {
        const humanChoice = getHumanChoice();
        const computerChoice = parseFloat(getComputerChoice().toFixed(3));

        playRound(humanChoice.toLowerCase(), computerChoice);
    }
} */

/* playGame(5); */

//console.log("Computer Score: " + computerScore);
//console.log("Your Score : " + humanScore);

//console.log(getWinner(humanScore, computerScore));