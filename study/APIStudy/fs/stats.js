const fs = require('fs');

fs.stat('./files/test.xlsx', function(err, stats){
    console.log(stats);
    // 是否 标准文件
    var isFile = stats.isFile();
    console.log(isFile);
    // 是否 目录
    var isDirectory = stats.isDirectory();
    console.log(isDirectory);
    // 是否 块设备
    var isBlockDevice = stats.isBlockDevice();
    console.log(isBlockDevice);
    // 是否 字符设备
    var isCharacterDevice = stats.isCharacterDevice();
    console.log(isCharacterDevice);
    // 是否 符号连接
    var isSymbolicLink = stats.isSymbolicLink();
    console.log(isSymbolicLink);
    // 是否 命令管道
    var isFIFO = stats.isFIFO();
    console.log(isFIFO);
    // 是否 套接字
    var isSocket = stats.isSocket();
    console.log(isSocket);
});