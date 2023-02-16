const ROCK = 'Rock';
const PAPER = 'Paper';
const SCISSORS = 'Scissors';

// Used to keep score
let playerWins = 0;
let computerWins = 0;
let ties = 0;

function getPlayerChoice() {
  let choice;
  let notValid = true;

  while(notValid) {
    choice = window.prompt('Please type in your choice: Rock, Paper, or Scissors: ');
    // In case the user clicks the 'Cancel' button.
    choice = choice ?? '';
    choice = choice.trim();

    notValid = false;

    switch(choice.toLowerCase()) {
      case ROCK.toLowerCase():
        choice = ROCK;
        break;
      case PAPER.toLocaleLowerCase():
        choice = PAPER;
        break;
      case SCISSORS.toLocaleLowerCase():
        choice = SCISSORS;
        break;
      default:
        console.log(`"${choice}" is not valid, try again.`)
        notValid = true;
    }
  }
  
  return choice;
}

function getComputerChoice() {
  let choice;  
  
  switch(Math.floor(Math.random() * 3)) {
    case 0:
      choice = ROCK;
      break;
    case 1:
      choice = PAPER;
      break;
    default:
      choice = SCISSORS;
  }

  return choice;
}

function playRound(playerSelection, computerSelection) {
  switch(true) {
    case (playerSelection === computerSelection):
      ties++;
      console.log(`It's a Tie! You have both played ${playerSelection}.`)
      break;
    case (playerSelection === ROCK && computerSelection === SCISSORS):
    case (playerSelection === PAPER && computerSelection === ROCK):
    case (playerSelection === SCISSORS && computerSelection === PAPER):
      playerWins++;
      console.log(`You Win! ${playerSelection} beats ${computerSelection}.`)
      break;
    default:
      computerWins++;
      console.log(`You Lose! ${playerSelection} is beaten by ${computerSelection}.`)
  }
}

function reportScore() {
  console.log(`       You: ${playerWins}`);
  console.log(`  Computer: ${computerWins}`);
  console.log(`      Ties: ${ties}`);
}
