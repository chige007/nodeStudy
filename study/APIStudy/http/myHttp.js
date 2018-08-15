const http = require('http');

// http.createServer()方法就是创建一个服务器并添加一个request事件监听
const server = http.createServer(function(req,res){
	// req,res分别是http.IncomingMessage和http.ServerResponse的实例
	// res.writeHead(200,{'conten-Type':'text/plain'});
	// res.write('Hello!');
	// res.end();
});

// const server = new http.Server();

// 当TCP连接建立时，该事件被触发，提供一个socket参数，是net.Socket的实例
server.on('connection',function(socket){
	console.log('连接成功！');
});
// 当服务器关闭时，触发事件（注意不是用户断开连接时）
server.on('close',function(){
	console.log('连接关闭！');
});
// 当客户端请求到来时，该事件被处罚，提供req和res两个参数，表示请求和响应信息
// req,res分别是http.IncomingMessage和http.ServerResponse的实例
server.on('request',function(req, res){
	console.log('收到请求！');
	let data = '';
	// 当请求体数据到来时该事件被触发，提供一个chunk参数，表示接受的数据
	req.on('data',function(chunk){
		data += chunk;
	});
	// 当请求体数据传输完毕时，该事件被触发，此后不再有数据
	req.on('end',function(){
		// HTTP请求方法
		let method = req.method;
		// 请求路径
		let url = req.url;
		// HTTP请求头
		let headers = JSON.stringify(req.headers);
		// HTTP协议版本
		let httpVersion = req.httpVersion;
		// 向请求的客户端发送响应头
		res.writeHead(200,{
			'content-type': 'text/html;charset=utf-8'
		});
		// 向请求发送内容
		res.write('<h1>请求信息：</h1>');
		let dataHtml = '<p>data:' + data + '</p>';
		let methodHtml = '<p>method:' + method + '</p>';
		let urlHtml = '<p>url:' + url + '</p>';
		let headersHtml = '<p>headers:' + headers + '</p>';
		let httpVersionHtml = '<p>httpVersion:' + httpVersion + '</p>';
		let resData = dataHtml + methodHtml + urlHtml + headersHtml + httpVersionHtml;
		// 请求结束
		res.end(resData);
	});
	// 用户当前请求结束时，该事件被触发
	req.on('close',function(){
	});
});

server.listen(3000,function(){
	console.log('listening port 3000');
});


