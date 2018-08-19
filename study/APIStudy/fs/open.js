const fs = require('fs');

// fs.open(path, flags[, mode], callback)
// Path 文件的路径
// Flags: 文件打开的方式
// Mode: 设置文件模式（权限），文件创建默认权限为可读写
// Callback: 回调函数

fs.open('./files/test.xlsx', 'r+', function(err, fd){// fd: 文件描述符
    if(err){
        return console.error(err);
    }
    console.log('open success!');
    console.log(fd);
    fs.close(fd, function(err){
        if(err){
            console.log(err);
        }
        console.log("close success!");
    });
});