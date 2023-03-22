const db = require('../bdd.js')

module.exports = {
    getMission: function(res, req) {
        let sql1="SELECT idMission, libelleMission FROM missions";

app.get("/missions/liste",(res,req)=>{
 config.query(sql1,[req.params.id],(err,results)=>{
  
    res.json({results});
}
 )}
 )},
 getMissionByid: function(res,req){
    let sql1="SELECT libelleMission, commentaireMission, dateMission FROM missions where idMission=?";

app.get("/missions/one/:id",(res,req)=>{
 config.query(sql1,[req.params.id],(err,results)=>{
    if(!results[0]){
        res.json({ message: "Aucune mission n'existe pas à cet identifiant" });
      } else {
        res.json({results});
      }
    })
    });
 }}
    
