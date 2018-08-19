const net = require('net');

// net.createServer([options][,connectionListener])
// options: 对象参数值，有两个布尔类型的属性allowHalfOpen和pauseOnConnect,都是false
// connectionListener: 一个当客户端与服务器建立连接时的回调函数，以socket端口对象作为参数

// server.listen(port[,host][,backlog][,callback]);
// port: 监听的端口号 ， 0则随机分配一个端口号
// host: 服务器地址
// backlog: 等待队列最大长度
// callback: 回调函数

var server = net.createServer((socket) => {
    console.log('有人连接了');
    // 最大连接数
    server.maxConnections = 10;
    server.getConnections((err, count) => {
        console.log('连接数：' + count);
    });

    socket.write('Hello, client!', () => {
        console.log('server send: ' + socket.bytesWritten);
    });
    
    socket.on('data', (data) => {
        console.log(data.toString());
        console.log('server get: ' + socket.bytesRead);
    });
});

server.listen(18001);

server.on('listening', () => {
    console.log('listening!');
});
server.on('connection', () => {
    console.log('connection!');
});
server.on('close', () => {
    console.log('close!');
});
server.on('error', () => {
    console.log('error!');
});

var address = server.address();
// 服务器监听的端口号
console.log('端口号：' + address.port);
// 监听的地址
console.log('地址：' + address.address);
// IPv4还是IPv6
console.log('ip模式：' + address.family);