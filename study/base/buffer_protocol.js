const protobuf = require('protocol-buffers');
const fs = require('fs');
const path = require('path');

const filePath = path.normalize(__dirname + '/../etc/protocolBuffer.proto');
console.log(filePath);
var schema = protobuf(fs.readFileSync(filePath), 'utf-8');
console.log(schema);

var buf = schema.Column.encode({
    id: 42,
    name: 'hello world',
    price: 10
  })

  console.log(buf);
  console.log(schema.Column.decode(buf));