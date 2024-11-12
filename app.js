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