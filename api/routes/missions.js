const db = require('../bdd.js')

module.exports = {
  getMissionsByUser: function (req, res) {
    //console.log(('getMissionsByUser: ' + req.params.id)
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
    //console.log(('getMissionsByUserDone: ' + req.params.id)
    db.query(
      'SELECT idMission,libelleMission, commentaireMission, dateMission, idEtatMission, idUserMission FROM missions WHERE idUserMission = ? AND idEtatMission = "1"',
      [req.query.id],
      function (err, rows, fields) {
        if (err) throw err
        res.json(rows)
      },
    )
  },
  validMission: function (req, res) {
    let id = req.query.id
    //console.log((id)
    db.query(
      "update missions set idEtatMission ='3' where idMission = ?",
      [req.query.id],
      function (err, rows, fields) {
        if (err) throw err
        res.json(rows)
      },
    )
  },
  invalidMission: function (req, res) {
    //console.log(('getEtatMission: ' + req.params.id)
    db.query(
      "update missions set idEtatMission ='4', remarqueMission = ? where idMission = ?",
      [req.query.remarque, req.query.id],
      function (err, rows, fields) {
        if (err) throw err
        res.json(rows)
      },
    )
  },
  startMission: function (req, res) {
    //console.log(('getEtatMission: ' + req.params.id)
    db.query(
      "update missions set idEtatMission ='2' where idMission = ?",
      [req.query.id],
      function (err, rows, fields) {
        if (err) throw err
        res.json(rows)
      },
    )
  },
  getIdMission: function (req, res) {
    //console.log(('getIdMission: ' + req.query.id)

    db.query(
      'SELECT idMission, libelleMission, commentaireMission FROM missions WHERE idMission = ?',
      [req.query.id],
      function (err, rows, fields) {
        if (err) throw err
        res.json(rows)
      },
    )
  },
}
