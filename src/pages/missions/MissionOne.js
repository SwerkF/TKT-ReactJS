import React, { useState,useEffect } from 'react';
import axios from 'axios';

const mission=()=>{
    const [data,setData]=useState([]);
      useEffect(()=>{
        axios.get("http://localhost:3300/api/missions/one/byId"+d.idMission).then((response)=>{
          setData(response.data.result);
      })
      },[]);
      // Supprimer une mission
    
      return(<div>
          <h1>Détail de la mission que vous avez sélectionné </h1>
          <ul>
           {data.map((d,idMission)=>(
            <li key={idMission}>
                {d.libelleMission} <br />
                {d.commentaireMission}<br />
                {d.dateMission}<br />
                {d.libelleEtat}

               
                
               
            </li>
           ))}
          </ul>
          <a href="/liste">Retour à la liste des missions</a><br/>
          
  
  
      </div>);
}

export default mission;
