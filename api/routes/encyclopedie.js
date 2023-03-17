const db = require('../bdd.js');

module.exports = {
    getEncyclopedie: function(req, res) {
        db.query('SELECT * FROM encyclopedie', function(err, result, fields) {
            if (err) throw err;
            res.json(result);
        });
    }
}