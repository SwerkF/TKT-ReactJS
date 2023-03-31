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
    apiRouter.route('/missions/insert').post(Mission.insertMission);
    apiRouter.route('/missions/suppression').post(Mission.deleteMission);

     //Advert
    apiRouter.route('/avertissements/listeAlert').get(avertissement.getAvertissement);
    apiRouter.route('/avertissements/insert').post(avertissement.insertAlert);
<<<<<<< Updated upstream
    apiRouter.route('/avertissements/delete').post(avertissement.deleteAlert);
=======
<<<<<<< HEAD
    apiRouter.route('/avertissements/formdelete').post(avertissement.deleteAlert);
=======
    apiRouter.route('/avertissements/delete').post(avertissement.deleteAlert);
>>>>>>> feature-avertissement
>>>>>>> Stashed changes

    return apiRouter;
})();