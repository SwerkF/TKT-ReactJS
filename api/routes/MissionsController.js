const db = require('../bdd.js')

module.exports = {
  getMission: function(req, res) {
    db.query("SELECT idMission, libelleMission FROM missions", function(err,result) {
      if(err) throw err;
      res.json({
        result
      })
    })
 },

 getMissionById: function(req, res) {
  let id = req.query.id;
   db.query("Select libelleMission, commentaireMission, dateMission, libelleEtat from missions join etat on idEtat=idEtatMission where idMission =?",[id], function(err,results){
    
  if(!results){
    res.json({ message: "Aucune mission n'existe pas à cet identifiant" });
  } else {
    res.json({
      data:results
    });
  }
})
   },
 
 insertMission: function(req, res){
  console.log(req.body)
  let libelle = req.body.libelleMission;
  let commentaire = req.body.commentaireMission;
  let date = req.body.dateMission;
  let idEtat = req.body.idEtatMission;
  let idUser = req.body.idUserMission;
  db.query("INSERT INTO missions(libelleMission, commentaireMission, dateMission, idEtatMission, idUserMission)  VALUES(?,?,?,?,?)",[libelle, commentaire, date, idEtat, idUser],function(err,result){
       if(err){
        res.json({ message: "Echec de l'ajout de la nouvelle mission",
       data:result});
       }
       else{
          res.json({message:"Ajout réalisé avec succés"});
       }
  })     },
  deleteMission: function(req,res){
    let idMission = req.body.idMission;

  db.query("Delete * from  where idMission= ?",[idMission],function(err,result){
       if(err){
        res.json({ message: "Echec de la suppression de la mission",
       data:result});
       }
       else{
          res.json({message:"Suppression réalisée avec succés"});
       }
  }

  )}}
  
 
    
     
