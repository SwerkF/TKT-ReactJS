const db = require('../bdd.js');

module.exports = {
    getEncyclopedie: function(req, res) {
        db.query('SELECT i.idImage, i.libelleImage, r.idRace, r.libelleRace, A.libelle FROM image i JOIN race r ON i.idRaceImage = r.idRace INNER JOIN alimentation A ON idAlimentation = id GROUP BY r.idRace ORDER BY libelleRace asc', function(err, result, fields) {
            if (err) throw err;
            res.json(result);
        });
    }
}