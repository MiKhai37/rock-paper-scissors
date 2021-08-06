let computerElement = '';
let playerElement = '';

let playerScore = 0;
let computerScore = 0;

let nbGame = 0;

const resDiv = document.querySelector('#result-div');

const result = document.createElement('div');
result.textContent = 'Choose an element';
resDiv.appendChild(result);

const score = document.createElement('div');
score.textContent = 'Score: Player = ' + playerScore + ', Computer = ' + computerScore 
resDiv.appendChild(score)

// Random Select between rock, paper and scissors
function computerPlay() {
    const rpsChoice = ["rock", "paper", "scissors"];
    const randInt = Math.floor(Math.random() *  3);
    return rpsChoice[randInt];
};

// Play logic of rock paper scissors
function playRound(playerSelection, computerSelection) {

    if (playerSelection == computerSelection) {
        result.textContent = 'Tie!';
        return 0;
    }

    switch (playerSelection) {

        case "rock" :
            if (computerSelection == "paper") {
                result.textContent = "Loser rock vs paper"
                return -1
            } else {
                result.textContent = "Winner rock vs scissors"
                return 1
            }

        case "paper" :
            if (computerSelection == "rock") {
                result.textContent = "Loser paper vs rock"
                return -1
            } else {
                result.textContent = "Winner paper vs scissors"
                return 1
            }

        case "scissors":
            if (computerSelection == "rock") {
                result.textContent = "Loser scissors vs rock"
                return -1
            } else {
                result.textContent = "Winner scissors vs paper"
                return 1
            }
    }
}

const rockBtn = document.querySelector('#rock-btn');
rockBtn.addEventListener('click', () => {
  playRound('rock', computerPlay());
});

const paperBtn = document.querySelector('#paper-btn');
paperBtn.addEventListener('click', () => {
  playRound('paper', computerPlay());
});

const ScissorsBtn = document.querySelector('#scissors-btn');
ScissorsBtn.addEventListener('click', () => {
  playRound('scissors', computerPlay());
});



