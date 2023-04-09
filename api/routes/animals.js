const db = require('../bdd.js');

module.exports = {
    // Recuperer les animaux avec leur sante
    getAnimalsWithSante: function (req, res) {
        db.query('SELECT idAnimal, nomAnimal, poidsAnimal, libelleRace, libelleEnclos, libelleSante, idSanteAnimal, i.idImage, i.libelleImage, r.idRace, r.libelleRace, idSanteAnimal FROM image i JOIN race r ON i.idRaceImage = r.idRace INNER JOIN animal ON idRace = idRaceAnimal INNER JOIN sante ON idSanteAnimal = idSante INNER JOIN enclos ON idEnclosAnimal = idEnclos GROUP BY r.idRace', function (err, result) {
            if (err) throw err;
            res.json({
                data: result
            })
        })
    },

    // Mis à jour de la santé d'un animal
    updateSanteAnimal: function (req, res) {
    db.query('UPDATE Animal SET idSanteAnimal = ? WHERE idAnimal = ?', [req.query.idSante, req.query.idAnimal ], function (err, result) {
        if (err) throw err;
            res.json({
                data: result
            })
        })
    }
}
