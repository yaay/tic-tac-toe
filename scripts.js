const Player = (sign) => {
    return { sign }
} 

const gameBoard = (() => {
    const board = ['', '', '', '', '', '', '', '', ''];

    const addSign = (sign, pos) => {
        board[pos] = sign;
        console.log(board)
    }
    
    return {
        addSign,
        board
    }
})();

// gameBoard.addSign('o', 2)


 

const boardBox = document.querySelectorAll('.bord-box');

var playerState = 'O'

boardBox.forEach(box => {
    box.addEventListener("click", (e) => {
        const boardPosition = e.target.dataset.index
        if (box.innerHTML === "") {
            if (playerState === 'O') {
                box.innerHTML = "X";
                window.playerState = 'X'
                gameBoard.addSign('X', boardPosition)
                
                console.log(playerState);
            } else {
                box.innerHTML = "O";
                window.playerState = 'O';
                gameBoard.addSign('O', boardPosition)
                console.log(playerState);
            }   
        }

        // console.log(gameBoard.board)
    })
})



[0, 1, 2]