import React, { useState,useEffect } from 'react';
import axios from 'axios';
import './alert.scss';

const listeAlert=()=>{
    const [data,setData]=useState([]);
      useEffect(()=>{
        axios.get("http://localhost:3300/api/avertissements/listeAlert").then((response)=>{
          setData(response.data.result);
      })
      },[]);

      const deleteAlert = (idAlert) => {
          
        axios.get('http://localhost:3300/api/avertissements/formDelete', {
          params: {
            id: idAlert
          },
      }).then((rep) => {
        console.log(rep)
      })
      .then((err) => {
        console.log(err)
      })
  }
         
      return(<div className="page-listeavertissements">
      <div className="container page">
          <h1 class="title-Liste">Veuillez consulter la liste des avertissements</h1>
          <div className="container">
          <div className="col">
         
          {data.map((avertissement)=>(
              <div className="row card p-4 mt-3" id={avertissement.idAlert} key={avertissement.idAlert} name={avertissement.libelleAlert}>
                    <h1 class="title-Row"><strong>{avertissement.libelleAlert}</strong></h1>
                  <p><b>Date de l'avertissement :</b> {new Date(avertissement.date).toLocaleDateString('fr')}</p>
                  <p><b>Niveau de l'alerte :</b> {avertissement.libelleEtat}</p>
                  <p><b>Etat de l'avertissement :</b> {avertissement.libelleAlertEtat}</p>
                  <a class="btn btn-danger" type="submit" onClick={()=>deleteAlert(avertissement.idAlert)}>Suppression de l'alerte n°{avertissement.idAlert}</a>
              </div>
            ))}
            <br />
            <a class="btn btn-success" href="/formAjout">Ajouter un nouvel avertissement</a><br/>
            </div>
            </div>
        </div>
      </div>
      );
}

export default listeAlert;
