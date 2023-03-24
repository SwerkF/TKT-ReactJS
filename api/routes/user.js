const db = require('../bdd.js');
const md5 = require('md5');


module.exports = {
    getUser: function(req, res) {

    },
    login: function(req, res) {

        //take parameter login & password from url
        let login = req.query.login;
        let password = req.query.password;


        if(login === "" || login === undefined) {
            return res.json({
                error: "Login is empty"
            })
        } else if(password === "" || password === undefined) {
            return res.json({
                error: "Password is empty"
            })
        }

        //check if user exist
        db.query('SELECT idUser, nomUser, prenomUser, libelleRole FROM user INNER JOIN role ON idRole = idRoleUser WHERE loginUser = ? AND passUser = MD5(?)', [login, password], function(err, result) {
            if(err) throw err;
            if(result.length !== 0) {
                //if user exist, return idUser
                res.json({
                    data: result[0]
                })
            } else {
                //if user doesn't exist, return error
                res.json({
                    error: "User doesn't exist"
                })
            }
        })
    }
}