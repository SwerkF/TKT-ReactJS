import React, { useState,useEffect } from 'react';
import axios from 'axios';
import './missions.scss';
const liste=()=>{
    const [data,setData]=useState([]);
      useEffect(()=>{

        let date = new Date("dd/mm/yyyy")
        axios.get("http://localhost:3300/api/missions/liste").then((response)=>{
          setData(response.data.result);
      })
<<<<<<< HEAD
      },[]);         
      return(
      <div className="page-listemission">
        <div className="container page">
            <h1 class="title-Liste">Veuillez consulter la liste des missions </h1>
            <div className="container">
            <div className="col">
            {data.map((mission)=>(
              <div className="row card p-4 mt-3" id={mission.idMission} key={mission.idMission} name={mission.libelleMission}>
                    <h1 class="title-Row"><strong>{mission.libelleMission}</strong></h1>
                  <p><b>Commentaire :</b> {mission.commentaireMission}</p>
                  <p><b>Etat de la mission :</b> {mission.libelleEtat}</p>
                  <p><b>Date de la mission :</b> {new Date(mission.dateMission).toLocaleDateString('fr')}</p>
                  <a class="btn btn-danger" href="/suppression">Suppression de la mission n°{mission.idMission}</a>
              </div>
            ))}
            <br />
            <a class="btn btn-success" href="/formulaire">Ajouter une nouvelle mission</a><br/>
            </div>
            </div>
        </div>
      </div>
      );
=======
      },[]);
         
      return(<div>
          <h1>Veuillez consulter la liste des missions </h1>
          <ul>
           {data.map((d,idMission)=>(
            <li key={idMission}>
                <p>{d.libelleMission}</p>
                <p><b>Commentaire :</b> {d.commentaireMission}</p>
                <p><b>Etat de la mission :</b> {d.libelleEtat}</p>
                <p><b>Date de la mission :</b> {d.dateMission}</p>
                <p><a href="/suppression">Suppression de la mission n°{d.idMission}</a></p>
                <p>--------------------</p>
            </li>

           ))}
          </ul>
          <a href="/formulaire">Ajouter une nouvelle mission</a><br/>
          

      </div>);
>>>>>>> feature-avertissement
}

export default liste;
