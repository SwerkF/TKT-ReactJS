import React from 'react';
import './CardAccueil.scss'

const CardAcceuil = (props) => {

    // Afficher du composant CardAccueil
    return (
        <div className="comp-accueil">
            <a className="a-accueil" href={props.link}>
                <div className="card width20">
                <img className="card-img-top" src={props.src} alt="Card cap"/>
                    <div className="card-body card-body-20 bg-dark-orange">
                        <h5 className="card-title card-title-accueil text-center">{props.title}</h5>
                        <p className="card-text card-text-accueil text-center">{props.text}</p>
                    </div>
                </div>
            </a>
        </div>
        
    );
};

export default CardAcceuil;