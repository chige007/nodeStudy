// dns模块的功能是域名处理和域名解析
const dns = require('dns');

let domain = 'baidu.com';
// 将一个域名解析为一个指定类型的数组
dns.resolve(domain, function(err, address){
    if(err){
        console.log(err);
        return;
    }
    console.log(address);
});

// 返回第一个被发现的IPv4或IPv6的地址
dns.lookup(domain, function(err, address){
    if(err){
        console.log(err);
        return;
    }
    console.log(address);
});

// 通过IP解析域名
dns.resolve('220.181.57.216', function(err, domain){
    console.log(domain);
});
