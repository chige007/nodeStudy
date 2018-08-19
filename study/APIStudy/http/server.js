const http = require('http');
const fs = require('fs');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {//接收请求后的回调函数
  res.statusCode = 200;//设置状态码
  res.setHeader('Content-Type', 'text/html');//设置请求头
  var data = fs.readFileSync('./index.html');
  res.write(data);
  res.end();
});

server.listen(port, hostname, () => {//监听端口
  console.log(`Server running at http://${hostname}:${port}/`);//在控制台输出
});