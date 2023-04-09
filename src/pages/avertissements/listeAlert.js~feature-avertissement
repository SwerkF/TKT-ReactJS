import React, { useState,useEffect } from 'react';
import axios from 'axios';

const listeAlert=()=>{
    const [data,setData]=useState([]);
      useEffect(()=>{
        axios.get("http://localhost:3300/api/avertissements/listeAlert").then((response)=>{
          setData(response.data.result);
      })
      },[]);
         
      return(<div>
          <h1>Veuillez consulter la liste des avertissements </h1>
          <ul>
           {data.map((d,idAlert)=>(
            <li key={idAlert}>
                <p>{d.libelleAlert}</p>
                <p><b>Niveau de l'avertissement:</b> {d.libelleEtat}</p>
                <p><b>Etat d'alerte :</b> {d.libelleAlerteEtat}</p>
                <p><b>Date de l'avertissement :</b> {d.dateAlert}</p>
                <p><a href="/delete">Suppression de la mission n°{d.idAlert}</a></p>
                <p>--------------------</p>
            </li>

           ))}
          </ul>
          <a href="/formulaire">Ajouter une nouvelle mission</a><br/>
          

      </div>);
}

export default listeAlert;
