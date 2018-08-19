const fs = require('fs');

// Node.js目前支持utf-8, ucs2、 ascii、 binary、 base64、 hex编码的文件，并不支持GBK/GB2312之类的编码，需用第三方模块的支持，建议使用iconv模块或iconv-lite模块，iconv模块仅支持linux
// fs.read(fd, buffer, offset, length, position, callback)
// fd: 文件描述符
// buffer: 数据写入的缓冲区
// offset: 缓冲区写入的写入偏移量
// length: 从文件中读取的字节数
// position: 文件读取的起始位置，如果null, 就从文件指针的位置读取
// callback: 回调函数，有err, bytesRead（读取字节数）, buffer（缓冲区对象）三个参数

// fs.readFile(filename[, options], callback)
// filename: 读取的文件
// options: 可选值对象，encoding(默认null),flag(默认‘r’))
// callback: 回调函数
// fs.readFile是在fs.read上的进一步封装， 两者主要区别是fs.readFile方法只能读取文件的部分内容。

fs.open('./files/text.txt', 'r', function(err, fd){
    // 缓冲区
    var readBuffer = new Buffer(1024),
    // 缓冲区写入偏移量
    offset = 0;
    // 缓冲区长度
    len = readBuffer.length,
    // 文件读取起始位置
    filePosition = 10,
    fs.read(fd, readBuffer, offset, len, filePosition, function(err, readByte){
        // 读取字节数
        console.log('读取数据总数：' + readByte + ' bytes');
        // readBuffer中的数据
        console.log(readBuffer.slice(0, readByte));
    });
});