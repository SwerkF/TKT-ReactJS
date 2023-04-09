const db = require('../bdd.js');

module.exports = {
    // Recuperer les roles
    getRoles: function(req, res) {
        db.query('SELECT idRole, libelleRole FROM role', function(err, result) {
            if(err) throw err;
            res.json({
                data: result
            })
        })
    }
}