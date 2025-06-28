const rock = document.getElementById('rock');
const paper = document.getElementById('paper');
const message = document.getElementById('message');
const scissors = document.getElementById('scissors');
const scoreBoard = document.getElementById('score-board');

const scores = {
  computer: 0,
  player: 0,
};

function getOptionName(option) {
  switch (option) {
    case 1:
      return 'Rock';
    case 2:
      return 'Paper';
    case 3:
      return 'Scissors';
    default:
      'Invalid Option!';
  }
}

function computerOption() {
  const option = Math.random();
  return Math.floor(option * 3 + 1);
}

function playerOption(player) {
  const computer = computerOption();

  if (computer === player) {
    message.innerHTML = `Computer chose ${getOptionName(
      computer
    )}, It's a Draw!`;
  } else if (
    (computer === 1 && player === 3) ||
    (computer === 2 && player === 1) ||
    (computer === 3 && player === 2)
  ) {
    message.innerHTML = `Computer chose ${getOptionName(
      computer
    )}, Computer Wins!`;
    scores.computer = scores.computer + 1;
  } else if (
    (player === 1 && computer == 3) ||
    (player === 2 && computer === 1) ||
    (player === 3 && computer === 2)
  ) {
    message.innerHTML = `Computer chose ${getOptionName(
      computer
    )}, Player Wins!`;
    scores.player = scores.player + 1;
  }

  renderScores()
}

rock.addEventListener('click', function () {
  playerOption(1);
});

paper.addEventListener('click', function () {
  playerOption(2);
});

scissors.addEventListener('click', function () {
  playerOption(3);
});

// Render Scores
function renderScores() {
  scoreBoard.innerHTML = `Computer: ${scores.computer}, Player: ${scores.player}`;
}
