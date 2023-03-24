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
    return (
        <div className="container page">
            <h1><strong>Encyclopédie</strong></h1>
            <hr></hr>
            <h2><strong>Liste de nos animaux</strong></h2>
            <div className="container ">
                <div className="row img_animal">                       
                            {data.map((item) => (
                                <div className="col-sm card" id={item.idRace} key={item.idRace} name={item.libelleRace}>
                                    <a href=""><img className="image" src={"http://localhost:3300/api/src/images/"+item.libelleImage}></img>
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