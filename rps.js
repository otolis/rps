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

let computerChoice = getComputerChoice();
let playerChoice = prompt("Choose Rock, Paper, or Scissors").toLowerCase();
console.log("Computer choice:", computerChoice);
console.log("Player choice:", playerChoice);

function playRound(playerChoice, computerChoice) {
    let result = "";
    if (
        (computerChoice === "rock" && playerChoice === "scissors") ||
        (computerChoice === "paper" && playerChoice === "rock") ||
        (computerChoice === "scissors" && playerChoice === "paper")
    ) {
        result = "computer wins";
    } else if (
        (playerChoice === "rock" && computerChoice === "scissors") ||
        (playerChoice === "paper" && computerChoice === "rock") ||
        (playerChoice === "scissors" && computerChoice === "paper")
    ) {
        result = "player wins";
    } else {
        result = "tie";
    }
    return result;
}

console.log(playRound(playerChoice, computerChoice));
let i=0;
function game () {
    for (leti=0;i<=5;i++) {
        
    }
}