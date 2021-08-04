function computerPlay() {
    const rpsChoice = ["Rock", "Parper", "Scissors"];
    const randInt = Math.floor(Math.random() *  3);
    return rpsChoice[randInt];
};

function playRPS(playerSelection, computerSelection) {
    if (playerSelection.toLowerCase() === computerSelection.toLowerCase()) return "Tie";
    switch (playerSelection.toLowerCase()) {

        case "rock" :
            if (computerSelection.toLowerCase() == "paper") return "Loser rock vs paper"
            else return "Winner rock vs scissors"

        case "paper" :
            if (computerSelection.toLowerCase() == "rock") return "Loser paper vs rock"
            else return "Winner paper vs scissors"

        case "scissors":
            if (computerSelection.toLowerCase() == "rock") return "Loser scissors vs rock"
            else return "Winner scissors vs paper"
    }
}

function game()  {
    playerScore = 0;
    computerScore = 0;
    for (let i = 0; I < 5; I++) {
        playRPS('rock', computerPlay())
    }
}

const a = "scissors"
const b = computerPlay().toLowerCase()

console.log(a)
console.log(b)
console.log(playRPS(a, b))