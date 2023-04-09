import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Popus.scss'

const Popup = (props) => {

    // Initialisation des variables
    const [alertes, setAlertes] = useState([]);
    
    // Récupération des données
    useEffect(() => {
        // Récupération des données
        axios.get("http://localhost:3300/api/alerts/get")
        .then(function (response) {
            setAlertes(response.data.data);
        })
        .catch(function (error) {
            //console.log((error);
        })
    })

    // Affichage du composant Popup
    return (
        <div className="popup">
            <div className="popup-inner">
                <h1>Alertes</h1>
                <div className="alertes">
                    {alertes.map((alerte, index) => (
                        <div key={index} className="alerte">
                            <h2>{alerte.libelleAlerte}</h2>
                            <p>{alerte.commentaireAlerte}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Popup;