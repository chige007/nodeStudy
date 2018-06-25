var fs = require("fs");
var readerStream = fs.createReadStream("etc/myNote.txt");
var writeStream = fs.createWriteStream("etc/abc.txt");

readerStream.pipe(writeStream);

console.log("program end!");