// Define functions for choices
function startGame() {

    const score = [
        {
            'humanscore': 0,
            'computerscore': 0,
            'gamesPlayed': 0,
        }
    ]; // store the score of the game

    let humanChoice;
    let getComputerChoice;
    let playGame;
    let winner;
    const buttonsMenu = document.querySelector("#buttons");

    buttonsMenu.addEventListener("click", (event) => {
        let target = event.target;

        switch (target.id) {
            case 'rock':
                humanChoice = new Entry('rock', 'human');
                getComputerChoice = Entry.getComputerChoice();
                playGame = Entry.playRound(humanChoice.choice, getComputerChoice.choice);
                winner = Entry.getWinner(playGame);
                saveScore(winner);
                displayOnScreen(winner);
                break;
            case 'paper':
                humanChoice = new Entry('paper', 'human');
                getComputerChoice = Entry.getComputerChoice();
                playGame = Entry.playRound(humanChoice.choice, getComputerChoice.choice);
                winner = Entry.getWinner(playGame);
                saveScore(winner);
                displayOnScreen(playGame);
                break;
            case 'scissor':
                humanChoice = new Entry('scissor', 'human');
                getComputerChoice = Entry.getComputerChoice();
                playGame = Entry.playRound(humanChoice.choice, getComputerChoice.choice);
                winner = Entry.getWinner(playGame);
                saveScore(winner);
                displayOnScreen(playGame);
                break;
        }

        let checkForWinner = getWinner();
        if (checkForWinner) {
            displayOnScreen(checkForWinner);
            clearScore();
        } else {
            displayOnScreen(playGame);
        }

    });

    function saveScore(winner) {

        switch (winner) {
            case 'human':
                score[0].humanscore += 1;
                score[0].gamesPlayed += 1;
                break;
            case 'computer':
                score[0].computerscore += 1;
                score[0].gamesPlayed += 1;
                break;
            case 'both':
                score[0].humanscore += 1;
                score[0].computerscore += 1;
                score[0].gamesPlayed += 1;
        }
    }

    function clearScore() {
        score[0].humanscore = 0;
        score[0].computerscore = 0;
        score[0].gamesPlayed = 0;
    }

    function getWinner() {
        let totalGames = (score[0].gamesPlayed === 5);
        if (totalGames) {
            if (score[0].humanscore < score[0].computerscore) {
                return `Computer Wins in a game of ${score[0].gamesPlayed}`;
            } else {
                return `You Win in a game of ${score[0].gamesPlayed}`;
            }
        }
        return;
    }

    function displayOnScreen(textString) {
        const resultContainer = document.querySelector("#results");
        const commentsPara = document.createElement("p");
        const resultsPara = document.createElement("p");

        // clear the html output
        resultContainer.innerHTML = '';

        const partsString = textString.split(';');

        if (partsString.length >= 2) {
            commentsPara.textContent = partsString[1];
            commentsPara.style.color = 'red';
            resultsPara.textContent = `Your score is : ${score[0].humanscore} | Computer score is : ${score[0].computerscore}| Games played : ${score[0].gamesPlayed}`;
            resultsPara.style.color = 'black';
            resultContainer.appendChild(commentsPara);
            resultContainer.appendChild(resultsPara);
        } else {
            commentsPara.textContent = `Your score is : ${score[0].humanscore} | Computer score is : ${score[0].computerscore}| Games played : ${score[0].gamesPlayed}`;
            commentsPara.style.color = 'black';
            resultsPara.textContent = textString;
            resultsPara.style.color = 'red';
            resultContainer.appendChild(commentsPara);
            resultContainer.appendChild(resultsPara);
        }
    }

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

    static getWinner(textString) {
        let parts = textString.split(';');
        return parts[0];
    }

    static playRound(humanChoice, computerChoice) {
        if ((computerChoice == "rock") && (humanChoice == "rock")) {

            return `both;It's a Draw! Both are ROCK!`;

        } else if (computerChoice == "rock" && humanChoice == "paper") {

            return `human;You Win! PAPER beats ROCK`;

        } else if (computerChoice == "rock" && humanChoice == "scissor") {

            return `computer;You Lose! ROCK beats SCISSORS`;

        }
        if (computerChoice == "paper" && humanChoice == "rock") {

            return `computer;You Lose! PAPER beats ROCK`;

        } else if (computerChoice == "paper" && humanChoice == "paper") {

            return `both;It's a DRAW! Both are PAPER`;

        } else if (computerChoice == "paper" && humanChoice == "scissor") {

            return `human;You Win! SCISSORS beats PAPER`;

        }
        if (computerChoice == "scissor" && humanChoice == "rock") {

            return `human;You Win! ROCK beats SCISSORS`;

        } else if (computerChoice == "scissor" && humanChoice == "paper") {

            return `computer;You Lose! SCISSORS beats PAPER`;

        } else if (computerChoice == "scissor" && humanChoice == "scissor") {

            return `both;It's a DRAW! Both are SCISSORS`;

        }
    }
}

startGame();