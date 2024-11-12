// set global variables to track the board and player turn
const { board } = GameBoard();
let marker = 'O';


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

// check win and draw
const checkWin = (board) => {

    const [a, b, c, d, e, f, g, h, i] = board;
    
    //checkWin 
    if (a === b && b === c && a !== '' ||
        d === e && e === f && d !== '' ||
        g === h && h === i && g !== '' ||
        a === d && d === g && a !== '' ||
        b === e && e === h && b !== '' ||
        c === f && f === i && c !== '' ||
        a === e && e === i && a !== '' ||
        c === e && e === g && c !== ''
    ) {
        if (marker === 'O') {
            console.log('Player2 wins');
        } else {
            console.log('Player1 wins!');
        }
        GameBoard();
        return;
    } else if
        (a !== '' && b !== '' && c !== '' && d !== '' && e !== '' && f !== '' && g !== '' && h !== '' && i !== '') {
        console.log("It is a draw");
        GameBoard();
        return
    }
}