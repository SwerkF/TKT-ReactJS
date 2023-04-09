const db = require('../bdd.js')

module.exports = {
    getAvertissement: function(req, res) {
        db.query("SELECT idAlert, libelleAlert,date,libelleAlertEtat, libelleEtat FROM alert  join etat_alerte on idAlertEtat=idEtatAlerte join niveau on idNiveauAlert=idNiveau", function(err,result) {
          if(err) throw err;
          res.json({
            result
          })
        })
     },
    
     
     
     insertAlert: function(req, res){
      //console.log((req.body)
      let libelle = req.body.libelleAlert;

      let date = req.body.date;
      let idEtat = req.body.idEtatAlerte;
      let idNiveau = req.body.idNiveauAlert;
      db.query("INSERT INTO alert(libelleAlert, date,idEtatAlerte,idNiveauAlert)  VALUES(?,?,?,?) ",[libelle, date, idEtat, idNiveau],function(err,result){

      
           if(err){
            res.json({ message: "Echec de l'ajout du nouvel avertissement",
           data:result});
           }
           else{
              res.json({message:"Ajout réalisé avec succés"});
           }
      })    
     },
      deleteAlert: function(req,res){
        let idAlert= req.query.id;
    
      db.query("Delete from alert where idAlert= ?",[idAlert],function(err,result){
           if(err){
           throw err
           }
           else{
              res.json({message:"Suppression réalisée avec succés"});
           }
      }
    
      )}}
      
