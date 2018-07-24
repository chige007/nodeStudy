// path模块提供了一系列处理文件路径的工具
const path = require('path');

// 将所有的参数连接起来，返回一个路径
let outputPath = path.join(__dirname, 'node', 'node.js');
console.log(outputPath);

// 返回路径参数的拓展名，无拓展名则返回空字符串
let ext = path.extname(path.join(__dirname, 'node', 'node.js'));
console.log(ext);

// 将路径解析为一个路径对象
let parse = path.parse(outputPath);
console.log(parse);

// 接受一个路径对象为参数，返回一个完整的路径地址
let format = path.format(parse);
console.log(format);