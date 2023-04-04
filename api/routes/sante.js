const db = require('../bdd.js');

module.exports = {
    getSante: function (req, res, next) {
        db.query('SELECT idSante, libelleSante FROM sante', function (err, result) {
            if (err) throw err;
            res.json({
                data: result
            })
        })
    },

    getSanteByName: function (req, res, next) {
        let libelleSante = req.query.libelleSante;
        console.log(libelleSante)
        db.query('SELECT idSante, libelleSante FROM sante WHERE libelleSante LIKE ?', ['%' + libelleSante + '%'], function (err, result) {
            if (err) throw err;
            res.json({
                data: result
            })
            console.log(result)
        })
    }
}