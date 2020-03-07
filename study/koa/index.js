const fs = require('fs');
const Koa = require('koa');
const mount = require('koa-mount');
const game = require('./game');

const homeKoa = new Koa();

homeKoa.use(async function (ctx, next){
    ctx.body = fs.readFileSync(__dirname + '/index.html', 'utf-8');
})
 
// world
 
const gameKoa = new Koa();
 
gameKoa.use(async function (ctx, next){
  const query = ctx.query;
  const action = query.action;
  const {tips} = game(action);
  ctx.status = 200;
  ctx.body = tips;
});
 
const app = new Koa();
 
app.use(mount('/game', gameKoa));
app.use(mount('/', homeKoa));

app.listen(3000, () => {
    console.log('启动成功！')
});