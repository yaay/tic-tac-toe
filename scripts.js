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
        addSign
    }
})();

gameBoard.addSign('o', 2)




const boardBox = document.querySelectorAll('.bord-box');


boardBox.forEach(box => {
    box.addEventListener("click", (e) => {
        box.innerHTML = "X"
        console.log('done', e);
    })
})