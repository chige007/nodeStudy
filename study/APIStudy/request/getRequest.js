//http.request(options[,callback]);
//options: host/path/hostname/headers/port/auth/localAddress/agent/socketPath/keepAlive/method/keepAliveMsecs
const http = require('http');
const queryString = require('queryString');

var postData = queryString.stringify({
	userName : 'chenyuchi',
	password : 'chinoWEN910124'
});
let options = {
	hostname: '139.159.218.245',
	post: 80,
	path: '/loginController.do?login',
	methods: 'POST',
	headers: {
		'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8',
		'Accept-Encoding': 'gzip, deflate, br',
		'Accept-Language': 'zh-CN,zh;q=0.9,en;q=0.8',
		'Cache-Control': 'no-cache',
		'Connection': 'keep-alive',
		'Cookie': 'JSESSIONID=2CF9F556B4327C9EA79009F47AC521F7; fileUrl="https://pan.join-share.net/"; joinUrl="https://www.join-share.net/"; stoken=e8c971d7a4d4a24635e67ecdf8812999',
		'Host': 'www.join-share.net',
		'Pragma': 'no-cache',
		'Referer': 'https://www.join-share.net/',
		'Upgrade-Insecure-Requests': 1,
		'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_10_5) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/63.0.3239.84 Safari/537.36'
	}
};

let reqData = '';
// option为json对象，主要字段有host,port,method(默认GET),path(请求的相对于根的路径，默认“/”)、headers,该方法返回一个httpClientRequest实例
var req = http.request(options,function(res){
	console.log(res.statusCode);
	res.on('data',function(chunk){
		reqData += chunk;
	});
	console.log(JSON.stringify(res.httpVersion));
	console.log(JSON.stringify(res.headers));
	// 发送请求完毕，应该始终指定这个方法
	res.on('end',function(){
		console.log('响应结束!');
	});
	
});
// 当接受到响应时触发
req.on('response',function(chunk){
	console.log('接受到响应！');
});
// 当请求错误时触发
req.on('error',function(e){
	console.log(e.message);
});
// 发送请求数据
req.write(postData);
req.end();


