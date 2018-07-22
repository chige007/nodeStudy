const Util = require('util');
let obj = {
    name: 'John',
    age: 27,
    sex: 'male',
    isHandson: true
}
let str = Util.inspect(obj,{
    'color': true
});
console.log(str);

Util.format('%s is %d', 'tt',12);

console.log(Util.isDate(new Date()));
console.log(Util.isArray([1,2,3]));
console.log(Util.isRegExp(/(1,2)/g));
