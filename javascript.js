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

function printCurrentScore(playerWins, computerWins, ties) {
  console.log(`       You: ${playerWins}`);
  console.log(`  Computer: ${computerWins}`);
  console.log(`      Ties: ${ties}`);
}

function printFinalScore(playerWins, computerWins, ties) {
  console.log('Final Score:');
  printCurrentScore(playerWins, computerWins, ties);
  
  if(playerWins > computerWins) {
    console.log('You won the game!');
    
  }
  else if(computerWins > playerWins) {
    console.log('You lost the game.');
  }
  else {
    console.log('The game is a tie.');
  }
}

function game() {
  let playerWins = 0;
  let computerWins = 0;
  let ties = 0;
  let numberOfRounds = 5;

  console.log('Welcome to this game of Rock, Paper, Scissors!');
  console.log(`You will play ${numberOfRounds} rounds against the Computer\n.`)
  
  for(let i = 0; i < numberOfRounds; i++) {
    console.log('Current Score:');
    printCurrentScore(playerWins, computerWins, ties);
    console.log(`Round ${i + 1}`);
    
    let result = playRound(getPlayerChoice(), getComputerChoice());
    console.log(result);
    
    if(result.includes('Win')) {
      playerWins++;
    }
    else if(result.includes('Lose')) {
      computerWins++;
    }
    else {
      ties++;
    }
  }
  
  printFinalScore(playerWins, computerWins, ties);
}

game();