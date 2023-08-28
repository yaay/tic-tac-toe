const Player = (sign) => {
    return { sign }
}

const gameBoard = (() => {

    const rowsColumns = 9
    const board = []

    for (let i = 0; i < rowsColumns; i++) {
        board.push("");
    }

    const addSign = (sign, pos) => {
        board[pos] = sign;
        console.log(board)
    }

    return {
        addSign,
        board
    }
});

// gameBoard.addSign('o', 2)


const gameController = () => {
    const PlayerX = Player('X');
    const PlayerO = Player('O');

    let win = false
    const getWin = () => win

    const board = gameBoard();

    let activePlayer = PlayerX

    const getActivePlayer = () => activePlayer

    const switchTurns = () => {
        if (activePlayer === PlayerX) {
            activePlayer = PlayerO
        } else {
            activePlayer = PlayerX
        }
    }

    const playTurn = (boardPosition) => {
        let playerSign = getActivePlayer().sign
        if (board.board[boardPosition] === "") {
            board.addSign(playerSign, boardPosition)
            console.log(`Player ${playerSign} played his turn`)

            checkWinner()
            if (!win) {
                switchTurns()
            }
            
            
        }
    }

    const winConditions = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ];

    const checkWinner = () => {
        if (
            winConditions.some(innerArray => {
                return innerArray.every(index => board.board[index] === activePlayer.sign);
            })
        ) {
            console.log(`winnn ${activePlayer.sign}`)
            win = true
        } 
    };

    const checkDraw = () => {
        // console.log(board.board)
        if (board.board.every(index => index != '')) {
            console.log('Draw')
        } else {
            console.log('naada')
        }
    }



    return {
        playTurn, getActivePlayer, board, getWin, checkDraw
    }

}


const displayController = (() => {
    const boardBox = document.querySelectorAll('.bord-box');
    const gc = gameController()
    const sign = gc.getActivePlayer()
    const draw = gc.checkDraw()

    const infoScreen = document.querySelector('.info-screen')

    boardBox.forEach(box => {
        box.addEventListener("click", (e) => {
            const boardPosition = e.target.dataset.index
            gc.playTurn(boardPosition)
            box.innerHTML = gc.board.board[boardPosition];
            if (!gc.getWin()) {
                console.log(gc.getWin())
                infoScreen.textContent = `It's Player ${gc.getActivePlayer().sign} Turn`
            } else if (gc.board.board.every(index => index != '')) {
                infoScreen.textContent = `It's a draw!`
            } else {
                infoScreen.textContent = `Player ${gc.getActivePlayer().sign} Won!`
            }
            
        })
    })

})();





var playerState = 'O'



// boardBox.forEach(box => {
//     box.addEventListener("click", (e) => {
//         const boardPosition = e.target.dataset.index
//         if (box.innerHTML === "") {
//             if (playerState === 'O') {
//                 box.innerHTML = "X";
//                 window.playerState = 'X'
//                 gameBoard.addSign('X', boardPosition)

//                 console.log(playerState);
//             } else {
//                 box.innerHTML = "O";
//                 window.playerState = 'O';
//                 gameBoard.addSign('O', boardPosition)
//                 console.log(playerState);
//             }
//         }

//         // console.log(gameBoard.board)
//     })
// })


