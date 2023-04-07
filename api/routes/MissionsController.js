const db = require('../bdd.js')

module.exports = {
  getMission: function(req, res) {
    db.query("SELECT idMission, libelleMission,dateMission, commentaireMission, libelleEtat FROM missions  join etat on idEtat=idEtatMission", function(err,result) {
      if(err) throw err;
      res.json({
        result
      })
    })
 },

 
 
 insertMission: function(req, res){
  console.log(req.body)
  let libelle = req.body.libelleMission;
  let commentaire = req.body.commentaireMission;
  let date = req.body.dateMission;
  let idEtat = req.body.idEtatMission;
  let idUser = req.body.idUserMission;
  db.query("INSERT INTO missions(libelleMission, commentaireMission, dateMission, idEtatMission, idUserMission)  VALUES(?,?,?,?,?) ",[libelle, commentaire, date, idEtat, idUser],function(err,result){
       if(err){
        res.json({ message: "Echec de l'ajout de la nouvelle mission",
       data:result});
       }
       else{
          res.json({message:"Ajout réalisé avec succés"});
       }
  })     },
  deleteMission: function(req,res){
    let idMission = req.query.id;

  db.query("Delete from missions where idMission= ?",[idMission],function(err,result){
       if(err){ throw err
       }
       else{
          res.json({message:"Suppression réalisée avec succés"});
       }
  }

  )},
  getMissionByEtat: function(req,res){
    let idEtatMission = req.body.idEtatMission;

  db.query("SELECT idMission, libelleMission,dateMission, commentaireMission, libelleEtat FROM missions  join etat on idEtat=idEtatMission where idEtatMission= ?",[idEtatMission],function(err,result){
       if(err){
      res.json({ message: "Aucune mission n'existe à cet état",
       data:result});
       }
       else{
          res.json({message:"Succés"});
       }
  }

  )},
}
  
 
    
     
