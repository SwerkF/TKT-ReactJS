var express = require('express');
var encyclopedie = require('./routes/encyclopedie');

exports.router = (function() {
    var apiRouter = express.Router();

    apiRouter.route('/encyclopedie/').get(encyclopedie.getEncyclopedie);

    return apiRouter;
})();