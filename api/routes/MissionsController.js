const db = require('../bdd.js')

module.exports = {
  getMission: function(req, res) {
    db.query("SELECT idMission, libelleMission FROM missions", function(err,result) {
      if(err) throw err;
      res.json({
        data:result
      })
    })
 },

 getMissionById: function(req, res) {
   db.query("Select libelleMission, commentaireMission, dateMission", function(err,result){
      if(!results[0]){
    res.json({ message: "Aucune mission n'existe pas à cet identifiant" });
  } else {
    res.json({data:result});
  }
})
   }
 }
    
