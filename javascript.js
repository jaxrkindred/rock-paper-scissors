let humanScore = 0;
let computerScore = 0;


function getComputerChoice() {
    const num = Math.floor(Math.random() * 3) + 1;
    if (num === 1) {
        return "rock";
    }    
    else if (num === 2) {
        return "paper";
    }
    else {
        return "scissors";
    }
}


function getHumanChoice() {
    const choice = prompt("Rock, paper, or scissors?");
    return choice.toLowerCase();
}


function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        // It's a tie
    } else if (
        (humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "scissors" && computerChoice === "paper")) {
            humanScore++;
        } else {
            computerScore++;
        }
        console.log(humanScore, computerScore)
}

playRound(getHumanChoice(), getComputerChoice());
playRound(getHumanChoice(), getComputerChoice());
playRound(getHumanChoice(), getComputerChoice());
playRound(getHumanChoice(), getComputerChoice());
playRound(getHumanChoice(), getComputerChoice());


// Final result
console.log("Game Over!");
if (humanScore > computerScore) {
    console.log(" You win!");
} else if (computerScore > humanScore) {
    console.log(" Computer wins!");
} else {
    console.log(" It's a tie!");
}

