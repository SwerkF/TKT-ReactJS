import React, { useState } from 'react';


const FormAjoutMission= ({Add}) => {
   
   const [newMission, setMission]=useState("");
   
    const handleAdd=(event)=>{
        event.preventDefault();
        const form = new FormData(event.target)
        let libelle = form.get("libelleMission");
        let commentaire = form.get("commentaireMission");
        let date = form.get("dateMission");
        let idEtat = form.get("idEtatMission")
        let idUser=form.get("idUserMission")
        Add(libelle, commentaire, date, idEtat, idUser);
     }
  
    return (
        <div>
          <form action="submit" onSubmit={handleAdd}>
                <input type="text" name="libelleMission" placeholder="Libelle de la nouvelle mission"/>
                <input type="text"   name="commentaireMission" placeholder="Commentaire" />
                <input type="date"   name="dateMission" placeholder="Date de la nouvelle mission" />
                <input type="text"   name="idEtatMission" placeholder="Etat de la mission"/>
                <input type="text"   name="idUserMission" placeholder="Type utilisateur"/>
                <button type="submit">Ajouter votre nouvelle mission</button>
            </form>
        </div>
    );
};

export default FormAjoutMission;