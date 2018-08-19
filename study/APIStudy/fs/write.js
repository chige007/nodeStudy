const fs = require('fs');

// fs.writeFile(path, data[, options], callback)
// path: 文件路径
// data: 写入文件的数据
// options: 对象，包含encoding(默认utf-8), mode(0666)), flag(w)
// callback: 回调函数，只包含错误信息参数（err）

fs.writeFile('./files/text.txt', 'The first day I went to middle school, I found a special girl in my class. Her name sounds almost the same with mine. When the teachers or my classmates called one of us, we would both answer, then other students looked at us. We felt awkward. But soon we had our nicknames and it was convenient to distinguish us. Now we are good friends. Every time when we talk about the names, we think it is very interesting. We have a lot in common, which make our friendship become strong. I feel so lucky to find someone who shares the same interest with me, and the funny thing is that our names sound so closed.', function(err){
    if(err){
        return console.log(err);
    }
    console.log('写入成功！');
});

// fs.appendFile(file, data[, options], callback)
// file: 文件名或文件描述符
// data: 可以使String或Buffer对象
// options: 
// callback: 
fs.appendFile('./files/text2.txt', 'data to append', 'utf-8', (err) => {
    if(err){
        return console.log(err)
    }
    console.log('写入成功2！');
})