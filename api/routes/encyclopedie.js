const db = require('../bdd.js');

module.exports = {
    getEncyclopedie: function(req, res) {
        db.query('SELECT i.idImage, i.libelleImage, r.idRace, r.libelleRace, A.libelle FROM image i JOIN race r ON i.idRaceImage = r.idRace INNER JOIN alimentation A ON idAlimentation = id GROUP BY r.idRace ORDER BY libelleRace asc', function(err, result, fields) {
            if (err) throw err;
            res.json(result);
        });
    },

    getAnimalById: function(req, res) {
        db.query(
            'SELECT R.libelleRace, R.description, R.tempsPorte, R.poids, A.libelle, R.origine, R.taille FROM race R INNER JOIN alimentation A on A.id = R.idAlimentation WHERE R.idRace = ?',
            [req.query.id],
            function (err, rows, fields) {
              if (err) throw err
              res.json(rows)
            },
          )
    },

    getImageAnimalById: function(req, res) {
        db.query(
            'SELECT idImage, libelleImage FROM image WHERE idRaceImage = ?',
            [req.query.id],
            function (err, rows, fields) {
              if (err) throw err
              res.json(rows)
            },
          )
    }
}