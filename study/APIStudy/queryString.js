const myQueryStrings = require('querystring');

let stringify = myQueryStrings.stringify({//序列化
	name : 'chenyc',
	sex : 'male',
	age : 27
});
console.log(stringify);

let stringify2 = myQueryStrings.stringify({
	name : 'chenyc',
	sex : 'male',
	age : 27
},',');
console.log(stringify2);

let stringify3 = myQueryStrings.stringify({
	name : 'chenyc',
	sex : 'male',
	age : 27
},',',':');
console.log(stringify3);

let parse = myQueryStrings.parse('name=chenyc&sex=male&age=27');
console.log(parse);

let parse2 = myQueryStrings.parse('name=chenyc,sex=male,age=27',',');
console.log(parse2);

let parse3 = myQueryStrings.parse('name:chenyc,sex:male,age:27',',',':');
console.log(parse3);

let escape = myQueryStrings.escape('<哈哈>');
console.log(escape);

let unescape = myQueryStrings.unescape('%3C%E5%93%88%E5%93%88%3E');
console.log(unescape);
