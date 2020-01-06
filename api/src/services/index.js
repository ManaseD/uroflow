const users = require('./users/users.service.js');
const audio = require('./audio/audio.service.js');
// eslint-disable-next-line no-unused-vars
module.exports = function (app) {
  app.configure(users);
  app.configure(audio);
};
