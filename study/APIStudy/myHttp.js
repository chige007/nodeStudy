const http = require('http');

http.createServer(function(req,res){
	res.writeHead(200,{'conten-Type':'text/plain'});
	res.write('Hello!');
	res.end();
}).listen(2018);
