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
        console.log("Human win! Paper beats rock.");
    } else if ((computerChoice <= .333) && (humanChoice == "scissor")) {
        console.log("Computer win! Rock beats scissor.");
    }
    if ((computerChoice >= .334 && computerChoice <= .666) && (humanChoice == "rock")) {
        console.log("Computer Win. Paper beats rock.");
    } else if ((computerChoice >= .334 && computerChoice <= .666) && (humanChoice == "paper")) {
        console.log("Its a draw! Both are paper.");
    } else if ((computerChoice >= .334 && computerChoice <= .666) && (humanChoice == "scissor")) {
        console.log("Human Win. Scissor beats paper.");
    }
    if ((computerChoice >= .667 && computerChoice <= 1) && (humanChoice == "rock")) {
        console.log("Human Win. Rock beats scissor.");
    } else if ((computerChoice >= .667 && computerChoice <= 1) && (humanChoice == "paper")) {
        console.log("Computer Win. Scissor beats paper.");
    } else if ((computerChoice >= .667 && computerChoice <= 1) && (humanChoice == "scissor")) {
        console.log("Its a draw! Both are scissor.");
    }
}

const humanChoice = getHumanChoice();
const computerChoice = parseFloat(getComputerChoice().toFixed(3));

playRound(humanChoice.toLowerCase(), computerChoice);
