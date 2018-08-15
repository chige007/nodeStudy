const Request = require('request');
const Path = require('path');
const Fs = require('fs');
const Config = require('./config');
const Analyze = require('./analyze');

function start(){
    Request(Config.url, function(err, res, body){
        if(!err && res){
            Analyze.findImg(body, download);
        }
    });
}

function download(imgUrl, i){
    if(!imgUrl || typeof imgUrl != 'string')return;
    let ext = imgUrl.split('.').pop();
    if(ext == 'jpg' || ext == 'png' || ext == 'gif' || ext == 'jpeg'){
        var d = new Date();
        var fileName = d.getFullYear()+'' + (d.getMonth()+1)+'' + d.getDate()+'' + d.getHours()+'' + d.getMinutes()+'' + d.getSeconds()+'' + d.getMilliseconds()+'';
        Request(imgUrl).pipe(Fs.createWriteStream(Path.join(Config.path, fileName + '.' + ext), {
            'encoding': 'utf8'
        }))
    }
}

start();