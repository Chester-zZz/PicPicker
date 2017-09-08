/**
 * Created by Chester on 2017/9/8.
 */
const mongoose = require('mongoose');
const db_url = 'mongodb://localhost:27017/Jiandanmeizi';
mongoose.Promise = global.Promise;
mongoose.connect(db_url,{useMongoClient: true});
// 连接成功
mongoose.connection.on('connected', function () {
  console.log('Mongoose connection open to ' + db_url);
});

// 连接异常
mongoose.connection.on('error', function (err) {
  console.log('Mongoose connection error: ' + err);
});

// 连接断开
mongoose.connection.on('disconnected', function () {
  console.log(`Mongoose connection to ${db_url} disconnected`);
});

// 这个模块只是连接到指定的数据库，导出这个连接
module.exports = mongoose;
