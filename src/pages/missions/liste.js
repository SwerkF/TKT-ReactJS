import React, { useState,useEffect } from 'react';
import axios from 'axios';

const liste=()=>{
    const [data,setData]=useState([]);
      useEffect(()=>{
        axios.get("http://localhost:3300/api/missions/liste").then((response)=>{
          setData(response.data.result);
      })
      },[]);
         
      return(<div>
          <h1>Veuillez consulter la liste des missions </h1>
          <ul>
           {data.map((d,idMission)=>(
            <li key={idMission}>
                <p><a href="/detail" >{d.libelleMission} </a></p><br />
                <p><a href="/suppression">Suppression de la mission n°{d.idMission}</a></p>
            </li>
           ))}
          </ul>
          <a href="/formulaire">Ajouter une nouvelle mission</a><br/>
          

      </div>);
}

export default liste;
