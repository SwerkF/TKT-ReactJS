const db = require('../bdd.js');

module.exports = {
    getEncyclopedie: function(req, res) {
        db.query('SELECT i.idImage, i.libelleImage, r.idRace, r.libelleRace FROM image i JOIN race r ON i.idRaceImage = r.idRace GROUP BY r.idRace', function(err, result, fields) {
            if (err) throw err;
            res.json(result);
        });
    }
}