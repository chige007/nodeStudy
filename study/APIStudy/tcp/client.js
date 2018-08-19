const net = require('net');

var client = new net.Socket({});

client.connect(18001, '127.0.0.1', () => {
    client.write('Hello, server!');
});

client.on('data', (data) => {
    console.log(data.toString());
});

client.on('end', () => {
    console.log('client: data end');
})
