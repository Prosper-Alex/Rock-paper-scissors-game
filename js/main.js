const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissors = document.getElementById("scissors");
const message = document.getElementById("message");
const scoreBoard = document.getElementById("score-board");
const livesBoard = document.getElementById("lives-board");
const resetButton = document.getElementById("reset-button");

const scores = {
  computer: 0,
  player: 0,
};

const lives = {
  computer: 3,
  player: 3,
};

function computerOption() {
  return Math.floor(Math.random() * 3 + 1);
}

function getOptionName(option) {
  switch (option) {
    case 1:
      return "Rock";
    case 2:
      return "Paper";
    case 3:
      return "Scissors";
    default:
      return "";
  }
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
    scores.computer++;
    lives.player--;
  } else {
    message.innerHTML = `Computer chose ${getOptionName(
      computer
    )}, Player Wins!`;
    scores.player++;
    lives.computer--;
  }

  renderScores();
  renderLives();
  checkGameOver();
}

function renderScores() {
  scoreBoard.innerHTML = `Computer: ${scores.computer}, Player: ${scores.player}`;
}

function renderLives() {
  livesBoard.innerHTML = `Computer Lives: ${lives.computer}, Player Lives: ${lives.player}`;
}

function checkGameOver() {
  if (lives.computer === 0) {
    message.innerHTML = "Game Over! Player Wins!";
    disableButtons();
  } else if (lives.player === 0) {
    message.innerHTML = "Game Over! Computer Wins!";
    disableButtons();
  }
}

function disableButtons() {
  rock.disabled = true;
  paper.disabled = true;
  scissors.disabled = true;
}

function enableButtons() {
  rock.disabled = false;
  paper.disabled = false;
  scissors.disabled = false;
}

function resetGame() {
  scores.computer = 0;
  scores.player = 0;
  lives.computer = 3;
  lives.player = 3;
  enableButtons();
  message.innerHTML = "Game restarted! Make your move.";
  renderScores();
  renderLives();
}

rock.addEventListener("click", () => playerOption(1));
paper.addEventListener("click", () => playerOption(2));
scissors.addEventListener("click", () => playerOption(3));
resetButton.addEventListener("click", resetGame);
