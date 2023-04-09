import React, {useState, useEffect} from 'react';
import axios from 'axios';
import './Alert.scss';
import './Popus.scss'

const Alert = (props) => {

    let [display, setDisplay] = useState([])
    let [alertes, setAlertes] = useState([]);

    //console.log((alertes)
    const handleChange = () => {
        if (display == "none") {
            setDisplay("block");
            document.getElementById("popup").style.display = "block"
        } else {
            setDisplay("none");
            document.getElementById("popup").style.display = "none"

        }
    }

    useEffect(() => {
        axios.get("http://localhost:3300/api/alerts/get")
        .then(function (response) {
            setAlertes(response.data.data);
        })
        .catch(function (error) {
            //console.log((error);
        })
    },[])

    return (
        <div className="alerts">
            <div className="alert-button">
                <div className="alert-number text-center"><p>{alertes.length}</p></div>
                <a className="btn" onClick={handleChange}>!</a>
            </div>
            <div id="popup" style={{display: {display}}} className="popup">
                <div className="popup-inner">
                    <h1 className="text-center">Alertes</h1>
                    <div className="alertes">
                        {alertes.map((item, index) => {
                            let niv;
                            if (item.libelleEtat == "Soft") {
                                niv = '🟢'
                            } 
                            else if (item.libelleEtat == "Medium") {
                                niv = '🟡'
                            }
                            else if (item.libelleEtat == "Danger") {
                                niv = '🔴'
                            } else {
                                niv = '⚠️'
                            }
                        
                            return (
                                <div key={index} className="alerte">
                                    <strong><p>{item.idAlert} {niv} - {item.libelleAlert}</p></strong>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Alert;