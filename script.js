function computerChoice() {
    let randInt = Math.floor(Math.random() * 3)  // This uses Math.random and .floor to return random ints betweem 0 and 2
    if (randInt === 0) {  // For consistency 0: rock, 1: paper, 2: scissors throughout the program
        return "rock"
    } else if (randInt === 1) {
        return "paper"
    } else {
        return "scissors"
    }
}

function playRound(computerSelection, playerSelection) {
    const playerSelectionAdjusted = playerSelection.toLowerCase()
    if (playerSelectionAdjusted === computerSelection) {
        return [0, `Tie, ${playerSelectionAdjusted} and ${computerSelection} are the same.`] // return 0
    } else if ((playerSelectionAdjusted === "rock") && (computerSelection === "scissors")) { // return 1
        return [1, `You win, ${playerSelectionAdjusted} beats ${computerSelection}`]
    } else if (playerSelectionAdjusted === "paper" && (computerSelection === "rock")) {
        return [1, `You win, ${playerSelectionAdjusted} beats ${computerSelection}`]
    } else if (playerSelectionAdjusted === "scissors" && (computerSelection === "paper")) {
        return [1, `You win, ${playerSelectionAdjusted} beats ${computerSelection}`]
    } else {
        return [-1, `You lose, ${computerSelection} beats ${playerSelectionAdjusted}`] //return -1
    }
}
function game() {
    let playerScore = 0
    let computerScore = 0
    for (let i = 0; i <= 4; i++) {
        let round = playRound(prompt("Rock, paper, or scissors?:"), computerChoice())
        if (round[0] === 0) {
            console.log(round[1])
        } else if (round[0] === 1) {
            console.log(round[1])
            playerScore++
        } else if (round[0] === -1) {
            console.log(round[1])
            computerScore++
        }
    }
}
game()