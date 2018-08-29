const mongoose = require('mongoose');

const username = 'chenhy';
const pass = '123456';
const ip = '127.0.0.1';
const port = '12345';
const db = 'test';
const url = 'mongodb://'+ username +':'+ pass +'@'+ ip +':'+ port +'/' + db;

mongoose.connect(url, function(err){
    if(err){
        console.log('连接失败！');
        console.log(err);
        return;
    }
    console.log('连接成功！');
});

// 定义Schema
const UserSchema = new mongoose.Schema({
    username: String,
    password: String,
    email: String,
    phone: String,
    realname: String
});

mongoose.model('User', UserSchema);
const User = mongoose.model('User');

var user = new User({
    username: 'chenyuchi123',
    password: '123456',
    email: '2234234@qq.com',
    phone: '13413212234',
    realname: '陈陈陈'
});

user.save(function(err){
    if(err){
        console.log('保存失败！');
        console.log(err);
        return;
    }
    console.log('保存成功！');
});