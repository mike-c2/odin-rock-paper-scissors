const ROCK = 'Rock';
const PAPER = 'Paper';
const SCISSORS = 'Scissors';

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
      return `It's a Tie! You have both played ${playerSelection}.`;

    case (playerSelection === ROCK && computerSelection === SCISSORS):
    case (playerSelection === PAPER && computerSelection === ROCK):
    case (playerSelection === SCISSORS && computerSelection === PAPER):
      return `You Win! ${playerSelection} beats ${computerSelection}.`;

    default:
      return `You Lose! ${computerSelection} beats ${playerSelection}.`;
  }
}

function reportScore(playerWins, computerWins, ties) {
  console.log(`       You: ${playerWins}`);
  console.log(`  Computer: ${computerWins}`);
  console.log(`      Ties: ${ties}`);
}
