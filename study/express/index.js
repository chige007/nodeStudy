const fs = require('fs');
const express = require('express');
const game = require('./game');

const app = new express();

app.get('/', (req, res) => {
    res.send(fs.readFileSync(__dirname + '/index.html', 'utf-8'));
})
app.get('/game', (req, res, next) => {
    const query = req.query;
    const action = query.action;
    const {tips} = game(action);
    res.status(200);
    res.send(tips);
})
app.get('/favicon.ico', (req, res) => {
    res.status(200);
    return;
})

app.listen(3000, () => {
    console.log('启动成功！')
});