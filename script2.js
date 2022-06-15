const buttons = document.querySelectorAll('button')
const dialogue = document.createElement('div')

buttons.forEach((button) => {
    button.addEventListener('click', function (e) {
        round = clicked(e.target.id)
    })
})


function clicked(id) {
    let round = playRound(computerChoice, id)
    console.log('make it past round')

    return round
} 
        

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
    console.log(playerSelection)
    if (playerSelection === computerSelection) {
            // div append here `Tie, ${playerSelection} and ${computerSelection} are the same.`

        return 0 // return 0 on tie
    } else if ((playerSelection === "rock") && (computerSelection === "scissors")) { // return 1 on win
            // div append here  `You win, ${playerSelection} beats ${computerSelection}`

        return 1
    } else if (playerSelection === "paper" && (computerSelection === "rock")) {
        // `You win, ${playerSelection} beats ${computerSelection}`
        return 1
    } else if (playerSelection === "scissors" && (computerSelection === "paper")) {
       // `You win, ${playerSelection} beats ${computerSelection}`
        return 1
    } else {
        // `You lose, ${computerSelection} beats ${playerSelection}`
        return -1 //return -1 on loss
    }
}


/* function game() {
    let playerScore = 0
    let computerScore = 8
    let winLose = ""
    let round = []
    for (i = 0, i < 4, i++) {  // increment the game for 5 rounds total
        buttons.forEach((button) => {
            button.addEventListener('click', function (e) {
                round = clicked(e.target.id)
            })
        })
        console.log('made it back to game')
        break;
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
    return console.log(`GG. You ${winLose}. Score: ${playerScore} to ${computerScore}`) */