var express = require('express');
var missions = require('./routes/missions');
var user = require('./routes/user');
var roles = require('./routes/roles');
var encyclopedie = require('./routes/encyclopedie');

exports.router = (function() {
    var apiRouter = express.Router();

    apiRouter.route('/user/').post(user.getUser);
    apiRouter.route('/user/login').get(user.login);
    apiRouter.route('/user/login').get(user.login);
    apiRouter.route('/user/get').get(user.getAccounts);
    apiRouter.route('/user/add').post(user.addAccount);
    apiRouter.route('/roles/get').get(roles.getRoles);
    apiRouter.route('/missions/user/').get(missions.getMissionsByUser);
    apiRouter.route('/missions/user/done/').get(missions.getMissionsByUserDone);
    apiRouter.route('/user/delete').post(user.userDelete);
    apiRouter.route('/encyclopedie/').get(encyclopedie.getEncyclopedie);
    apiRouter.route('/encyclopedie/animal/').get(encyclopedie.getAnimalById);
    apiRouter.route('/encyclopedie/imageAnimal/').get(encyclopedie.getImageAnimalById);
    return apiRouter;
})();