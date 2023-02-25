const MAX_NUMBER_OF_ROUNDS = 10;
const DEFAULT_NUMBER_OF_ROUNDS = 5;

const ROCK = 'Rock';
const PAPER = 'Paper';
const SCISSORS = 'Scissors'

function removeAllChildNodes(parent) {
  while (parent.firstChild) {
    parent.removeChild(parent.firstChild);
  }
}

function createRoundSelector(maxNumberOfRounds, defaultNumberOfRounds = 1) {
  if (isNaN(maxNumberOfRounds) || maxNumberOfRounds < 1) {
    let errorMessage = `numberOfRounds value ${maxNumberOfRounds}`;
    errorMessage += ' is not valid, it will be set to 1 instead.';
    console.error(errorMessage);
    maxNumberOfRounds = 1;
  }

  if (isNaN(defaultNumberOfRounds) || defaultNumberOfRounds < 1) {
    let errorMessage = `defaultRound value ${defaultNumberOfRounds}`;
    errorMessage += ' is not valid, it will be set to 1 instead.';
    console.error(errorMessage);
    defaultNumberOfRounds = 1;
  }

  if (defaultNumberOfRounds > maxNumberOfRounds) {
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

  for (let i = 1; i <= maxNumberOfRounds; i++) {
    const option = document.createElement('option');
    option.setAttribute('value', i.toString());
    option.textContent = i.toString();

    if (i === defaultNumberOfRounds) {
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
  roundInfo.setAttribute('id', 'round-info');

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

  const rockImage = document.createElement('img');
  rockImage.classList.add('rock-image');
  rockImage.setAttribute('src', 'img/pexels-pixabay-161702.jpg');
  rockImage.setAttribute('alt', 'Tilt shift lens photography of stone');
  rockOption.appendChild(rockImage);

  return rockOption;
}

function createRockOptionHover() {
  const rockOption = createRockOption();
  rockOption.classList.add('rock-option');

  rockOption.addEventListener('click', chooseRock);

  return rockOption;
}

function createRockOptionNoHover() {
  const rockOption = createRockOption();
  rockOption.classList.add('rock-option-no-hover');

  return rockOption;
}

function createPaperOption() {
  const paperOption = document.createElement('div');

  const paperImage = document.createElement('img');
  paperImage.classList.add('paper-image');
  paperImage.setAttribute('src', 'img/pexels-karolina-grabowska-4207708.jpg');
  paperImage.setAttribute('alt', 'Empty paper sheet on wooden table');
  paperOption.appendChild(paperImage);

  return paperOption;
}

function createPaperOptionHover() {
  const paperOption = createPaperOption();
  paperOption.classList.add('paper-option');

  paperOption.addEventListener('click', choosePaper);

  return paperOption;
}

function createPaperOptionNoHover() {
  const paperOption = createPaperOption();
  paperOption.classList.add('paper-option-no-hover');

  return paperOption;
}

function createScissorsOption() {
  const scissorsOption = document.createElement('div');

  const scissorsImage = document.createElement('img');
  scissorsImage.classList.add('scissors-image');
  scissorsImage.setAttribute('src', 'img/pexels-mike-b-211710.jpg');
  scissorsImage.setAttribute('alt', 'Red scissors near green leaf');
  scissorsOption.appendChild(scissorsImage);

  return scissorsOption;
}

function createScissorsOptionHover() {
  const scissorsOption = createScissorsOption();
  scissorsOption.classList.add('scissors-option');

  scissorsOption.addEventListener('click', chooseScissors);

  return scissorsOption;
}

function createScissorsOptionNoHover() {
  const scissorsOption = createScissorsOption();
  scissorsOption.classList.add('scissors-option-no-hover');

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

  const rockOption = createRockOptionHover();
  playerOptions.appendChild(rockOption);

  const paperOption = createPaperOptionHover();
  playerOptions.appendChild(paperOption);

  const scissorsOption = createScissorsOptionHover();
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
  gameInfoText.setAttribute('id', 'game-info-text');
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
  const gameContainer = document.querySelector('.game-container');
  removeAllChildNodes(gameContainer);

  const gameSetup = createGameSetup(MAX_NUMBER_OF_ROUNDS,
    DEFAULT_NUMBER_OF_ROUNDS);

  gameContainer.appendChild(gameSetup);
}

function getComputerChoice() {
  const computerChoiceContainer = document.querySelector('.computer-choice');
  let choice;
  let option;

  switch (Math.floor(Math.random() * 3)) {
    case 0:
      choice = ROCK;
      option = createRockOptionNoHover();
      break;
    case 1:
      choice = PAPER;
      option = createPaperOptionNoHover();
      break;
    default:
      choice = SCISSORS;
      option = createScissorsOptionNoHover();
  }

  removeAllChildNodes(computerChoiceContainer);
  computerChoiceContainer.appendChild(option);

  return choice;
}

function setGameInfoText(newText) {
  const gameInfoText = document.getElementById('game-info-text');
  gameInfoText.textContent = newText;
}

function incrementPlayerPoints() {
  const points = document.getElementById('player-points');
  const newValue = Number(points.textContent) + 1;
  points.textContent = newValue.toString();
}

function incrementComputerPoints() {
  const points = document.getElementById('computer-points');
  const newValue = Number(points.textContent) + 1;
  points.textContent = newValue.toString();
}

function incrementTiePoints() {
  const points = document.getElementById('tie-points');
  const newValue = Number(points.textContent) + 1;
  points.textContent = newValue.toString();
}

function endGame() {
  const playerOptions = document.querySelector('.player-options');

  // When the game ends, there is no longer a need for the
  // Rock, Paper, Scissors options to be clickable by the player.
  removeAllChildNodes(playerOptions);

  const rockOption = createRockOptionNoHover();
  playerOptions.appendChild(rockOption);

  const paperOption = createPaperOptionNoHover();
  playerOptions.appendChild(paperOption);

  const scissorsOption = createScissorsOptionNoHover();
  playerOptions.appendChild(scissorsOption);
  
  const roundInfo = document.getElementById('round-info');
  removeAllChildNodes(roundInfo);
  
  const newText = document.createElement('p');
  roundInfo.appendChild(newText);
  
  const playerPoints = Number(document.getElementById('player-points').textContent);
  const computerPoints = Number(document.getElementById('computer-points').textContent);
  
  if(playerPoints > computerPoints) {
    newText.textContent = 'Game Over, You Win!';
  } else if(playerPoints < computerPoints) {
    newText.textContent = 'Game Over, You Lose'
  } else {
    newText.textContent = "Game Over, it's a Tie";
  }
}

function processRound() {
  const lastRound = document.getElementById('last-round');
  const lastRoundValue = Number(lastRound.textContent);

  const currentRound = document.getElementById('current-round');
  let currentRoundValue = Number(currentRound.textContent);

  if (currentRoundValue < lastRoundValue) {
    currentRoundValue += 1;
    currentRound.textContent = currentRoundValue.toString();

  } else {
    endGame();
  }
}

function chooseRock() {
  const computerChoice = getComputerChoice();

  switch(computerChoice) {
    case ROCK:
      setGameInfoText(`It's a Tie, you both played ${ROCK}`);
      incrementTiePoints();
      break;
    case PAPER:
      setGameInfoText(`You Lose, ${ROCK} is covered by ${PAPER}`);
      incrementComputerPoints();
      break;
    case SCISSORS:
      setGameInfoText(`You Win! ${ROCK} breaks ${SCISSORS}`);
      incrementPlayerPoints();
      break;
  }
  
  processRound();
}

function choosePaper() {
  const computerChoice = getComputerChoice();

  switch(computerChoice) {
    case ROCK:
      setGameInfoText(`You Win! ${PAPER} covers ${ROCK}`);
      incrementPlayerPoints();
      break;
    case PAPER:
      setGameInfoText(`It's a Tie, you both played ${PAPER}`);
      incrementTiePoints();
      break;
    case SCISSORS:
      setGameInfoText(`You Lose, ${PAPER} is cut by ${SCISSORS}`);
      incrementComputerPoints();
      break;
  }
  
  processRound();
}

function chooseScissors() {
  const computerChoice = getComputerChoice();

  switch(computerChoice) {
    case ROCK:
      setGameInfoText(`You Lose, ${SCISSORS} is broken by ${ROCK}`);
      incrementComputerPoints();
      break;
    case PAPER:
      setGameInfoText(`You Win! ${SCISSORS} cuts ${PAPER}`);
      incrementPlayerPoints();
      break;
    case SCISSORS:
      setGameInfoText(`It's a Tie, you both played ${SCISSORS}`);
      incrementTiePoints();
      break;
  }
  
  processRound();
}

initializeGame();
