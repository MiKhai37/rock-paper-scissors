function computerPlay() {
    const rpsChoice = ["Rock", "Parper", "Scissors"];
    const randInt = Math.floor(Math.random() *  3);
    return rpsChoice[randInt];
};

function getKeyByValue(object, value) {
    return Object.keys(object).find(key => object[key] === value);
  }

console.log(computerPlay())

function playRPS(playerSelection, computerSelection) {
    const pSelect = playerSelection.toLowerCase();
    const cSelect = computerSelection.toLowerCase();
    const tupSelect = (pSelect, cSelect);
    const rpsState= {
        1: ("rock", "paper"),
        2: ("scissors", "rock"),
        3: ("paper", "scissors"),
        4: ("paper", "rock"),
        5: ("scissors", "paper"),
        6: ("rock", "scissors"),
    }
    const key = getKeyByValue(rpsState, (playerSelection, computerSelection));
    if (key>3) {
        return "Congratulations, you win";
    } else if (key<=3) {
        return "You lose";
    } else {
        return "Tie";
    }
}