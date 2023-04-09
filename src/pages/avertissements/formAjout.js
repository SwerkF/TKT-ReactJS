import React, { useState,useEffect } from 'react';
import FormAjoutAlert from '../../components/FormAjoutAlert';
import axios from 'axios';

const FormAjout=()=>{
    //state
     //requête axios ici
const [avertissement, setAvertissement] = useState("");
 
    // Ajouter une nouvelle mission
    const Add=(libelle, date, idEtat,idNiveau)=>{
    
        axios.post('http://localhost:3300/api/avertissements/insert', {
            libelleAlert: libelle,
            date: date,
            idEtatAlerte: idEtat ,
            idNiveauAlert: idNiveau
        }).then((rep) => {
            document.location.href = "/listeAlert";
        })
    }
        //affichage
    return(
    <div className="page-listeavertissements">
        <div className="container">
            <FormAjoutAlert Add={Add} className="mt-5"></FormAjoutAlert>
        </div>
    </div>);
        
    }

export default FormAjout;  