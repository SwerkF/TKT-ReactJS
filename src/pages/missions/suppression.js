import React, { useState,useEffect } from 'react';
import axios from 'axios';

const suppression=()=>{
    //state
     //requête axios ici
    const [mission, setMission] = useState("");
 
    // Ajouter une nouvelle mission
    const Delete=(idMission)=>{
        
        axios.delete('http://localhost:3300/api/missions/suppression/', {
            idMission: idMission


        }).then((rep) => {
            //console.log((rep)
        })
        .catch((err) => {
            //console.log((err)
        })
    }
    
        //affichage
    return(
         <form action="submit" >
             <div className="page-supmission">
             <div class="container">
             
                
        <h1 class="title-Liste">Etes vous sûr de supprimer le commentaire ?</h1>
        <div class="body-form">
        <button class="btn btn-danger" onClick={()=>Delete(idMission)}type="submit"> Supprimer la mission</button>
        <br /><br />
        <a class="btn btn-info" href="/liste">Retour à la liste des missions</a>
        </div>
        </div>
        </div>
        </form>
        );

    }

export default suppression;