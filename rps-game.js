// Define global vars
let humanScore = 0;
let computerScore = 0;

// Define functions for choices
let getComputerChoice = () => Math.random();
let getHumanChoice = () => userInput = prompt("Enter your choice [rock | paper | scissor] :");

/* 
    DEFINE the numbers for the choices 
    
    0 -> .333 Rock
    .334 -> .666 Paper
    .667 -> 1 Scissor

*/

function playRound(humanChoice, computerChoice) {
    if ((computerChoice <= .333) && (humanChoice == "rock")) {
        console.log("Its a draw! Both are rock");
    } else if ((computerChoice <= .333) && (humanChoice == "paper")) {
        console.log("You win! Paper beats rock.");
        humanScore++;
    } else if ((computerChoice <= .333) && (humanChoice == "scissor")) {
        console.log("You Lose! Rock beats scissor.");
        computerScore++;
    }
    if ((computerChoice >= .334 && computerChoice <= .666) && (humanChoice == "rock")) {
        console.log("You Lose. Paper beats rock.");
        computerScore++;
    } else if ((computerChoice >= .334 && computerChoice <= .666) && (humanChoice == "paper")) {
        console.log("Its a draw! Both are paper.");
    } else if ((computerChoice >= .334 && computerChoice <= .666) && (humanChoice == "scissor")) {
        console.log("You Win. Scissor beats paper.");
        humanScore++;
    }
    if ((computerChoice >= .667 && computerChoice <= 1) && (humanChoice == "rock")) {
        console.log("You Win. Rock beats scissor.");
        humanScore++;
    } else if ((computerChoice >= .667 && computerChoice <= 1) && (humanChoice == "paper")) {
        console.log("You Lose. Scissor beats paper.");
        computerScore++;
    } else if ((computerChoice >= .667 && computerChoice <= 1) && (humanChoice == "scissor")) {
        console.log("Its a draw! Both are scissor.");
    }
    return;
}

function playGame(numOfGames) {
    for (let index = 1; index <= numOfGames; index++) {
        const humanChoice = getHumanChoice();
        const computerChoice = parseFloat(getComputerChoice().toFixed(3));

        playRound(humanChoice.toLowerCase(), computerChoice);
    }
}

function getWinner(humansc, computersc) {
    if (computersc > humansc) {
        return "Computer Wins in a 5 game rounds!"
    } else if (computersc < humansc) {
        return "You Win in a 5 game rounds!"
    } else {
        return "It was a draw on a 5 game rounds!"
    }
}

playGame(5);

console.log("Computer Score: " + computerScore);
console.log("Your Score : " + humanScore);

console.log(getWinner(humanScore, computerScore));