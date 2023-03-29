const db = require('../bdd.js')

module.exports = {
  getMissionsByUser: function (req, res) {
    console.log('getMissionsByUser: ' + req.params.id)
    db.query(
      'SELECT idMission,libelleMission, commentaireMission, dateMission, idEtatMission, idUserMission FROM missions WHERE idUserMission = ? AND idEtatMission = "2"',
      [req.query.id],
      function (err, rows, fields) {
        if (err) throw err
        res.json(rows)
      },
    )
  },
  getMissionsByUserDone: function (req, res) {
    console.log('getMissionsByUserDone: ' + req.params.id)
    db.query(
      'SELECT idMission,libelleMission, commentaireMission, dateMission, idEtatMission, idUserMission FROM missions WHERE idUserMission = ? AND idEtatMission = "1"',
      [req.query.id],
      function (err, rows, fields) {
        if (err) throw err
        res.json(rows)
      },
    )
  },
}
