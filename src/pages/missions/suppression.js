import React, { useState,useEffect } from 'react';
import axios from 'axios';

const suppression=()=>{
    //state
     //requête axios ici
    const [mission, setMission] = useState("");
 
    // Ajouter une nouvelle mission
    const Delete=(idMission)=>{
        
<<<<<<< Updated upstream
        axios.delete('http://localhost:3300/api/missions/delete/'+idMission, {
=======
<<<<<<< HEAD
        axios.post('http://localhost:3300/api/missions/delete/'+idMission, {
=======
        axios.delete('http://localhost:3300/api/missions/delete/'+idMission, {
>>>>>>> feature-avertissement
>>>>>>> Stashed changes
            idMission: idMission


        }).then((rep) => {
        })
    }
    
        //affichage
<<<<<<< HEAD
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
=======
    return(<div>
         <form action="submit" >
        <h1>Etes vous sûr de supprimer le commentaire ?</h1>
        <button onClick={()=>Delete(idMission)}type="submit"> Supprimer la mission</button>
        <a href="/liste">Retour à la liste des missions</a>
        </form>
        </div>);
>>>>>>> feature-avertissement
        
    }

export default suppression;