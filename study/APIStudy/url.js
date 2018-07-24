const myUrl = require('url');

// 解析一个url地址，返回一个对象
let parse = myUrl.parse('https://www.imooc.com:8090/video/6710?text=1&test=3#chunk2',true);
console.log(parse);

// 接受一个url对象，返回一个完整的url地址
let format = myUrl.format({
  protocol: 'https:',
  slashes: true,
  auth: null,
  host: 'www.imooc.com:8090',
  port: '8090',
  hostname: 'www.imooc.com',
  hash: '#chunk2',
  search: '?text=1&test=3',
  query: 'text=1&test=3',
  pathname: '/video/6710',
  path: '/video/6710?text=1&test=3',
  href: 'https://www.imooc.com:8090/video/6710?text=1&test=3#chunk2' 
});
console.log(format);

// 接受一个base url对象和一个href url对象，像浏览器那样解析，返回一个完整的地址
let resolve = myUrl.resolve('https://www.imooc.com:8090/','/video/6710?text=1&test=3#chunk2');
console.log(resolve);
