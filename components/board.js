const prompt = require('prompt');

prompt.start();

let gameOver = false;
let move = 'X';
const board = [
  [' ', ' ', ' '],
  [' ', ' ', ' '],
  [' ', ' ', ' '],
]

const renderBoard = (board) => (
  `${board[0][0]} | ${board[0][1]} | ${board[0][2]}\n----------\n${board[1][0]} | ${board[1][1]} | ${board[1][2]} \n----------\n${board[2][0]} | ${board[2][1]} | ${board[2][2]} \n`
)

const checkCol = (board, col) => {
  let res = '';
  for (let i = 0; i < 3; i++) {
    res.push(board[i][col]);
  }
  if (res === 'XXX' || 'OOO') gameOver = gameOver || true;
}

const checkRow = (board, row) => {
  if (board[row].join('') === 'OOO') gameOver = gameOver || true;
  if (board[row].join('') === 'XXX') gameOver = gameOver || true;
}

const checkDiags = (board) => {
  let res = '';
  for (let i = 0; i < 3; i++) {
    res.push(board[i][i])
  }
  if (res === 'XXX' || 'OOO') gameOver = gameOver || true;

  for (let i = 0, j = 2; i < 3; i++ , j--) {
    res.push(board[i][j])
  }
  if (res === 'XXX' || 'OOO') gameOver = gameOver || true;
}
const isGameOver = (board) => {
  for (let i = 0; i < 3; i++) {
    checkRow(board, i);
    checkCol(board, i);
  }
  checkDiags(board);
}

const play = () => {
  console.log(renderBoard(board));
  console.log(`It is ${move}'s turn`)
  prompt.get([`row: `, 'col: '], function (err, result) {
    if (result.row < 3 && result.col < 3) {
      console.log('Command-line input received:');
      console.log(result.row);
      console.log(result.col);
      console.log('test');
      board[result.row][result.col] = move;
      if (move = 'X') {
        move = 'O';
      } else {
        move = 'X';
      }
      isGameOver(board);
      console.log(renderBoard(board));
      if (!gameOver) {
        console.log('play')
        play();
      }
    }
  });
}

play();
