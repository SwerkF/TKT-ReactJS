const db = require('../bdd.js');

module.exports = {
   getAlerts: function (req, res) {
      db.query('SELECT idAlert, libelleAlert, libelleEtat FROM alert INNER JOIN niveau ON idNiveau = idNiveauAlert  WHERE idEtatAlerte = 1;', function(err, result) {
         if (err) throw err;
         res.json({
            data: result
         })
    })
  }
}
