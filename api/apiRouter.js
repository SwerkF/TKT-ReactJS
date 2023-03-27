var express = require('express')
var missions = require('./routes/missions')

exports.router = (function () {
  var apiRouter = express.Router()

  apiRouter.route('/missions/user/').get(missions.getMissionsByUser)
  apiRouter.route('/missions/user/done/').get(missions.getMissionsByUserDone)

  return apiRouter
})()
