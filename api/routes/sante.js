const db = require('../bdd.js');

module.exports = {
    getSante: function (req, res, next) {
        db.query('SELECT idSante, libelleSante FROM sante', function (err, result) {
            if (err) throw err;
            res.json({
                data: result
            })
        })
    }
}