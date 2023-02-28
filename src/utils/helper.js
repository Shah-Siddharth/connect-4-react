import * as constants from "./constants";

export function checkWinner(gameBoard, currentMove, currentPlayer) {

    let board = [...gameBoard];
    board[currentMove] = currentPlayer;

    const winningCombinations = [
        [0, 1, 2, 3],
        [4, 5, 6, 7],
        [8, 9, 10, 11],
        [12, 13, 14, 15],
        [0, 4, 8, 12],
        [1, 5, 9, 13],
        [2, 6, 10, 14],
        [3, 7, 11, 15],
        [0, 5, 10, 15],
        [3, 6, 9, 12]
    ];

    for (let i=0; i<winningCombinations.length; i++) {
        const [c1, c2, c3, c4] = winningCombinations[i];
        if (board[c1] !== constants.NO_PLAYER &&
            board[c1] === board[c2] &&
            board[c2] === board[c3] &&
            board[c3] === board[c4]) {
                return true
        }
    }

    return false;
}


export function checkDraw(gameBoard, currentMove, currentPlayer) {

    let board =[...gameBoard];
    board[currentMove] = currentPlayer;

    //we check if no empty circles are left
    let emptyCircles = board.reduce((accumulator, currentVal) => {
        return accumulator + (currentVal === constants.NO_PLAYER);
    }, 0);

    return emptyCircles === 0;
}