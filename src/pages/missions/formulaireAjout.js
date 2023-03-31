import React, { useState,useEffect } from 'react';
import FormAjoutMission from '../../components/FormAjoutMission';
import axios from 'axios';

const FormulaireAjout=()=>{
    //state
     //requête axios ici
    const [mission, setMission] = useState("");
 
    // Ajouter une nouvelle mission
    const Add=(libelle, commentaire, date, idEtatMission,idUser)=>{
    
        axios.post('http://localhost:3300/api/missions/insert', {
            libelleMission: libelle,
            commentaireMission: commentaire,
            dateMission: date,
            idEtatMission: idEtatMission ,
            idUserMission: idUser
        }).then((rep) => {
        })
    }
        //affichage
    return(<div className="page-listemission">
        <div className="container">
        <FormAjoutMission Add={Add}></FormAjoutMission>
        </div>
        
        
        </div>);
        
    }

export default FormulaireAjout;  