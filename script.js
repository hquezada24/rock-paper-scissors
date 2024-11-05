const getHumanChoice = () => {
    let humanChoice = prompt("Enter Rock, Paper or Scissors: ");
    return humanChoice;
};

const getComputerChoice = () => {
    let options = ["rock", "paper", "scissors"];
    let idx = Math.floor(Math.random() * 3)
    let computerChoice = options[idx];
    return computerChoice;
};

console.log(getComputerChoice());
console.log(getHumanChoice());

let humanScore = 0;
let computerScore = 0;

const playRound = (humanChoice, computerChoice) => {
    let updatedHumanChoice = humanChoice.toLowerCase();

    if(updatedHumanChoice === "rock" && computerChoice ==="paper"){
        computerScore++;
        console.log("You lose!");
    } else if(updatedHumanChoice === "rock" && computerChoice ==="scissors"){
        humanScore++;
        console.log("You win!");
    } else if(updatedHumanChoice === "rock" && computerChoice ==="rock"){
        console.log("It's a tie!");
    } else if(updatedHumanChoice === "paper" && computerChoice ==="scissors"){
        computerScore++;
        console.log("You lose!");
    } else if(updatedHumanChoice === "paper" && computerChoice ==="rock"){
        humanScore++;
        console.log("You win!");
    } else if(updatedHumanChoice === "paper" && computerChoice ==="paper"){
        console.log("It's a tie!");
    } else if(updatedHumanChoice === "scissors" && computerChoice ==="scissors"){
        console.log("It's a tie!");
    } else if(updatedHumanChoice === "scissors" && computerChoice ==="rock"){
        computerScore++;
        console.log("You lose!");
    } else if(updatedHumanChoice === "scissors" && computerChoice ==="paper"){
        humanScore++;
        console.log("You win!");
    }
};

function playGame(){
    playRound(getHumanChoice(), getComputerChoice());
    playRound(getHumanChoice(), getComputerChoice());
    playRound(getHumanChoice(), getComputerChoice());
    playRound(getHumanChoice(), getComputerChoice());
    playRound(getHumanChoice(), getComputerChoice());
}

playGame();