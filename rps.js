const rockButton = document.getElementById("rockButton");
const paperButton = document.getElementById('paperButton');
const sciButton = document.getElementById('sciButton');
const playerChoiceDisplay = document.getElementById('playerChoice');
const computerChoiceDisplay = document.getElementById('computerChoice');
const resultsDisplay = document.getElementById('results');
const playerWinsDisplay = document.getElementById('playerWins');
const computerWinsDisplay = document.getElementById('computerWins');
const tiesDisplay = document.getElementById('ties');

let results = "";
let computerChoice = "";
let playerChoice = "";
let playerWins = 0;
let computerWins = 0;
let ties = 0;

// resets the game after player or computer wins 
function resetGame() {
    playerWins = 0;
    computerWins = 0;
    ties = 0;
    playerWinsDisplay.textContent = playerWins;
    computerWinsDisplay.textContent = computerWins;
    tiesDisplay.textContent = ties;
}

// gets random computer choice 
function getComputerChoice() {
    let randomNumber = Math.floor(Math.random() * 3);
    switch (randomNumber) {
        case 0:
            return "rock";
        case 1:
            return "paper";
        case 2:
            return "scissors";
    }
}

// a function that determiens a winner 
function playRound(playerChoice, computerChoice) {
    if (
        (computerChoice === "rock" && playerChoice === "scissors") ||
        (computerChoice === "paper" && playerChoice === "rock") ||
        (computerChoice === "scissors" && playerChoice === "paper")
    ) {
        return "computer wins";
    } else if (
        (playerChoice === "rock" && computerChoice === "scissors") ||
        (playerChoice === "paper" && computerChoice === "rock") ||
        (playerChoice === "scissors" && computerChoice === "paper")
    ) {
        return "player wins";
    } else {
        return "tie";
    }
}

// function for the scoreboard
function scoreBoard(result) {
    if (result === "player wins") {
        playerWins++;
    } else if (result === "computer wins") {
        computerWins++;
    } else if (result === "tie") {
        ties++;
    }

    
    playerWinsDisplay.textContent = playerWins;
    computerWinsDisplay.textContent = computerWins;
    tiesDisplay.textContent = ties;

    
    if (playerWins === 5) {
        resultsDisplay.textContent = "player has won";
        resetGame();  
    } else if (computerWins === 5) {
        resultsDisplay.textContent = "computer has won";
        resetGame();  
    }
}

// event listeners for player choice and displaying results to html
rockButton.addEventListener("click", () => {
    playerChoice = "rock";
    playerChoiceDisplay.textContent = playerChoice;
    computerChoice = getComputerChoice();
    computerChoiceDisplay.textContent = computerChoice;
    results = playRound(playerChoice, computerChoice);
    resultsDisplay.textContent = results;
    scoreBoard(results);
});

paperButton.addEventListener("click", () => {
    playerChoice = "paper";
    playerChoiceDisplay.textContent = playerChoice;
    computerChoice = getComputerChoice();
    computerChoiceDisplay.textContent = computerChoice;
    results = playRound(playerChoice, computerChoice);
    resultsDisplay.textContent = results;
    scoreBoard(results);
});

sciButton.addEventListener("click", () => {
    playerChoice = "scissors";
    playerChoiceDisplay.textContent = playerChoice;
    computerChoice = getComputerChoice();
    computerChoiceDisplay.textContent = computerChoice;
    results = playRound(playerChoice, computerChoice);
    resultsDisplay.textContent = results;
    scoreBoard(results);
});
    
