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


function getRandomComputerMove(gameBoard) {
    let validMoves = [];
    for (let i=0; i<gameBoard.length; i++) {
        if (gameBoard[i] === 0) {
            validMoves.push(i);
        }
    }

    let randomMove = Math.floor( Math.random() * validMoves.length );
    return validMoves[randomMove];
}


export function getComputerMove(gameBoard) {
    
    let winningCombinationChecks = [
        {
            indexes: [0, 4, 8, 12],
            step: 1,
            count: 4
        },
        {
            //for rows
            indexes: [0, 1, 2, 3],
            step: 1,
            count: 4
        },
        {
            //for diagonals
            indexes: [0, 5, 10, 15],
            step: 0,
            count: 1
        },
        {
            indexes: [3, 6, 9, 12],
            step: 0,
            count: 1
        }
    ];

    for (let check of winningCombinationChecks) {
        let firstPos = check.indexes[0];
        for (let i=0; i<check.count; i++) {
            let combination = gameBoard[firstPos + check.indexes[0]].toString()
                            + gameBoard[firstPos + check.indexes[1]].toString()
                            + gameBoard[firstPos + check.indexes[2]].toString()
                            + gameBoard[firstPos + check.indexes[3]].toString();
            
            switch (combination) {
                case "1110":
                case "2220":
                    return firstPos + check.indexes[3];
                
                case "1101":
                case "2202":
                    return firstPos + check.indexes[2];
                
                case "1011":
                case "2022":
                    return firstPos + check.indexes[1];
                
                case "0111":
                case "0222":
                    return firstPos + check.indexes[0];
                
                default:
                    break;
            }

            firstPos += check.step;
        }
    }

    return getRandomComputerMove(gameBoard);
}