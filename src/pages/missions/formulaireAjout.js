import React, { useState } from 'react';
import FormAjoutMission from '../../components/FormAjoutMission';

const FormulaireAjout=()=>{
    //state

    const [mission, setMission] = useState([]);
    // Supprimer une mission
    const Delete =(id)=>{
        const copie=[... mission ];

        const MissionUpdate=copie.filter((mission)=>mission.id!==id);
        setMission(MissionUpdate);
        }
    // Ajouter une nouvelle mission
        const Add=(addMission)=>{
            const copie=[... mission];
             
            copie.push(addMission);
            setMission(copie);


        }
       
        //affichage
    return(<div>
        <h1>Veuillez remplir les champs suivants </h1>
        
              <button onClick={()=>Delete(mission.id)}> Supprimer la mission</button>
          
        
        
        <FormAjoutMission Add={Add}></FormAjoutMission>
        <a href="/liste">Retour à l'accueil</a>
    </div>);
        
         }


export default FormulaireAjout;
 
    