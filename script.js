function computerPlay() {
    const rpsChoice = ["Rock", "Parper", "Scissors"];
    const randInt = Math.floor(Math.random() *  3);
    return rpsChoice[randInt];
};

function getKeyByValue(object, value) {
    return Object.keys(object).find(key => object[key] === value);
  }

function playRPS(playerSelection, computerSelection) {
    const rpsState= {
        1: ["rock", "paper"],
        2: ["scissors", "rock"],
        3: ["paper", "scissors"],
        4: ["paper", "rock"],
        5: ["scissors", "paper"],
        6: ["rock", "scissors"],
    }
    const key = getKeyByValue(rpsState, [playerSelection.toLowerCase(), computerSelection.toLowerCase()]);

    console.log(key)

    if (key>3) {
        return "Congratulations, you win";
    } else if (key<=3) {
        return "You lose";
    } else {
        return "Tie";
    }
}

function game()  {
    playerScore = 0;
    computerScore = 0;
    for (let i = 0; I < 5; I++) {

    }
}

const a = "scissors"
const b = computerPlay().toLowerCase()

console.log(a)
console.log(b)
console.log(playRPS(a, b))