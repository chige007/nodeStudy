const Path = require('path');

// 规范化路径字符串
var path = '/root//test1////test//fs/..';
var path2 = Path.normalize(path);
console.log(path2);

// 连接任意多个路径字符串
var path3 = Path.join('/root/', 'test1////', 'test/bbb/234', 'qwer', '..');
console.log(path3);

// 找出一个绝对路径和另一个绝对路径的相对关系
var path4 = Path.relative(path, path3);
console.log(path4);
