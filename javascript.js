const ROCK = 'Rock';
const PAPER = 'Paper';
const SCISSORS = 'Scissors'

function removeAllChildNodes(parent) {
  while(parent.firstChild) {
    parent.removeChild(parent.firstChild);
  }  
}

function createRoundSelector(maxNumberOfRounds, defaultNumberOfRounds = 1) {
  if(isNaN(maxNumberOfRounds) || maxNumberOfRounds < 1) {
    let errorMessage = `numberOfRounds value ${maxNumberOfRounds}`;
    errorMessage += ' is not valid, it will be set to 1 instead.';
    console.error(errorMessage);
    maxNumberOfRounds = 1;
  }
  
  if(isNaN(defaultNumberOfRounds) || defaultNumberOfRounds < 1) {
    let errorMessage = `defaultRound value ${defaultNumberOfRounds}`;
    errorMessage += ' is not valid, it will be set to 1 instead.';
    console.error(errorMessage);
    defaultNumberOfRounds = 1;
  }
  
  if(defaultNumberOfRounds > maxNumberOfRounds) {
    let warningMessage = `defaultRound value ${defaultNumberOfRounds} is`;
    warningMessage += ' greater than the numberOfRounds value';
    warningMessage += ` ${maxNumberOfRounds}. The defaultRound will be set to`;
    warningMessage += ` ${maxNumberOfRounds} instead.`;
    console.warn(warningMessage);
    defaultNumberOfRounds = maxNumberOfRounds;
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
  
  for(let i = 1; i <= maxNumberOfRounds; i++) {
    const option = document.createElement('option');
    option.setAttribute('value', i.toString());
    option.textContent = i.toString();

    if(i === defaultNumberOfRounds) {
      option.selected = true;
    }

    selectRoundsToPlay.appendChild(option);
  }
  
  return roundSelectContainer;
}

function createGameSetup(maxNumberOfRounds, defaulNumberOfRounds = 1) {
  const setupContainer = document.createElement('div');
  setupContainer.classList.add('game-setup');

  const welcome = document.createElement('p');
  welcome.textContent = 'Welcome to the Game!';
  setupContainer.appendChild(welcome);
  
  const howManyRounds = document.createElement('p');
  let textMessage = 'Select how many rounds that you would like to play,';
  textMessage += ' then click Start';
  howManyRounds.textContent = textMessage;
  setupContainer.appendChild(howManyRounds);
  
  const roundSelectContainer = createRoundSelector(maxNumberOfRounds,
    defaulNumberOfRounds);
  setupContainer.appendChild(roundSelectContainer);
  
  const start = document.createElement('button');
  start.setAttribute('type', 'button');
  start.setAttribute('id', 'start');
  start.textContent = 'Start';
  setupContainer.appendChild(start);
  
  start.addEventListener('click', startGame);
  
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

function createActiveGame(numberOfRounds) {
  const activeGame = document.createElement('div');
  activeGame.classList.add('active-game');

  const gameStatus = createGameStatus(numberOfRounds);
  activeGame.appendChild(gameStatus);

  const gameBoard = createGameBoard();
  activeGame.appendChild(gameBoard);
  
  const gameInfo = document.createElement('div');
  gameInfo.classList.add('game-info');
  activeGame.appendChild(gameInfo);
  
  const gameInfoText = document.createElement('p');
  gameInfoText.textContent = 'Click on either the Rock, Paper, or Scissors';
  gameInfo.appendChild(gameInfoText);
  
  const reset = document.createElement('button');
  reset.setAttribute('type', 'button');
  reset.setAttribute('id', 'reset');
  reset.textContent = 'Reset';
  gameInfo.appendChild(reset);
  
  reset.addEventListener('click', initializeGame);

  return activeGame;
}

function startGame() {
  const selectRoundsToPlay = document.getElementById('number-rounds');
  const numberOfRounds = selectRoundsToPlay.value;
  
  const gameContainer = document.querySelector('.game-container');
  removeAllChildNodes(gameContainer);
  
  const activeGame = createActiveGame(numberOfRounds);
  gameContainer.appendChild(activeGame);
}

function initializeGame() {
  const maxNumberOfRounds = 10;
  const defaultNumberOfRounds = 5;
  
  const gameContainer = document.querySelector('.game-container');
  removeAllChildNodes(gameContainer);
  
  const gameSetup = createGameSetup(maxNumberOfRounds, defaultNumberOfRounds);
  gameContainer.appendChild(gameSetup);
}

initializeGame();
// const gameContainer = document.querySelector('.game-container');
// gameContainer.appendChild(createGameSetup(10, 5));
// gameContainer.appendChild(createGameStatus(10));
// gameContainer.appendChild(createGameBoard());
// gameContainer.appendChild(createActiveGame(10));
