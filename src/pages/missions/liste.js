import React, { useState,useEffect } from 'react';
import axios from 'axios';
import './missions.scss';


const liste=()=>{
    const [data,setData]=useState([]);
    const [backup, setBackup]=useState([])

      useEffect(()=>{
        let date = new Date("dd/mm/yyyy")
        axios.get("http://localhost:3300/api/missions/liste").then((response)=>{
          setData(response.data.result);
          setBackup(response.data.result);
      })
      },[]);  
    
    const deleteMission = (idMission) => {
      console.log(idMission)
      axios.get('http://localhost:3300/api/missions/suppression', {
          params: {
            id: idMission
          },
      }).then((rep) => {
        console.log(rep)
      })
      .then((err) => {
        console.log(err)
      }) 
  }
 
    const handleChangefilter = (e) =>{

      console.log(backup)
      let libelleEtat = e.target.value;

      if(libelleEtat == "Tous") {
        let dataBack = [...backup]
        setData(dataBack)
      } else {
        let dataFilter = backup.filter(mission => mission.libelleEtat == libelleEtat)
        setData(dataFilter)
      }


    }
      return(
      <div className="page-listemission">
        <div className="container page">
            <h1 class="title-Liste">Veuillez consulter la liste des missions </h1>
            <select onChange={handleChangefilter} >
              <option value="Tous" selected="selected">Tous</option>
              <option value="Pas commencé">Pas commencé</option>
              <option value="En cours">En cours</option>
              <option value="Terminé">Terminé</option>
              
            </select>
            <div className="container">
            <div className="col">
            {data.map((mission)=>(
              <div className="row card p-4 mt-3" id={mission.idMission} key={mission.idMission} name={mission.libelleMission}>
                    <h1 class="title-Row"><strong>{mission.libelleMission}</strong></h1>
                  <p><b>Commentaire :</b> {mission.commentaireMission}</p>
                  <p><b>Etat de la mission :</b> {mission.libelleEtat}</p>
                  <p><b>Date de la mission :</b> {new Date(mission.dateMission).toLocaleDateString('fr')}</p>
                  <a class="btn btn-danger"  type="submit" onClick={()=>deleteMission(mission.idMission)}>Suppression de la mission n°{mission.idMission}</a>
              </div>
            ))}
            <br />
            <a class="btn btn-success" href="/formulaire">Ajouter une nouvelle mission</a><br/>
            </div>
            </div>
            </div>
        
      </div>
      );
            
          }

export default liste;
