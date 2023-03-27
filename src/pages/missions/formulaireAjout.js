import React, { useState,useEffect } from 'react';
import FormAjoutMission from '../../components/FormAjoutMission';
import axios from 'axios';

const FormulaireAjout=()=>{
    //state
     //requête axios ici
    const [mission, setMission] = useState("");
 
    // Ajouter une nouvelle mission
    const Add=(libelle, commentaire, date, idEtatMission,idUser)=>{
        console
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
    return(<div>
        <h1>Veuillez remplir les champs suivants </h1>
        <FormAjoutMission Add={Add}></FormAjoutMission>
        <a href="/liste">Retour à la liste des missions</a>
        </div>);
        
    }

export default FormulaireAjout;  