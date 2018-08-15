const http = require('http');
const cheerio = require('cheerio');
const url = 'http://www.foshan.gov.cn/';

var NewsData = [];
var sendHtml = "";

function myFilter(html){
	let $ = cheerio.load(html);
	let news = $('#tab2_1 li.clearfix');
	
	let newsData = [];
	
	news.each(function(item){
		let news = $(this);
		let title = news.children('a').text();
		let date = news.children('span').text();
		let href = news.children('a').attr('href');
		let data = {
			title: title,
			date: date,
			href: href
		};
		newsData.push(data);
	});
	return newsData;
}

http.get(url, function(res){
	let html = '';
	
	res.on('data', function(data){
		html += data;
	});
	
	res.on('end', function(){
		NewsData = myFilter(html);
		NewsData.forEach(function(item,i){
			let url = 'http://www.foshan.gov.cn/' + item.href.split('./')[1];
			sendHtml += '<li><a href="'+ url +'" target="_blank"><span>'+item.title+'</span><span>'+item.date+'</span></a></li>';
		});
		sendHtml = '<ul>'+ sendHtml +'</ul>';
		console.log(sendHtml);
	});
}).on('error', function(){
	console.log('error');
});

http.createServer(function(req,res){
	res.writeHead(200,{'content-Type':'text/html;charset=utf-8'});
	res.write(sendHtml);
	res.end();
}).listen(2018);
