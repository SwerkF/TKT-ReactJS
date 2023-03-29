var express = require('express');
var missions = require('./routes/missions');
var user = require('./routes/user');

exports.router = (function () {
  var apiRouter = express.Router()
  
  apiRouter.route('/missions/user/').get(missions.getMissionsByUser);
  apiRouter.route('/missions/user/done/').get(missions.getMissionsByUserDone);
  
  apiRouter.route('/user/').post(user.getUser);
  apiRouter.route('/user/login').get(user.login);
  
  return apiRouter;
})();