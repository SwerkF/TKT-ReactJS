import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Popus.scss'

const Popup = (props) => {

    const [alertes, setAlertes] = useState([]);
    
    useEffect(() => {
        axios.get("http://localhost:3300/api/alerts/get")
        .then(function (response) {
            setAlertes(response.data.data);
        })
        .catch(function (error) {
            //console.log((error);
        })
    })

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