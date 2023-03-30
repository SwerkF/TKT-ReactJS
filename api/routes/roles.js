const db = require('../bdd.js');

module.exports = {
    getRoles: function(req, res) {
        db.query('SELECT idRole, libelleRole FROM role', function(err, result) {
            if(err) throw err;
            res.json({
                data: result
            })
        })
    }
}