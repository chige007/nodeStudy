const myUrl = require('url');

let parse = myUrl.parse('https://www.imooc.com:8090/video/6710?text=1&test=3#chunk2',true);
console.log(parse);

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
  href: 'https://www.imooc.com:8090/video/6710?text=1&test=3#chunk2' });
  console.log(format);

let resolve = myUrl.resolve('https://www.imooc.com:8090/','/video/6710?text=1&test=3#chunk2');
console.log(resolve);
