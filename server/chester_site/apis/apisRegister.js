let getPage = require('./getPage')
module.exports = (app) => {
  app.use('/api', getPage);
};
