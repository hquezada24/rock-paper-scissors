const getHumanChoice = () => {
    let humanChoice = prompt("Enter Rock, Paper or Scissors: ");
    return humanChoice;
};

const getComputerChoice = () => {
    let options = ["rock", "paper", "scissors"];
    let idx = Math.floor(Math.random() * 3);
    let computerChoice = options[idx];
    return computerChoice;
};

let humanScore = 0;
let computerScore = 0;

const playRound = (humanChoice, computerChoice) => {
    let updatedHumanChoice = humanChoice.toLowerCase();

    if (updatedHumanChoice === "rock" && computerChoice === "paper") {
        computerScore++;
        alert("You lose! Paper beats Rock.");
    } else if (updatedHumanChoice === "rock" && computerChoice === "scissors") {
        humanScore++;
        alert("You win! Rock beats Scissors.");
    } else if (updatedHumanChoice === "rock" && computerChoice === "rock") {
        alert("It's a tie! Both chose Rock.");
    } else if (updatedHumanChoice === "paper" && computerChoice === "scissors") {
        computerScore++;
        alert("You lose! Scissors beats Paper.");
    } else if (updatedHumanChoice === "paper" && computerChoice === "rock") {
        humanScore++;
        alert("You win! Paper beats Rock.");
    } else if (updatedHumanChoice === "paper" && computerChoice === "paper") {
        alert("It's a tie! Both chose Paper.");
    } else if (updatedHumanChoice === "scissors" && computerChoice === "scissors") {
        alert("It's a tie! Both chose Scissors.");
    } else if (updatedHumanChoice === "scissors" && computerChoice === "rock") {
        computerScore++;
        alert("You lose! Rock beats Scissors.");
    } else if (updatedHumanChoice === "scissors" && computerChoice === "paper") {
        humanScore++;
        alert("You win! Scissors beats Paper.");
    } else {
        alert("Invalid choice. Please select Rock, Paper, or Scissors.");
    }
};

function playGame() {
    for (let i = 0; i < 5; i++) {
        const humanChoice = getHumanChoice(); // Get human choice for each round
        const computerChoice = getComputerChoice(); // Get computer choice for each round
        alert(`You chose: ${humanChoice}, Computer chose: ${computerChoice}`);
        playRound(humanChoice, computerChoice); // Pass the actual choices
    }
    
    // Display final scores
    console.log(`Final Score - You: ${humanScore}, Computer: ${computerScore}`);
}

playGame();
