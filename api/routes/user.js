const db = require('../bdd.js');


module.exports = {

    // Login
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
    },

    // Recuperer les comptes
    getAccounts: function(req, res) {
        db.query('SELECT idUser, nomUser, prenomUser, libelleRole FROM user INNER JOIN role ON idRole = idRoleUser', function(err, result) {
            if(err) throw err;
            res.json({
                data: result
            })
        })
    },

    // Ajouter un compte
    addAccount: function(req, res) {
        let nom = req.body.nomUser;
        let prenom = req.body.prenomUser;
        let login = req.body.loginUser;
        let password = req.body.passwordUser;
        let role = req.body.idRole;

        if(nom === "" || nom === undefined) {
            return res.status(403).json({
                error: "Nom is empty"
            })
        } else if(prenom === "" || prenom === undefined) {
            return res.status(403).json({
                error: "Prénom is empty"
            })
        } else if(login === "" || login === undefined) {
            return res.status(403).json({
                error: "login is empty"
            })
        } else if(password === "" || password === undefined) {
            return res.status(403).json({
                error: "Password is empty"
            })
        } else if(role === "" || role === undefined) {
            return res.status(403).jjson({
                error: "Role is empty"
            })
        }

        db.query('INSERT INTO user (nomUser, prenomUser, loginUser, passUser, idRoleUser) VALUES (?, ?, ?, MD5(?), ?)', [nom, prenom, login, password, role], function(err, result) {
            if(err) res.status(403).json({})
            res.json({
                data: result
            })
        })
    },

    // supprimer un compte
    userDelete: function(req, res, next) {
        let idUser = req.body.idUser;
        if(idUser === "" || idUser === undefined) {
            return res.status(403).json({
                error: "idUser is empty"
            })
        }
        db.query('DELETE FROM user WHERE idUser = ?', [idUser], function(err, result) {
            if(err) res.status(403).json({})
            res.json({
                data: result
            })
        })
    }
}