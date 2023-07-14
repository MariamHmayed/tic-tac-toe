const cells = document.querySelector("table");
const reset = document.querySelector("button");

let selected = [];
let player = '';


cells.addEventListener('click', (e)=> {
    if (selected.length <= 8) {
        let id = e.target.id;
        player == 'O'?output(id, 'X'): output(id, 'O');
        selected.push(id);
      }
    });

reset.addEventListener('click',()=>{
      selected.forEach(x => output(x,''));
      selected = [];
    })

removeEventListener('click',
    function checkWinner() {
    // check for rows
    for (let i = 0; i < 3; i++) {
      if (board[i][0] === board[i][1] && board[i][0] === board[i][2] && board[i][0] !== '') {
        showResult(board[i][0]);
        return;
       } }
    }
    // check for columns
    for (let i = 0; i < 3; i++) {
      if (board[0][i] === board[1][i] && board[0][i] === board[2][i] && board[0][i] !== '') {
        showResult(board[0][i]);
        return;
      }
    }
    // check for diagonals
    if (board[0][0] === board[1][1] && board[0][0] === board[2][2] && board[0][0] !== '') {
      showResult(board[0][0]);
      return;
    }
    if (board[0][2] === board[1][1] && board[0][2] === board[2][0] && board[0][2] !== '') {
      showResult(board[0][2]);
      return;
    }
    // check for a tie
    // if all cells are filled and no winner
    var count = 0;
    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        if (board[i][j] != '') {
          count++;
        }
      }
    }
    if (count == 9) {
      showResult('Tie');
      return;
    }
  

function output(id, val) {
      player = val;
      document.getElementById(id).innerHTML = val;
    }

  
    