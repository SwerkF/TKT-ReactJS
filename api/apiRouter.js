var express = require('express');
var Mission = require('./routes/MissionsController');
var avertissement = require('./routes/AdvertController');
// 1. Importer vos routes depuis le dossier ./routes
// var routeName = require('./routes/routeName');

exports.router = (function() {
    var apiRouter = express.Router();

    // 2. Déclarez vos routes ici
    // apiRouter.route('/path/to/route').post(routeName.nomFonc)
    // .post peut être remplacé par .get, .update ect...
    
    //Missions
    apiRouter.route('/missions/liste').get(Mission.getMission);
    apiRouter.route('/missions/liste').get(Mission.getMissionByEtat);
    apiRouter.route('/missions/insert').post(Mission.insertMission);
    apiRouter.route('/missions/suppression').get(Mission.deleteMission);

     //Advert
    apiRouter.route('/avertissements/listeAlert').get(avertissement.getAvertissement);
    apiRouter.route('/avertissements/insert').post(avertissement.insertAlert);
    apiRouter.route('/avertissements/formDelete').get(avertissement.deleteAlert);


    return apiRouter;
})();