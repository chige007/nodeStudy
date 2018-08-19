var dgram = require('dgram');

var message = new Buffer('Hello Client!');

var socket = dgram.createSocket('udp4', (msg, rinfo) => {
    console.log(msg.toString());
    console.log(rinfo);

    socket.send(message, 0, message.length, rinfo.port, rinfo.address, (err, bytes) => {
        if(err){
            console.log(err);
            return;
        }
        console.log('server send ' + bytes + ' message');
    });
});

socket.bind(41234, 'localhost', () => {
    console.log('bind 41234');
});

socket.on('message', (msg, rinfo) => {
    console.log('some message from client');
    console.log(msg.toString());
});

socket.on('listening', () => {
    console.log('listening');
});

socket.on('close', () => {
    console.log('close');
})

socket.on('error', (err) => {
    console.log(err);
});