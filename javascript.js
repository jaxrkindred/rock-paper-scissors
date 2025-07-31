let humanScore = 0;
let computerScore = 0;

const rockbtn = document.querySelector("#rock");
const paperbtn = document.querySelector("#paper");
const scissorsbtn = document.querySelector("#scissors");

function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        
    } else if (
        (humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "scissors" && computerChoice === "paper")) {
            humanScore++;
        } else {
            computerScore++;
        }
}

const results = document.createElement("div");
document.body.appendChild(results);
const final = document.createElement("div");
document.body.appendChild(final);

function handleClick(e) {
    const playerSelection = e.target.id;
    const computerSelection = getComputerChoice();
    playRound(playerSelection, computerSelection);
    results.textContent = `Human: ${humanScore}, Computer: ${computerScore}`;
    if (humanScore === 5 || computerScore === 5 ) {
        checkFinal();
        resetGame();
}}


function checkFinal() {
 if (humanScore > computerScore) {
    final.textContent = " You win!";
    } else if (computerScore > humanScore) {
    final.textContent = " Computer wins!";
    }
}


rockbtn.addEventListener("click", handleClick);
paperbtn.addEventListener("click", handleClick);
scissorsbtn.addEventListener("click", handleClick);




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



