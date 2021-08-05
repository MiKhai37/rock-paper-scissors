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
// Play n times, and show scores
function game(n=5)  {
    let playerScore = 0;
    let computerScore = 0;
    for (let i = 0; i < n; i++) {
        console.log("Round: " + (i+1));

        playerSelection = prompt();
        computerSelection = computerPlay();

        score = playRound(playerSelection, computerSelection);

        if (score == 1) playerScore += 1;
        if (score == -1) computerScore += 1;

        console.log("Player Score: " + playerScore);
        console.log("Computer Score: " + computerScore);
    }

    if (playerScore == computerScore) {
        console.log("Tie! Nobody win!");
    } else if (playerScore > computerScore) {
        console.log("Player wins!");
    } else {
        console.log("Computer wins!");
    }
}

// Test the logic implemented
/*const playerSelection = 'Rock'
const computerSelection = computerPlay()

console.log("player plays: " + playerSelection)
console.log("computer plays: " + computerSelection)

console.log(playRound(playerSelection, computerSelection))*/

game()


