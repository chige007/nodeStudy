// console.log(process);
// console.log(__dirname);
// console.log(__filename);

var mine = process.argv[process.argv.length - 1];
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
} else if (
    (computer == 'rock' && mine == 'paper') || 
    (computer == 'paper' && mine == 'scissors') || 
    (computer == 'scissors' && mine == 'rock')
) {
    console.log(`电脑出${computer}，你赢了`);
} else {
    console.log(`电脑出${computer}，你输了`);
}