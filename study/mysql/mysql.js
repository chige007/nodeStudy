const mysql = require('mysql');

const connection = mysql.createConnection({
    host: '202.104.31.181',
    user: 'root',
    port: '3325',
    password: 'ucg',
    database: 'joinshare_oss_test'
});

connection.connect( (err) => {
    if(err){
        console.error(err);
        return;
    }
    console.log('连接成功：connected as id'+ connection.threadId);
});