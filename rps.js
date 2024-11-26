
const rockButton = document.getElementById("rockButton");
const paperButton = document.getElementById('paperButton');
const sciButton = document.getElementById('sciButton');
const playerChoiceDisplay = document.getElementById('playerChoice');
const computerChoiceDisplay = document.getElementById('computerChoice');
const resultsDisplay = document.getElementById('results');


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

function playRound(playerChoice, computerChoice) {
    
    if (
        (computerChoice === "rock" && playerChoice === "scissors") ||
        (computerChoice === "paper" && playerChoice === "rock") ||
        (computerChoice === "scissors" && playerChoice === "paper")
    ) {
        return results = "computer wins";
    } else if (
        (playerChoice === "rock" && computerChoice === "scissors") ||
        (playerChoice === "paper" && computerChoice === "rock") ||
        (playerChoice === "scissors" && computerChoice === "paper")
    ) {
        return results = "player wins";
    } else {
        return results = "tie";
    }
}

let results = "";
let computerChoice = "";
let playerChoice = "";
rockButton.addEventListener("click" , () =>{
    playerChoice="rock";
    playerChoiceDisplay.textContent = playerChoice;
    computerChoice = getComputerChoice();
    computerChoiceDisplay.textContent = computerChoice;
    results = playRound(playerChoice, computerChoice);
    resultsDisplay.textContent = results;

}) 

paperButton.addEventListener("click" , () =>{
    playerChoice="paper";
    playerChoiceDisplay.textContent=playerChoice;
    computerChoice = getComputerChoice();
    computerChoiceDisplay.textContent = computerChoice;
    results = playRound(playerChoice, computerChoice);
    resultsDisplay.textContent = results;

})

sciButton.addEventListener("click",()=>{
    playerChoice="scissors";
    playerChoiceDisplay.textContent=playerChoice;
    computerChoice = getComputerChoice();
    computerChoiceDisplay.textContent = computerChoice;
    results = playRound(playerChoice, computerChoice);
    resultsDisplay.textContent = results;


})


function game () {
    let playerWins = 0;
    let computerWins = 0;
    let ties = 0;
    let final = "";
        
        while (playerWins <5 && computerWins<5) {
            
            
            
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
