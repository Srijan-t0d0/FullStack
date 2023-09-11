let currentPlayer = "X"
let board = Array(9).fill(null)
function handleClick(el){
    const id = Number(el.id);
    if(board[id] === null){
        el.innerText = currentPlayer;
        board[id] = currentPlayer;
        currentPlayer = currentPlayer === 'X' ?  '0' : 'X';
        console.log(board);
    }
    
    
}