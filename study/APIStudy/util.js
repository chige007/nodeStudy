// 工具模块
const Util = require('util');
let obj = {
    name: 'John',
    age: 27,
    sex: 'male',
    isHandson: true
}
// 返回一个对象反序列化形成的字符串
let str = Util.inspect(obj,{
    'color': true
});
console.log(str);

// 在控制台输出，带时间戳
Util.log(str);

// 返回一个使用占位符格式化的字符串，类似C语言的printf，可用占位符有%s,$d,%j
Util.format('%s is %d', 'tt',12);

console.log(Util.isDate(new Date()));
console.log(Util.isArray([1,2,3]));
console.log(Util.isRegExp(/(1,2)/g));
