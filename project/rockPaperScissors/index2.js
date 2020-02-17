const game = require('./game');

// var mine = process.argv[process.argv.length - 1];
var count = 0;

process.stdin.on('data', e => {
    const mine = e.toString().trim();
    const result = game(mine);

    if (result === -1) {
        count++;
    }
    if (count === 3) { //
       console.log('你太厉害了，我不玩了！');
       process.exit();
    }
});