var fs = require("fs");

var data = "hello world!";

var writerStream = fs.createWriteStream("etc/myNote3.txt");

writerStream.write(data,"UTF8");

writerStream.end();

writerStream.on("finish",function(){
	console.log("finish123123");
})

writerStream.on('error', function(err){
   console.log(err.stack);
});

console.log("Program Ended");