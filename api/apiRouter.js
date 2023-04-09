var express = require('express')
var missions = require('./routes/missions')
var user = require('./routes/user')
var roles = require('./routes/roles')
var sante = require('./routes/sante');
var animals = require('./routes/animals');
var encyclopedie = require('./routes/encyclopedie');
var alert = require('./routes/alerts');
var Mission = require('./routes/MissionsController');
var avertissement = require('./routes/AdvertController');
exports.router = (function () {
  var apiRouter = express.Router()

    apiRouter.route('/user/login').get(user.login); 
    apiRouter.route('/user/get').get(user.getAccounts);
    apiRouter.route('/user/add').post(user.addAccount);
    apiRouter.route('/user/delete').post(user.userDelete);

    apiRouter.route('/roles/get').get(roles.getRoles);
    
    apiRouter.route('/encyclopedie/').get(encyclopedie.getEncyclopedie);
    apiRouter.route('/encyclopedie/animal/').get(encyclopedie.getAnimalById);
    apiRouter.route('/encyclopedie/imageAnimal/').get(encyclopedie.getImageAnimalById);
    
    apiRouter.route('/missions/user/').get(missions.getMissionsByUser);
    apiRouter.route('/missions/user/done/').get(missions.getMissionsByUserDone);
    apiRouter.route('/missions/etat/valid').get(missions.validMission)
    apiRouter.route('/missions/etat/invalid/').get(missions.invalidMission)
    apiRouter.route('/missions/etat/start/').get(missions.startMission)
    apiRouter.route('/missions/user/getone').get(missions.getIdMission)
    apiRouter.route('/missions/liste').get(Mission.getMission);
    apiRouter.route('/missions/liste').get(Mission.getMissionByEtat);
    apiRouter.route('/missions/insert').post(Mission.insertMission);
    apiRouter.route('/missions/suppression').get(Mission.deleteMission);
    
    apiRouter.route('/sante/get').get(sante.getSante);
    apiRouter.route('/animals/get').get(animals.getAnimalsWithSante);
    apiRouter.route('/animals/update/sante').get(animals.updateSanteAnimal);

    apiRouter.route('/alerts/get').get(alert.getAlerts);
    apiRouter.route('/avertissements/listeAlert').get(avertissement.getAvertissement);
    apiRouter.route('/avertissements/insert').post(avertissement.insertAlert);
    apiRouter.route('/avertissements/formDelete').get(avertissement.deleteAlert);
    return apiRouter;
})();