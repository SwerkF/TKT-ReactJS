var express = require('express');
var user = require('./routes/user');
// 1. Importer vos routes depuis le dossier ./routes
// var routeName = require('./routes/routeName');

exports.router = (function() {
    var apiRouter = express.Router();

    apiRouter.route('/user/').post(user.getUser);
    // 2. Déclarez vos routes ici
    // apiRouter.route('/path/to/route').post(routeName.nomFonc)
    // .post peut être remplacé par .get, .update ect...
    
    apiRouter.route('/user/login').get(user.login);
    

    return apiRouter;
})();