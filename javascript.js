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
  lastRound.textContent = numberOfRounds.toString();
  
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

function createRockOption() {
  const rockOption = document.createElement('div');
  rockOption.classList.add('rock-option');
  
  const rockImage = document.createElement('img');
  rockImage.classList.add('rock-image');
  rockImage.setAttribute('src', 'img/pexels-pixabay-161702.jpg');
  rockImage.setAttribute('alt', 'Tilt shift lens photography of stone');
  rockOption.appendChild(rockImage); 

  return rockOption;
}

function createPaperOption() {
  const paperOption = document.createElement('div');
  paperOption.classList.add('paper-option');
  
  const paperImage = document.createElement('img');
  paperImage.classList.add('paper-image');
  paperImage.setAttribute('src', 'img/pexels-karolina-grabowska-4207708.jpg');
  paperImage.setAttribute('alt', 'Empty paper sheet on wooden table');
  paperOption.appendChild(paperImage); 

  return paperOption;
}

function createScissorsOption() {
  const scissorsOption = document.createElement('div');
  scissorsOption.classList.add('paper-option');
  
  const scissorsImage = document.createElement('img');
  scissorsImage.classList.add('scissors-image');
  scissorsImage.setAttribute('src', 'img/pexels-mike-b-211710.jpg');
  scissorsImage.setAttribute('alt', 'Red scissors near green leaf');
  scissorsOption.appendChild(scissorsImage); 

  return scissorsOption;
}

function createUnknownOption() {
  const unknownOption = document.createElement('div');
  unknownOption.classList.add('unknown-option');
  
  const unknownText = document.createElement('p');
  unknownText.textContent = '?';
  unknownOption.appendChild(unknownText);
  
  return unknownOption;
}

function createGameBoard() {
  const gameBoard = document.createElement('div');
  gameBoard.classList.add('game-board');
  
  const playerOptions = document.createElement('div');
  playerOptions.classList.add('player-options');
  gameBoard.appendChild(playerOptions);
  
  const rockOption = createRockOption();
  playerOptions.appendChild(rockOption);

  const paperOption = createPaperOption();
  playerOptions.appendChild(paperOption);

  const scissorsOption = createScissorsOption();
  playerOptions.appendChild(scissorsOption);
  
  const versus = document.createElement('p');
  versus.classList.add('versus');
  versus.textContent = 'VS';
  gameBoard.appendChild(versus);
  
  const computerChoice = document.createElement('div');
  computerChoice.classList.add('computer-choice');
  gameBoard.appendChild(computerChoice);

  const unknownOption = createUnknownOption();
  computerChoice.appendChild(unknownOption);
  
  return gameBoard;

}

const gameContainer = document.querySelector('.game-container');
// gameContainer.appendChild(createGameSetup(10, 5));
// gameContainer.appendChild(createGameStatus(10));
gameContainer.appendChild(createGameBoard());
