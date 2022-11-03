let players = ['x', 'o'];
let activePlayer = 0;
let board = [];

function startGame() {
  board = [
    ['', '', ''],
    ['', '', ''],
    ['', '', '']
  ];    
  
  renderBoard(board);
}

function click(row, col) {
    board[row][col] = players[activePlayer];
    renderBoard(board);

    checkWinner(row, col);
} 

function changePlayer() {
  activePlayer = activePlayer === 0 ? 1 : 0;
}

function checkWinner(row, col) {
  let winner = players[activePlayer];

  for (let i = 0; i < 3; i++) {

    // horizontal && vertical

    if(board[i][0] === winner && board[i][1] === winner && board[i][2] === winner ||
      board[0][i] === winner && board[1][i] === winner && board[2][i] === winner) {
        showWinner(players.indexOf(winner));
      } 

    // diagonal

    else if(board[0][0] === winner && board[1][1] === winner && board[2][2] === winner ||
      board[2][0] === winner && board[1][1] === winner && board[0][2] === winner) {
        showWinner(players.indexOf(winner));
      }

    // tie

    else if(board[0].indexOf('') === -1 && 
      board[1].indexOf('') === -1 && 
      board[2].indexOf('') === -1) {
        let header = modalEl.getElementsByTagName('h2')[0];
        header.textContent = '😺Ничья!😸';
        modalEl.classList.remove('hidden');
      }

    else {
      changePlayer();
    }
  }
}