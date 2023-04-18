const db = require('../bdd.js');

module.exports = {
   // Recuperer les alertes
   getAlerts: function (req, res) {
      // Requete SQL
      db.query('SELECT idAlert, libelleAlert, libelleEtat FROM alert INNER JOIN niveau ON idNiveau = idNiveauAlert  WHERE idEtatAlerte = 1;', function(err, result) {
         if (err) throw err;

         // Retourner le resultat
         res.json({
            data: result
         })
    })
  }
}
