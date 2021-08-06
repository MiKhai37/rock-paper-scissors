// Random Select between rock, paper and scissors
function computerPlay() {
    const rpsChoice = ["Rock", "Paper", "Scissors"];
    const randInt = Math.floor(Math.random() *  3);
    return rpsChoice[randInt];
};

// Play logic of rock paper scissors
function playRound(playerSelection, computerSelection) {

    playerLower = playerSelection.toLowerCase()
    computerLower = computerSelection.toLowerCase()

    if (playerLower === computerLower) {
        console.log("Tie!")
        return 0;
    }

    switch (playerLower) {

        case "rock" :
            if (computerLower == "paper") {
                console.log("Loser rock vs paper")
                return -1
            } else {
                console.log("Winner rock vs scissors")
                return 1
            }

        case "paper" :
            if (computerLower == "rock") {
                console.log("Loser paper vs rock")
                return -1
            } else {
                console.log("Winner paper vs scissors")
                return 1
            }

        case "scissors":
            if (computerLower == "rock") {
                console.log("Loser scissors vs rock")
                return -1
            } else {
                console.log("Winner scissors vs paper")
                return 1
            }
    }
}

let playerScore = 0;
let computerScore = 0;

const resDiv = document.querySelector('#result-div');
const result = document.createElement('div');
result.textContent = 'Choose an element';
resDiv.appendChild(result);

const score = document.createElement('div');
score.textContent = 'Score: Player = ' + playerScore + ', Computer = ' + computerScore 
resDiv.appendChild(score)


const rockBtn = document.querySelector('#rock-btn');
rockBtn.addEventListener('click', () => {
  playRound('rock', computerPlay());
  result.textContent = 'You played rock!';
});

const paperBtn = document.querySelector('#paper-btn');
paperBtn.addEventListener('click', () => {
  playRound('paper', computerPlay());
  result.textContent = 'You played paper!';
});

const ScissorsBtn = document.querySelector('#scissors-btn');
ScissorsBtn.addEventListener('click', () => {
  playRound('scissors', computerPlay());
  result.textContent = 'You played scissors!';
});



