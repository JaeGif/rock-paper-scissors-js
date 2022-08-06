function clicked(id) {
  // check if button is clicked
  playRound(computerChoice(), id);
}

function reset() {
  // reset scores to 0
  playerScore.textContent = 0;
  computerScore.textContent = 0;
  return;
}

function computerChoice() {
  let randInt = Math.floor(Math.random() * 3); // This uses Math.random and .floor to return random ints betweem 0 and 2
  if (randInt === 0) {
    // For consistency 0: rock, 1: paper, 2: scissors throughout the program
    return 'rock';
  } else if (randInt === 1) {
    return 'paper';
  } else {
    return 'scissors';
  }
}

function playRound(computerSelection, playerSelection) {
  // playround checks for the winner of a round and displays accordingly
  const dialogue = document.querySelector('#dialogue');
  const playerScore = document.querySelector('#playerScore');
  const computerScore = document.querySelector('#computerScore');
  let playerScoreLine = parseInt(playerScore.textContent);
  let computerScoreLine = parseInt(computerScore.textContent);
  if (playerSelection === computerSelection) {
    dialogue.textContent = `Tie, ${playerSelection} and ${computerSelection} are the same.`;
  } else if (playerSelection === 'rock' && computerSelection === 'scissors') {
    // return 1 on win
    playerScoreLine++;
    dialogue.textContent = `You win, ${playerSelection} beats ${computerSelection}`;
    playerScore.textContent = `${playerScoreLine}`;
  } else if (playerSelection === 'paper' && computerSelection === 'rock') {
    dialogue.textContent = `You win, ${playerSelection} beats ${computerSelection}`;
    playerScoreLine++;
    playerScore.textContent = `${playerScoreLine}`;
  } else if (playerSelection === 'scissors' && computerSelection === 'paper') {
    dialogue.textContent = `You win, ${playerSelection} beats ${computerSelection}`;
    playerScoreLine++;
    playerScore.textContent = `${playerScoreLine}`;
  } else {
    dialogue.textContent = `You lose, ${computerSelection} beats ${playerSelection}`;
    computerScoreLine++;
    computerScore.textContent = `${computerScoreLine}`;
  }
  checkWinner(playerScoreLine, computerScoreLine); // after every round check to see if the game is won
}

function checkWinner(playerScore, computerScore) {
  // if anyone's score is 5 the game is over
  console.log(playerScore, computerScore);
  if (playerScore == 5 || computerScore == 5) {
    dialogue.textContent = `Game Over! Computer: ${computerScore} to Player: ${playerScore}`;
    reset();
  }
}

function game() {
  // initializes everything for encapsulation
  const buttons = document.querySelectorAll('.button');
  const restart = document.querySelector('#restart');
  restart.addEventListener('click', reset); // reset scoreline if you ragequit

  buttons.forEach((button) => {
    button.addEventListener('click', function (e) {
      clicked(e.target.id);
    });
  });
}

game();
