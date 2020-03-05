const http = require('http');
const fs = require('fs');
const url = require('url');
const querystring = require('querystring');
const game = require('./game');

http.createServer((request, response) => {
    const myUrl = url.parse(request.url);

    if (myUrl.pathname == '/favicon.ico') {
        response.writeHead(200);
        response.end();
        return;
    }

    if (myUrl.pathname == '/game') {
        const query = querystring.parse(myUrl.query);
        const action = query.action;
        const {tips} = game(action);
        response.writeHead(200);
        response.end(tips);
    }

    if (myUrl.pathname == '/') {
        response.writeHead(200);
        fs.createReadStream(__dirname + '/index.html').pipe(response);
    }
}).listen(3000);