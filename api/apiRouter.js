var express = require('express');
var user = require('./routes/user');

exports.router = (function() {
    var apiRouter = express.Router();

    apiRouter.route('/user/').post(user.getUser);

    return apiRouter;
})();