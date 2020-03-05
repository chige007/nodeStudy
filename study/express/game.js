var game = function(mine) {
    var random = Math.random() * 3;

    if (random < 1) {
        var computer = 'rock';
    } else if (random < 2) {
        var computer = 'paper';
    } else {
        var computer = 'scissors';
    }

    if (!(mine == 'rock' || mine == 'paper' || mine == 'scissors')) {
        return {
            tips: `无法识别你出了什么`,
            result: 9
        }
    } else if (computer === mine) {
        return {
            tips: `电脑出${computer}，平局`,
            result: 0
        };
    } else if (
        (computer == 'rock' && mine == 'paper') || 
        (computer == 'paper' && mine == 'scissors') || 
        (computer == 'scissors' && mine == 'rock')
    ) {
        return {
            tips: `电脑出${computer}，你赢了`,
            result: -1
        };
    } else {
        return {
            tips: `电脑出${computer}，你输了`,
            result: 1
        };
    }
}

module.exports = game;