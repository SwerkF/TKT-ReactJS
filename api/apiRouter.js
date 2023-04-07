var express = require('express')
var missions = require('./routes/missions')
var user = require('./routes/user')
var roles = require('./routes/roles')
var sante = require('./routes/sante');
var animals = require('./routes/animals');
var encyclopedie = require('./routes/encyclopedie');
var alert = require('./routes/alerts');

exports.router = (function () {
  var apiRouter = express.Router()

    apiRouter.route('/user/').post(user.getUser);
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

  apiRouter.route('/roles/get').get(roles.getRoles)

  apiRouter.route('/missions/etat/valid').get(missions.validMission)
  apiRouter.route('/missions/etat/invalid/').get(missions.invalidMission)
  apiRouter.route('/missions/etat/start/').get(missions.startMission)
  apiRouter.route('/missions/user/getone').get(missions.getIdMission)

    apiRouter.route('/sante/get').get(sante.getSante);

    apiRouter.route('/animals/get').get(animals.getAnimalsWithSante);
    apiRouter.route('/animals/update/sante').get(animals.updateSanteAnimal);
    apiRouter.route('/sante/get/name').get(sante.getSanteByName);

    apiRouter.route('/alerts/get').get(alert.getAlerts);
    

    return apiRouter;
})();