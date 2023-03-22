var express = require('express');
var Mission = require('./routes/MissionsController');
var avertissement = require('./routes/AdvertController');


exports.router = (function() {
    var apiRouter = express.Router();
 

    //Missions
    apiRouter.route('/missions/liste').get(Mission.getMission);
    apiRouter.route('/missions/one/:id').post(Mission.getMissionByid);


    //Advert
    apiRouter.route('/advert/register/').post(avertissement.id);
 
    return apiRouter;
})