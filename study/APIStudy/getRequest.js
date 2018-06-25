/**
 * New node file
 */
//http.request(options[,callback]);
//options: host/path/hostname/headers/port/auth/localAddress/agent/socketPath/keepAlive/method/keepAliveMsecs

const http = require('http');
const queryString = require('queryString');

var postData = queryString.stringify({
	userName : 'chenyuchi',
	password : 'chinoWEN910124'
});
let options = {
	hostname: 'http://www.join-share.net',
	post: 80,
	path: 'loginController.do?login',
	methods: 'post',
	headers: {
		'Accept':'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8',
		'Accept-Encoding':'gzip, deflate',
		'Accept-Language':'zh-CN,zh;q=0.9,en;q=0.8',
		'Cache-Control':'no-cache',
		'Connection':'keep-alive',
		'Cookie':'fileUrl="http://pan.join-share.net/"; joinUrl="http://www.join-share.net/"; JSESSIONID=230F8704282217498503035362E50208; stoken=21561a9b37e6b8b65499b6c8987fbad8',
		'Host':'www.join-share.net',
		'Pragma':'no-cache',
		'Referer':'http://www.join-share.net/loginController.do?login',
		'Upgrade-Insecure-Requests':1,
		'User-Agent':'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_10_5) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/63.0.3239.84 Safari/537.36',
	}
};

var req = http.request(options,function(res){
	console.log(res.statusCode);
	console.log(JSON.stringify(res.headers));
	
	res.on('data',function(chunk){
		console.log(Buffer.isBuffer(chunk));
		console.log(typeof chunk);
	});
	
	res.on('end',function(){
		console.log('登录成功！');
	});
	
});
req.on('error',function(e){
	console.log(e.message);
});

req.write(postData);
req.end();


