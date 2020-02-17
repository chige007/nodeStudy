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
        console.log('无法识别你出了什么');
    } else if (computer === mine) {
        console.log(`电脑出${computer}，平局`);
        return 0;
    } else if (
        (computer == 'rock' && mine == 'paper') || 
        (computer == 'paper' && mine == 'scissors') || 
        (computer == 'scissors' && mine == 'rock')
    ) {
        console.log(`电脑出${computer}，你赢了`);
        return -1;
    } else {
        console.log(`电脑出${computer}，你输了`);
        return 1;
    }
}

module.exports = game;