import React, { useState,useEffect } from 'react';
import axios from 'axios';

const liste=()=>{
    const[data,setData]=useState([]);
      useEffect(()=>{
        axios.get("http://localhost:3300/liste").then((response)=>{
          console.log(response.data.results);
          setData(response.data.results);
      })
      },[]);
      return(
          <table>
              <h1>Voici la liste des missions</h1>
              <th>
                  <tr>Libelle</tr>
                  <tr>Commentaire</tr>
                  <tr>Date</tr>
    
              </th>
          <ul>
           {data.map((d,index)=>(
            <li key={index}>
                {d.libelleMission} <br />
                {d.commentaireMission} <br />
                {d.dateMission} <br />
                
               
            </li>
           ))}
          </ul>
          <a href="/formulaire">Ajouter une mission</a><br/>
          
</table>)};
  

export default liste;
