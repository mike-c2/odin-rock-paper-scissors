function createRoundSelector(numberOfRounds, defaultRound = 1) {
  const roundSelectContainer = document.createElement('div');
  
  const roundSelectLabel = document.createElement('label');
  roundSelectLabel.setAttribute('for', 'number-rounds');
  roundSelectLabel.textContent = 'Number of Rounds:';
  roundSelectContainer.appendChild(roundSelectLabel);

  const selectRoundsToPlay = document.createElement('select');
  selectRoundsToPlay.setAttribute('name', 'Number of Rounds');
  selectRoundsToPlay.setAttribute('id', 'number-rounds');
  roundSelectContainer.appendChild(selectRoundsToPlay);
  
  for(let i = 1; i <= numberOfRounds; i++) {
    const option = document.createElement('option');
    option.setAttribute('value', i.toString());
    option.textContent = i.toString();

    if(i === defaultRound) {
      option.selected = true;
    }

    selectRoundsToPlay.appendChild(option);
  }
  
  return roundSelectContainer;
}

function createGameSetup() {
  const setupContainer = document.createElement('div');
  setupContainer.classList.add('game-setup');

  const welcome = document.createElement('p');
  welcome.textContent = 'Welcome to the Game!';
  setupContainer.appendChild(welcome);
  
  const howManyRounds = document.createElement('p');
  howManyRounds.textContent = 'Select how many rounds that you would like to play, then click Start';
  setupContainer.appendChild(howManyRounds);
  
  const roundSelectContainer = createRoundSelector(10, 5);
  setupContainer.appendChild(roundSelectContainer);
  
  const start = document.createElement('button');
  start.setAttribute('type', 'button');
  start.setAttribute('id', 'start');
  start.textContent = 'Start';
  setupContainer.appendChild(start);
  
  return setupContainer;
}

function createGameStatus(numberOfRounds) {
  const gameStatus = document.createElement('div');
  gameStatus.classList.add('game-status');
  
  const roundInfo = document.createElement('p');

  const currentRound = document.createElement('span');
  currentRound.setAttribute('id', 'current-round');
  currentRound.textContent = '1';

  const lastRound = document.createElement('span');
  lastRound.setAttribute('id', 'last-round');
  
  if(!isNaN(numberOfRounds)) {
    lastRound.textContent = numberOfRounds.toString();
  } else {
    lastRound.textContent = '1';
  }
  
  roundInfo.appendChild(new Text('Round '));
  roundInfo.appendChild(currentRound);
  roundInfo.appendChild(new Text(' of '));
  roundInfo.appendChild(lastRound);
  gameStatus.appendChild(roundInfo);
  
  const playerScore = document.createElement('p');
  const playerPoints = document.createElement('span');
  playerPoints.setAttribute('id', 'player-points');
  playerPoints.textContent = '0';
  playerScore.appendChild(new Text('Player: '));
  playerScore.appendChild(playerPoints);
  gameStatus.appendChild(playerScore);
  
  const computerScore = document.createElement('p');
  const computerPoints = document.createElement('span');
  computerPoints.setAttribute('id', 'computer-points');
  computerPoints.textContent = '0';
  computerScore.appendChild(new Text('Computer: '));
  computerScore.appendChild(computerPoints);
  gameStatus.appendChild(computerScore);
  
  const tieScore = document.createElement('p');
  const tiePoints = document.createElement('span');
  tiePoints.setAttribute('id', 'tie-points');
  tiePoints.textContent = '0';
  tieScore.appendChild(new Text('Ties: '));
  tieScore.appendChild(tiePoints);
  gameStatus.appendChild(tieScore);
  
  return gameStatus;
}

const gameContainer = document.querySelector('.game-container');
gameContainer.appendChild(createGameSetup());
// gameContainer.appendChild(createGameStatus(10));
