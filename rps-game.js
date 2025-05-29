// Define functions for choices
function startGame() {

    const score = []; // store the score of the game

    let humanChoice;
    let getComputerChoice;
    let playGame;
    const buttonsMenu = document.querySelector("#buttons");
    const resultContainer = document.querySelector("#results");
    const commentsPara = document.createElement("p");
    const resultsPara = document.createElement("p");

    buttonsMenu.addEventListener("click", (event) => {
        let target = event.target;

        resultContainer.appendChild(commentsPara);
        resultContainer.appendChild(resultsPara);

        switch (target.id) {
            case 'rock':
                humanChoice = new Entry('rock', 'human');
                getComputerChoice = Entry.getComputerChoice();
                console.log(`Your choice is rock`);
                console.log(`Computer choice is`, getComputerChoice.choice);
                playGame = Entry.playRound(humanChoice.choice, getComputerChoice.choice);
                console.log(playGame);
                break;
            case 'paper':
                humanChoice = new Entry('paper', 'human');
                getComputerChoice = Entry.getComputerChoice();
                console.log(`Your choice is paper`);
                console.log(`Computer choice is`, getComputerChoice.choice);
                playGame = Entry.playRound(humanChoice.choice, getComputerChoice.choice);
                console.log(playGame);
                break;
            case 'scissor':
                humanChoice = new Entry('scissor', 'human');
                getComputerChoice = Entry.getComputerChoice();
                console.log(`Your choice is scissors`);
                console.log(`Computer choice is`, getComputerChoice.choice);
                playGame = Entry.playRound(humanChoice.choice, getComputerChoice.choice);
                console.log(playGame);
                break;
        }
    });

} // end startGame();

class Entry {

    constructor(choice, playerName) {
        this.choice = choice;
        this.player = playerName;
    }

    static randomChoice(arr) {
        const choiceIndex = Math.floor(Math.random() * arr.length);
        return arr[choiceIndex];
    }

    static getComputerChoice() {
        const choices = [
            'rock',
            'paper',
            'scissor',
        ];

        const computerChoice = this.randomChoice(choices);
        return new Entry(computerChoice, 'computer');
    }

    static playRound(humanChoice, computerChoice) {
        if ((computerChoice == "rock") && (humanChoice == "rock")) {
            return `both;It's a Draw! Both are ROCK!`;
            /* computerScore++;
            humanScore++; */
            /* commentsPara.textContent = "Its a Draw! Both are rock."
            resultsPara.textContent = "Computer Score : " + computerScore + " Your Score : " + humanScore;
            resultContainer.appendChild(commentsPara);
            resultContainer.appendChild(resultsPara); */
        } else if (computerChoice == "rock" && humanChoice == "paper") {
            return `human;You Win! PAPER beats ROCK`;
            /* humanScore++;
            commentsPara.textContent = "You win! Paper beats rock.";
            resultsPara.textContent = "Computer Score : " + computerScore + " Your Score : " + humanScore;
            resultContainer.appendChild(commentsPara);
            resultContainer.appendChild(resultsPara); */
        } else if (computerChoice == "rock" && humanChoice == "scissor") {
            return `computer;You Lose! ROCK beats SCISSORS`;
            /* computerScore++;
            commentsPara.textContent = "You Lose! Rock beats scissor.";
            resultsPara.textContent = "Computer Score : " + computerScore + " Your Score : " + humanScore;
            resultContainer.appendChild(commentsPara);
            resultContainer.appendChild(resultsPara); */
        }
        if (computerChoice == "paper" && humanChoice == "rock") {
            return `computer;You Lose! PAPER beats ROCK`;
            /* computerScore++;
            commentsPara.textContent = "You Lose. Paper beats rock.";
            resultsPara.textContent = "Computer Score : " + computerScore + " Your Score : " + humanScore;
            resultContainer.appendChild(commentsPara);
            resultContainer.appendChild(resultsPara); */
        } else if (computerChoice == "paper" && humanChoice == "paper") {
            return `BOTH;It's a DRAW! Both are PAPER`;
            /* computerScore++;
            humanScore++;
            commentsPara.textContent = "Its a draw! Both are paper.";
            resultsPara.textContent = "Computer Score : " + computerScore + " Your Score : " + humanScore;
            resultContainer.appendChild(commentsPara);
            resultContainer.appendChild(resultsPara); */
        } else if (computerChoice == "paper" && humanChoice == "scissor") {
            return `human;You Win! SCISSORS beats PAPER`;
            /* humanScore++;
            commentsPara.textContent = "You Win. Scissor beats paper.";
            resultsPara.textContent = "Computer Score : " + computerScore + " Your Score : " + humanScore;
            resultContainer.appendChild(commentsPara);
            resultContainer.appendChild(resultsPara); */
        }
        if (computerChoice == "scissor" && humanChoice == "rock") {
            return `human;You Win! ROCK beats SCISSORS`;
            /* humanScore++;
            commentsPara.textContent = "You Win. Rock beats scissor.";
            resultsPara.textContent = "Computer Score : " + computerScore + " Your Score : " + humanScore;
            resultContainer.appendChild(commentsPara);
            resultContainer.appendChild(resultsPara); */
        } else if (computerChoice == "scissor" && humanChoice == "paper") {
            return `computer;You Lose! SCISSORS beats PAPER`;
            /* computerScore++;
            commentsPara.textContent = "You Lose. Scissor beats paper.";
            resultsPara.textContent = "Computer Score : " + computerScore + " Your Score : " + humanScore;
            resultContainer.appendChild(commentsPara);
            resultContainer.appendChild(resultsPara); */
        } else if (computerChoice == "scissor" && humanChoice == "scissor") {
            return `BOTH;It's a DRAW! Both are SCISSORS`;
            /* computerScore++;
            humanScore++;
            commentsPara.textContent = "Its a draw! Both are scissor.";
            resultsPara.textContent = "Computer Score : " + computerScore + " Your Score : " + humanScore;
            resultContainer.appendChild(commentsPara);
            resultContainer.appendChild(resultsPara); */
        }
    }
}

startGame();