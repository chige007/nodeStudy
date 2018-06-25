/**
 * New node file
 */
const EventEmitter = require('events').EventEmitter;

let life = new EventEmitter();

function water(who){
	console.log(who + ' water');
}
life.on('dosomething',function(who){
	console.log(who + ' watchTV');
});
life.on('dosomething',function(who){
	console.log(who + ' wash');
});
life.on('dosomething',function(who){
	console.log(who + ' study');
});
life.on('dosomething',function(who){
	console.log(who + ' go to toilet');
});
life.on('dosomething',function(who){
	console.log(who + ' sleep');
});
life.on('dosomething',water);
life.setMaxListeners(11);//设置绑定事件最大值

life.removeListener('dosomething',water);//删除一个监听事件

life.emit('dosomething', 'John');//触发事件

console.log(life.listeners('dosomething').length);
life.removeAllListeners();//删除所有监听事件
console.log(EventEmitter.listenerCount(life,'dosomething'));
