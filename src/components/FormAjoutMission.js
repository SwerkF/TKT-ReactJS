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
        
          <form action="submit" onSubmit={handleAdd}>
              <div className="page-ajoutmission">

                  <div class="body-form">
                      
              <h1 class="title">Veuillez remplir les champs suivants </h1>
              <h3 class="libelle">Libelle:</h3>
                <input  type="text" name="libelleMission" placeholder="Libelle de la nouvelle mission"/>
                <h3 class="libelle">Commentaire:</h3>
                <input  type="text"   name="commentaireMission" placeholder="Commentaire" />
                <h3 class="libelle">Date:</h3>
                <input  type="date"   name="dateMission" placeholder="Date de la nouvelle mission" />
                <h3 class="libelle">Etat:</h3>
                <input  type="text"   name="idEtatMission" placeholder="Etat de la mission"/>
                <h3 class="libelle">Type d'utilisateur:</h3>
                <input  type="text"   name="idUserMission" placeholder="Type utilisateur"/>
                <br /><br />
                <button  class="btn btn-info" type="submit">Ajouter votre nouvelle mission</button>
                <br /> <br />
                <a class="btn btn-danger" href="/liste">Retour à la liste des missions</a>
                </div>
               
                </div>
            </form>
        
    );
};

export default FormAjoutMission;