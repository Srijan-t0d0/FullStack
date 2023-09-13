let currentPlayer = "X"
let board = Array(9).fill(null)



function checkWin(){
    if(
        (board[0] !== null && board[0] === board[1] && board[0] === board[2]) ||
        (board[3] !== null && board[3] === board[4] && board[3] === board[5]) ||
        (board[6] !== null && board[6] === board[7] && board[6] === board[8]) ||
        (board[0] !== null && board[0] === board[3] && board[0] === board[6]) ||
        (board[1] !== null && board[1] === board[4] && board[1] === board[7]) ||
        (board[2] !== null && board[2] === board[5] && board[2] === board[8]) ||
        (board[0] !== null && board[0] === board[4] && board[0] === board[8]) ||
        (board[6] !== null && board[6] === board[4] && board[6] === board[2])
        ){
            document.write(`Winner is ${currentPlayer}`)
        }
    if (!board.some(e => e === null)){
        document.write(`Draw!!`);
        return;
    }
    }
    
function handleClick(el){
    const id = Number(el.id);
    if(board[id] === null){
        el.innerText = currentPlayer;
        board[id] = currentPlayer;
        checkWin();
        currentPlayer = currentPlayer === 'X' ?  '0' : 'X';
        console.log(board);
    }
}