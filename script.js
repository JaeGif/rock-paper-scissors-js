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
    const playerSelectionAdjusted = playerSelection.toLower()
    if (playerSelectionAdjusted === computerSelection) {
        return "Tie! ${playerSelectionAdjusted} and ${computerSelection} are the same."
    } else if (playerSelectionAdjusted === "rock" && ) {

    } else if (playerSelectionAdjusted === "paper" &&) {

    } else if (playerSelectionAdjusted === "scissors" &&) {
    
    } else {
        return "You lose! ${computerSelection} beats ${playerSelectionAdjusted}"
    }
}
const playerSelection = prompt("Rock, paper, or scissors?:")
const computerSelection = computerChoice()
playRound(computerSelection, playerSelection)