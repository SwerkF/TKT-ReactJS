import React, { useState} from 'react';



const FormAjoutAlert= ({Add}) => {
   
   const [newAlert, setAlert]=useState("");
   
    const handleAdd=(event)=>{
        event.preventDefault();
        const form = new FormData(event.target)
        let libelle = form.get("libelleAlert");
        let date = form.get("date");
        let idEtat = form.get("idEtatAlerte")
        let idNiveau=form.get("idNiveauAlert")
        Add(libelle, date, idEtat, idNiveau);
     }
  
    return (
        
          <form action="submit" onSubmit={handleAdd}>
              <div className="page-addAlert">
                  <div class="body-form">
              <h1 class="title">Veuillez remplir les champs suivants </h1>
              <h3 class="libelle">Libelle:</h3>
                <input type="text" name="libelleAlert" placeholder="Libelle du nouvel avertissement"/>
                <h3 class="libelle">Date:</h3>
                <input type="date"   name="date" placeholder="Date du  nouvel avertissement" />
                <h3 class="libelle">Etat:</h3>
                <input type="text"   name="idEtatAlerte" placeholder="Etat de l'alerte"/>
                <h3 class="libelle">Niveau:</h3>
                <input type="text"   name="idNiveauAlert" placeholder="Niveau de l'avertissement"/>
                <br /><br />
                <button class="btn btn-success" type="submit">Ajouter votre nouvel avertissement</button>
                <br /><br />
                <a  class="btn btn-danger" href="/listeAlert">Retour à la liste des avertissements</a>
                </div>
                </div>
            </form>
            
        
    );
};

export default FormAjoutAlert;