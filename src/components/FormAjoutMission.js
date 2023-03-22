import React, { useState } from 'react';

const FormAjoutMission= ({Add}) => {
    const[newMission, setMission]=useState("");
    const handleAdd=(event)=>{
        event.preventDefault();
        const id=new Date().getTime();
        const libelle=newMission;
        const commentaire=newMission;
        const date=newMission;
     
        const NvMission={id,libelle, commentaire, date};
        Add(NvMission);
     }

     const handleChange=(event)=>{
         setMission(event.target.value);
     }
    return (
        <div>
          <form onSubmit={handleAdd}>
                <input type="text" placeholder="Libelle de la nouvelle mission"  onChange={handleChange}/>
                <input type="text" placeholder="Commentaire" onChange={handleChange}/>
                <input type="date" placeholder="Date de la nouvelle mission" onChange={handleChange} />
                <button type="submit">Ajouter votre nouvelle mission</button>
            </form>
        </div>
    );
};

export default FormAjoutMission;