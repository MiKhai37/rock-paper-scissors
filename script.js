let computerElement = '';
let playerElement = '';

let playerScore = 0;
let computerScore = 0;

let round = 0;

// Random Select between rock, paper and scissors
function computerPlay() {
    const rpsChoice = ["rock", "paper", "scissors"];
    const randInt = Math.floor(Math.random() *  3);
    return rpsChoice[randInt];
};

// Play logic of rock paper scissors
function playRound(playerSelection, computerSelection) {
    round = round + 1;
    if (playerSelection == computerSelection) {
        return 0;
    }

    switch (playerSelection) {

        case "rock" :
            if (computerSelection == "paper") {
                computerScore ++;
                return -1;
            } else {
                playerScore ++;
                return 1;
            }

        case "paper" :
            if (computerSelection == "rock") {
                computerScore ++;
                return -1;
            } else {
                playerScore ++;
                return 1;
            }

        case "scissors":
            if (computerSelection == "rock") {
                computerScore ++;
                return -1;
            } else {
                playerScore ++;
                return 1;
            }
    }
}

function renderScore() {
    const scoreDiv = document.querySelector('#score-div')
    scoreDiv.innerHTML = ""
    scoreDiv.classList.add("center")
    scoreDiv.innerHTML = `<h3>Round: ${round}, Player: ${playerScore}, Computer: ${computerScore}</h3>`;
    if (playerScore == 5) {
        scoreDiv.innerHTML = `<h3>Player Wins</h3>`;
        round = 0;
        computerScore = 0;
        playerScore = 0;
    };
    if (computerScore == 5) {
        scoreDiv.innerHTML = `<h3>Computer Wins</h3>`;
        round = 0;
        computerScore = 0;
        playerScore = 0;
    }
}

const rockBtn = document.querySelector('#rock-btn');
rockBtn.addEventListener('click', () => {
  playRound('rock', computerPlay());
  renderScore();
});

const paperBtn = document.querySelector('#paper-btn');
paperBtn.addEventListener('click', () => {
  playRound('paper', computerPlay());
  renderScore();
});

const ScissorsBtn = document.querySelector('#scissors-btn');
ScissorsBtn.addEventListener('click', () => {
  playRound('scissors', computerPlay());
  renderScore();
});



