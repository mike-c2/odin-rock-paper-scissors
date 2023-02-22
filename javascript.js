function getGameSetup() {
  const setupContainer = document.createElement('div');
  setupContainer.classList.add('game-setup');

  const welcome = document.createElement('p');
  welcome.textContent = 'Welcome to the Game!';
  setupContainer.appendChild(welcome);
  
  const howManyRounds = document.createElement('p');
  howManyRounds.textContent = 'Select how many rounds that you would like to play, then click Start';
  setupContainer.appendChild(howManyRounds);
  
  const roundSelectContainer = document.createElement('div');
  setupContainer.appendChild(roundSelectContainer);
  
  const roundSelectLabel = document.createElement('label');
  roundSelectLabel.setAttribute('for', 'number-rounds');
  roundSelectLabel.textContent = 'Number of Rounds:';
  roundSelectContainer.appendChild(roundSelectLabel);

  const numberOfRounds = document.createElement('select');
  numberOfRounds.setAttribute('name', 'Number of Rounds');
  numberOfRounds.setAttribute('id', 'number-rounds');
  roundSelectContainer.appendChild(numberOfRounds);
  
  for(let i = 1; i <= 10; i++) {
    const option = document.createElement('option');
    option.setAttribute('value', i.toString());
    option.textContent = i.toString();
    if(i === 5) option.selected = true;
    numberOfRounds.appendChild(option);
  }
  
  const start = document.createElement('button');
  start.setAttribute('type', 'button');
  start.setAttribute('id', 'start');
  start.textContent = 'Start';
  setupContainer.appendChild(start);
  
  return setupContainer;
}

const gameContainer = document.querySelector('.game-container');
gameContainer.appendChild(getGameSetup());