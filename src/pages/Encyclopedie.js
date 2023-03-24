import React, { useEffect, useState } from 'react';
import axios from 'axios';
import css from '../pages/encyclopedie.css';

const Encyclopedie = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:3300/api/encyclopedie") /* lien pour récupérer valeur requête */
        .then((response) => {
            setData(response.data);
        })
    })

    const liItem = document.querySelectorAll('ul li');
    const imgItem = document.querySelectorAll('.card img');

    liItem.forEach(li => {
        li.onclick = function () {
            //active
            liItem.forEach(li => {
                li.className = "";   
            })
            li.className = "active";

            //filtre
            const value = li.textContent;
            imgItem.forEach(img => {
            img.style.display = "none";
            if(img.getAttribute("data-filter") == value.toLowerCase()){
                img.style.display = "block";
            }
            })
        }
    });
    return (
        <div className="container page">
            <h1><strong>Encyclopédie</strong></h1>
            <hr></hr>
            <h2><strong>Liste de nos animaux</strong></h2>
            <div className="container">
                <div className="row filter_card">
                    <ul>
                        <li class="active">Tous</li>
                        <li>Carnivore</li>
                        <li>Omnivore</li>
                        <li>Herbivore</li>
                    </ul>
                </div>
                <div className="row img_animal">                       
                            {data.map((item) => (
                                <div className="col-sm card" id={item.idRace} key={item.idRace} name={item.libelleRace}>
                                    <a href={"/animal?"+item.libelleRace}><img className="image" src={"http://localhost:3300/api/src/images/"+item.libelleImage} data-filter={item.libelle}></img>
                                    <div className='overlay'>
                                        <div className="text">{item.libelleRace}</div>
                                    </div></a>
                                </div>
                            ))}                    
                </div>
            </div>
        </div>
    );
};

export default Encyclopedie;