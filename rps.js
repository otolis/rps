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



let result = "";
function playRound(playerChoice, computerChoice) {
    
    if (
        (computerChoice === "rock" && playerChoice === "scissors") ||
        (computerChoice === "paper" && playerChoice === "rock") ||
        (computerChoice === "scissors" && playerChoice === "paper")
    ) {
        return result = "computer wins";
    } else if (
        (playerChoice === "rock" && computerChoice === "scissors") ||
        (playerChoice === "paper" && computerChoice === "rock") ||
        (playerChoice === "scissors" && computerChoice === "paper")
    ) {
        return result = "player wins";
    } else {
        return result = "tie";
    }
    
}



function game () {
let playerWins = 0;
let computerWins = 0;
let ties = 0;
    
    while (playerWins <5 && computerWins<5) {
        let playerChoice = prompt("Choose Rock, Paper, or Scissors").toLowerCase();
        let computerChoice = getComputerChoice();
        let final = playRound (playerChoice,computerChoice);
        if (final === "player wins") {
              playerWins= playerWins + 1;
              
        } else if (final === "computer wins") {
              computerWins = computerWins + 1;
              
        } else if (final === "tie") { 
              ties = ties + 1;
              
        }
        
        console.log(playerWins,computerWins,ties); } 
         
}
game ();
