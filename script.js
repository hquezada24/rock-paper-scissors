// const getHumanChoice = () => {
//     let humanChoice = prompt("Enter Rock, Paper or Scissors: ");
//     return humanChoice;
// };

const getComputerChoice = () => {
    let options = ["rock", "paper", "scissors"];
    let idx = Math.floor(Math.random() * 3);
    let computerChoice = options[idx];
    return computerChoice;
};

let humanScore = 0;
let computerScore = 0;
let results = document.querySelector('#results');
let scores = document.querySelector('#scores');

function winner(){
    if(humanScore === 5){
        scores.innerText = "human wins!";
    } else if(computerScore === 5){
        scores.innerText = "computer wins!";
    } else {
        return;
    }
}

const playRound = (updatedHumanChoice, computerChoice) => {
    //let updatedHumanChoice = humanChoice;

    if (updatedHumanChoice === "rock" && computerChoice === "paper") {
        computerScore++;
        results.innerText = "You lose! Paper beats Rock.";
        scores.innerText = `You: ${humanScore}, computer: ${computerScore}`;
    } else if (updatedHumanChoice === "rock" && computerChoice === "scissors") {
        humanScore++;
        results.innerText = "You win! Rock beats Scissors.";
        scores.innerText = `You: ${humanScore}, computer: ${computerScore}`;
    } else if (updatedHumanChoice === "rock" && computerChoice === "rock") {
        results.innerText = "It's a tie! Computer also chose Rock.";
        scores.innerText = `You: ${humanScore}, computer: ${computerScore}`;
    } else if (updatedHumanChoice === "paper" && computerChoice === "scissors") {
        computerScore++;
        results.innerText = "You lose! Scissors beats Paper.";
        scores.innerText = `You: ${humanScore}, computer: ${computerScore}`;
    } else if (updatedHumanChoice === "paper" && computerChoice === "rock") {
        humanScore++;
        results.innerText = "You win! Paper beats Rock.";
        scores.innerText = `You: ${humanScore}, computer: ${computerScore}`;
    } else if (updatedHumanChoice === "paper" && computerChoice === "paper") {
        results.innerText = "It's a tie! Computer also chose Paper.";
        scores.innerText = `You: ${humanScore}, computer: ${computerScore}`;
    } else if (updatedHumanChoice === "scissors" && computerChoice === "scissors") {
        results.innerText = "It's a tie! Computer also chose Scissors.";
        scores.innerText = `You: ${humanScore}, computer: ${computerScore}`;
    } else if (updatedHumanChoice === "scissors" && computerChoice === "rock") {
        computerScore++;
        results.innerText = "You lose! Rock beats Scissors.";
        scores.innerText = `You: ${humanScore}, computer: ${computerScore}`;
    } else if (updatedHumanChoice === "scissors" && computerChoice === "paper") {
        humanScore++;
        results.innerText = "You win! Scissors beats Paper.";
        scores.innerText = `You: ${humanScore}, computer: ${computerScore}`;
    } else {
        results.innerText = "Invalid choice. Please select Rock, Paper, or Scissors.";
        scores.innerText = `You: ${humanScore}, computer: ${computerScore}`;
    }

    if(humanScore === 5){
        scores.innerText = "Human Wins!";
        results.innerText = '';
    } else if(computerScore === 5){
        scores.innerText = "Computer Wins!";
        results.innerText = '';
    } else {
        return;
    }
};

function playGame() {
    // for (let i = 0; i < 5; i++) {
    //     const humanChoice = getHumanChoice(); // Get human choice for each round
    //     const computerChoice = getComputerChoice(); // Get computer choice for each round
    //     alert(`You chose: ${humanChoice}, Computer chose: ${computerChoice}`);
    //     playRound(humanChoice, computerChoice); // Pass the actual choices
    // }

    
    // Display final scores
    console.log(`Final Score - You: ${humanScore}, Computer: ${computerScore}`);
}

const chooseRock = document.querySelector('#rock');
const choosePaper = document.querySelector('#paper');
const chooseScissors = document.querySelector('#scissors');
const container = document.querySelector('.container');

// chooseRock.addEventListener('click', () => {
//     const humainChoice = 'rock';
//     const compChoice = getComputerChoice();
//     playRound(humainChoice, compChoice);
// });

container.addEventListener('click', (e) => {
    let target = e.target;

    switch(target.id){
        case 'rock':
            let humainChoice1 = 'rock';
            let compChoice = getComputerChoice();
            playRound(humainChoice1, compChoice);
            break;
        case 'paper':
            let humainChoice2 = 'paper';
            let compChoice2 = getComputerChoice();
            playRound(humainChoice2, compChoice2);
            break;
        case 'scissors':
            let humainChoice3 = 'scissors';
            let compChoice3 = getComputerChoice();
            playRound(humainChoice3, compChoice3);
            break;
        default:
            alert('error');
            break;
    }
});



// playGame();
