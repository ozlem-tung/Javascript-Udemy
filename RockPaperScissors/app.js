const startGameBtn = document.getElementById('start-game-btn');
const ROCK = 'ROCK';
const PAPER = 'PAPER';
const SCISSORS = 'SCISSORS';
const DEFAULT_USER_CHOICE = 'ROCK';
const RESULT_DRAW = 'DRAW';
const RESULT_COMPUTER_WINS = 'COMPUTER_WINS';
const RESULT_PLAYER_WINS = 'PLAYER_WINS';
let gameIsRunning = false;

const getPlayerChoice = () => {
  const selection = prompt(
    `${ROCK}, ${PAPER} OR ${SCISSORS}`,
    ''
  ).toLocaleUpperCase();
  if (selection !== ROCK && selection !== PAPER && selection !== SCISSORS) {
    alert(`Invalid choice! We chose ${DEFAULT_USER_CHOICE} for you!`);
    return DEFAULT_USER_CHOICE;
  }
  return selection;
};

const getComputerChoice = () => {
  const randomValue = Math.random();
  if (randomValue < 0.34) {
    return ROCK;
  } else if (randomValue < 0.67) {
    return PAPER;
  } else return SCISSORS;
};

const getWinner = (cComputer, cPlayer = DEFAULT_USER_CHOICE) =>
  cComputer === cPlayer
    ? RESULT_DRAW
    : (cComputer === ROCK && cPlayer === SCISSORS) ||
      (cComputer === PAPER && cPlayer === ROCK) ||
      (cComputer === SCISSORS && cPlayer === PAPER)
    ? RESULT_COMPUTER_WINS
    : RESULT_PLAYER_WINS;

// const getWinner = function (cComputer, cPlayer) {
//   if (cComputer == cPlayer) {
//     return RESULT_DRAW;
//   } else if (
//     (cComputer === ROCK && cPlayer === SCISSORS) ||
//     (cComputer === PAPER && cPlayer === ROCK) ||
//     (cComputer === SCISSORS && cPlayer === PAPER)
//   ) {
//     return RESULT_COMPUTER_WINS;
//   } else if (
//     (cComputer === ROCK && cPlayer === PAPER) ||
//     (cComputer === PAPER && cPlayer === SCISSORS) ||
//     (cComputer === SCISSORS && cPlayer === ROCK)
//   ) {
//     return RESULT_PLAYER_WINS;
//   }
// };

startGameBtn.addEventListener('click', function () {
  if (gameIsRunning) {
    return;
  }
  gameIsRunning = true;
  console.log('Game is starting...');
  const playerChoice = getPlayerChoice();
  const computerChoice = getComputerChoice();
  let winner;
  if (playerChoice) {
    winner = getWinner(computerChoice, playerChoice);
  } else {
    winner = getWinner(computerChoice);
  }

  let message = `You picked: ${
    playerChoice || DEFAULT_USER_CHOICE
  }, computer picked: ${computerChoice}, therefore you `;
  if (winner == RESULT_DRAW) {
    message = message + 'had a DRAW';
  } else if (winner == RESULT_COMPUTER_WINS) {
    message = message + 'LOST';
  } else {
    message = message + 'WON';
  }
  alert(message);
  gameIsRunning = false;
});
