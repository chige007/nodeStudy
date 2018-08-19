const fs = require('fs');
const request = require('request');
const qs = require('querystring');

function readIP(path, callback){
    fs.readFile(path, (err, data) => {
        if(err){
            callback(err);
        }else{
            try{
                data = JSON.parse(data);
                callback(null, data);
            }catch(error){
                console.log(error);
            }
        }
    });
}

function ip2geo(ip, callback){
    var url = 'http://www.telize.com/geoip/' + ip;
    request({
        url: url,
        json: true
    }, (err, resp, body) => {
        callback(err, body);
    });
}

function geo2weather(lat, lon, callback){
    var params = {
        lat: lat,
        lon: lon,
        APPID: 'public key'
    }
    var url = 'http://api.openweathermap.org/data/2.5/weather?' + qs.stringify(params);
    request({
        url: url,
        json: true,
    }, (err, resp, body) => {
        callback(err, body);
    });
}