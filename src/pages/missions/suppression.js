import React, { useState,useEffect } from 'react';
import axios from 'axios';

const suppression=()=>{
    //state
     //requête axios ici
    const [mission, setMission] = useState("");
 
    // Ajouter une nouvelle mission
    const Delete=(idMission)=>{
        
        axios.delete('http://localhost:3300/api/missions/delete', {
            idMission: idMission


        }).then((rep) => {
        })
    }
    
        //affichage
    return(<div>
        <h1>Etes vous sûr de supprimer le commentaire n°?</h1>
        <button onClick={()=>Delete(idMission)}> Supprimer la mission</button>
        <a href="/liste">Retour à la liste des missions</a>
        </div>);
        
    }

export default suppression;