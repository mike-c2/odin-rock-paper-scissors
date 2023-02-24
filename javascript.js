function createRoundSelector(numberOfRounds, defaultRound = 1) {
  if(isNaN(numberOfRounds) || numberOfRounds < 1) {
    let errorMessage =`numberOfRounds value ${numberOfRounds} is not valid, `;
    errorMessage += 'it will be set to 1 instead.';
    console.error(errorMessage);
    numberOfRounds = 1;
  }
  
  if(isNaN(defaultRound) || defaultRound < 1) {
    let errorMessage =`defaultRound value ${defaultRound} is not valid, `;
    errorMessage += 'it will be set to 1 instead.';
    console.error(errorMessage);
    defaultRound = 1;
  }
  
  if(defaultRound > numberOfRounds) {
    let warningMessage=`defaultRound value ${defaultRound} is greater than `;
    warningMessage += `the numberOfRounds value ${numberOfRounds}. The `;
    warningMessage += `defaultRound will be set to ${numberOfRounds} instead.`
    console.warn(warningMessage);
    defaultRound = numberOfRounds;
  }

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

function createGameSetup(numberOfRounds, defaultRound = 1) {
  const setupContainer = document.createElement('div');
  setupContainer.classList.add('game-setup');

  const welcome = document.createElement('p');
  welcome.textContent = 'Welcome to the Game!';
  setupContainer.appendChild(welcome);
  
  const howManyRounds = document.createElement('p');
  howManyRounds.textContent = 'Select how many rounds that you would like to play, then click Start';
  setupContainer.appendChild(howManyRounds);
  
  const roundSelectContainer = createRoundSelector(numberOfRounds, defaultRound);
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
  
  roundInfo.appendChild(new Text('Round '));
  roundInfo.appendChild(currentRound);
  roundInfo.appendChild(new Text(' of '));
  roundInfo.appendChild(lastRound);
  gameStatus.appendChild(roundInfo);
  
  const playerPointsText = document.createElement('p');
  const playerPoints = document.createElement('span');
  playerPoints.setAttribute('id', 'player-points');
  playerPoints.textContent = '0';
  playerPointsText.appendChild(new Text('Player: '));
  playerPointsText.appendChild(playerPoints);
  gameStatus.appendChild(playerPointsText);
  
  const computerPointsText = document.createElement('p');
  const computerPoints = document.createElement('span');
  computerPoints.setAttribute('id', 'computer-points');
  computerPoints.textContent = '0';
  computerPointsText.appendChild(new Text('Computer: '));
  computerPointsText.appendChild(computerPoints);
  gameStatus.appendChild(computerPointsText);
  
  const tiePointsText = document.createElement('p');
  const tiePoints = document.createElement('span');
  tiePoints.setAttribute('id', 'tie-points');
  tiePoints.textContent = '0';
  tiePointsText.appendChild(new Text('Ties: '));
  tiePointsText.appendChild(tiePoints);
  gameStatus.appendChild(tiePointsText);
  
  return gameStatus;
}

const gameContainer = document.querySelector('.game-container');
// gameContainer.appendChild(createGameSetup(10, 5));
gameContainer.appendChild(createGameStatus(10));
