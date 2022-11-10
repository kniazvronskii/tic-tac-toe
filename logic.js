const players = ['x', 'o'];
const boardSize = 3;

let activePlayer;
let sum;
let board;

function startGame() {
  board = [];
  activePlayer = 0;
  sum = 0;

  boardGeneration(boardSize);

  renderBoard(board);
}

function boardGeneration(boardSize){
  for(let i = 0; i < boardSize; i++) {
    board[i] = [];
      for(let j = 0; j < boardSize; j++) {
        board[i][j] = '';
      }
  }
}

function click(row, col) {
  sum++;
  board[row][col] = players[activePlayer];
  renderBoard(board);

  checkWinner(row, col);
  changePlayer();
}

function changePlayer() {
  activePlayer = activePlayer === 0 ? 1 : 0;
}

function checkWinner(row, col) {
  let winner = players[activePlayer];
  let horizontal = 0;
  let vertical = 0;
  let diagonal = 0;
  let antidiagonal = 0;

  for (let i = 0; i < board.length; i++) {

    if(board[+row][i] === winner) {
    horizontal++;
    } 

    if(board[i][+col] === winner) {
      vertical++;
    }

    if(board[i][i] === winner) {
      diagonal++;
    }

    if(board[i][board[i].length - i - 1] === winner) {
      antidiagonal++;
    }
  }

  if (horizontal === board.length || 
    vertical === board.length || 
    diagonal === board.length || 
    antidiagonal === board.length) {
    showWinner(activePlayer);
  } else if(sum === board.length**2) {
    let header = modalEl.getElementsByTagName('h2')[0];
    header.textContent = '😺Ничья!😸';
    modalEl.classList.remove('hidden');
  } 
}

