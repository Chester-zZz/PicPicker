// 导出一个函数，参数是app

const index = require('./index');
const users = require('./users');

module.exports = (app) => {
  app.use('/', index);
  app.use('/users', users);
};
