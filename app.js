// make game board 
function GameBoard() {
    const board = new Array(9).fill("");
    return { board };
}

// create players
const Player = () => {
    const player1 = {
        name: 'Player 1',
        marker: 'X',
    }
    const player2 = {
        name: 'Player 2',
        marker: 'O',
    }
    return { player1, player2 }
}

// function to play game in console
function markField(field) {

    //get players
    const { player1, player2 } = Player();

    // set active player marker
    marker = marker === player2.marker ? player1.marker : player2.marker;

    // check and mark field on the board
    if (board[field] === '') {
        board[field] = marker;
        checkWin(board);
    } else {
        console.log("Mark another field this is marked");
        marker = marker === player2.marker ? player1.marker : player2.marker;
    }
    return marker;
}