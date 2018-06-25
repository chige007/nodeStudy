var fs = require("fs");
var data = "adfafasfasdf";

var writerStream = fs.createWriteStream("etc/abc.txt");
writerStream.write(data,"UTF8");
writerStream.end();
writerStream.on("finish",function(){
	console.log("completed");
});
writerStream.on("error",function(){
	console.log("error");
});
console.log("program end!");