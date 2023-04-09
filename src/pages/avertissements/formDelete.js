import React, { useState,useEffect } from 'react';
import axios from 'axios';

const FormDelete=()=>{
    //state
     //requête axios ici
    const [alert, setAlert] = useState("");
 
    // Ajouter une nouvelle mission
    const Delete=(idAlert)=>{
        
        axios.delete('http://localhost:3300/api/avertissements/formDelete/', {
            idAlert: idAlert


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
            <div className="page-supAlert">
                <h1 class="title-Liste">Etes vous sûr de supprimer l'avertissement ?</h1>
                <button  class="btn btn-danger" aria-label="Delete" onClick={()=>Delete(idAlert)} > Supprimer l'alerte</button>
                <br /><br />
                <a  class="btn btn-info" href="/listeAlert">Retour à la liste des avertissements</a>
            </div>
        </form>
        );
        
    }

export default FormDelete;