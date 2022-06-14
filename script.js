const buttons = document.querySelectorAll('button')

buttons.forEach((button) => {
    button.addEventListener('click', function (e) {
        console.log(playRound(computerChoice(), button.id));
    })
})


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
    console.log(playerSelection)
    if (playerSelectionAdjusted === computerSelection) {
        return [0, `Tie, ${playerSelectionAdjusted} and ${computerSelection} are the same.`] // return 0 on tie
    } else if ((playerSelectionAdjusted === "rock") && (computerSelection === "scissors")) { // return 1 on win
        return [1, `You win, ${playerSelectionAdjusted} beats ${computerSelection}`]
    } else if (playerSelectionAdjusted === "paper" && (computerSelection === "rock")) {
        return [1, `You win, ${playerSelectionAdjusted} beats ${computerSelection}`]
    } else if (playerSelectionAdjusted === "scissors" && (computerSelection === "paper")) {
        return [1, `You win, ${playerSelectionAdjusted} beats ${computerSelection}`]
    } else {
        return [-1, `You lose, ${computerSelection} beats ${playerSelectionAdjusted}`] //return -1 on loss
    }
}


function game() {
    let playerScore = 0
    let computerScore = 0
    let winLose = ""

    for (let i = 0; i <= 4; i++) {  // increment the game for 5 rounds total
        let round = playRound(prompt("Rock, paper, or scissors?:"), computerChoice())
        if (round[0] === 0) {  // Tie
            console.log(round[1])
        } else if (round[0] === 1) {  // win, increment playerScore
            console.log(round[1])
            playerScore++
        } else if (round[0] === -1) {  // lose increment computerScore
            console.log(round[1])
            computerScore++
        }
    }
    if (playerScore > computerScore) {  // add a quick win or lose statement
        winLose += 'win'
    } else {
        winLose += 'lose'
    }
    return console.log(`GG. You ${winLose}. Score: ${playerScore} to ${computerScore}`)
}

// game()