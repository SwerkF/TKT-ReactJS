var express = require('express');
var missions = require('./routes/missions');
var user = require('./routes/user');
var roles = require('./routes/roles')
var sante = require('./routes/sante');

exports.router = (function() {
    var apiRouter = express.Router();

    apiRouter.route('/user/').post(user.getUser);
  apiRouter.route('/user/login').get(user.login);
    apiRouter.route('/user/login').get(user.login);
    apiRouter.route('/user/get').get(user.getAccounts);
    apiRouter.route('/user/add').post(user.addAccount);
    apiRouter.route('/user/delete').post(user.userDelete);

    apiRouter.route('/roles/get').get(roles.getRoles);
  
  apiRouter.route('/missions/user/').get(missions.getMissionsByUser);
  apiRouter.route('/missions/user/done/').get(missions.getMissionsByUserDone);
    return apiRouter;
})();