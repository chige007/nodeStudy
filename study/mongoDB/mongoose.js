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
    realname: 'chenyc'
});

const curd = {
    // 保存
    save (dataObj) {
        dataObj.save(function(err){
            if(err){
                console.log('保存失败！');
                console.log(err);
                return;
            }
            console.log('保存成功！');
        });
    },
    // 查询
    find (model, params = {}) {
        model.find(params, (err, docs) => {
            if(err){
                console.log(err);
                return;
            }
            console.log('data: ' + docs);
        });
    },
    // 查询一个
    findOne (model, params = {}) {
        model.findOne(params, (err, docs) => {
            if(err){
                console.log(err);
                return;
            }
            console.log('data: ' + docs);
        });
    },
    // 更新
    update (model, params = {}, key, value) {
        model.find(params, (err, docs) => {
            if(err){
                console.log(err);
                return;
            }
            console.log('data: ' + docs);
            docs.forEach(element => {
                element[key] = value;
                element.save();
            });
            console.log('data: ' + docs);
        });
    },
    // 删除
    remove (model, params = {}) {
        model.find(params, (err, docs) => {
            if(err){
                console.log(err);
                return;
            }
            console.log('data: ' + docs);
            docs.forEach(element => {
                element.remove();
            });
            console.log('删除成功！');
        });
    }
}
// curd.save(user);
// curd.find(User, {realname: 'chenyc'});
// curd.findOne(User, {realname: 'chenyc'});
// curd.update(User, {realname: 'chenyc'}, 'phone', '123');
curd.remove(User, {realname: 'chenyc'});