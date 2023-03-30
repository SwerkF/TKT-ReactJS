import React, {useState} from 'react';
import './Nav.scss';
import logo from '../logo.svg';

const Nav = (props) => {

    const [user] = useState(JSON.parse(localStorage.getItem('user')));
    const handleLogout = () => {
        localStorage.removeItem('user');
    }

    if(!localStorage.getItem('user')) {
        return null;
    } else {
        
        return (
            <div className="comp-nav">
                <nav className="navbar navbar-expand-sm navbar-dark bg-orange text-brown">
                <a className="navbar-brand" href="/home"><img src={logo} alt="logo.png"></img></a>
                <button className="navbar-toggler d-lg-none" type="button" data-toggle="collapse" data-target="#collapsibleNavId" aria-controls="collapsibleNavId"
                    aria-expanded="false" aria-label="Toggle navigation">X</button>
                <div className="collapse navbar-collapse" id="collapsibleNavId">
                    <ul className="navbar-nav ml-auto mt-2 mt-lg-0">
                        <li className="nav-item">
                            <a className="nav-link" href="/home">Accueil</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/encyclopedie">Encyclopédie</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/missions">Missions</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/alertes">Alertes</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/alertes">{user.nomUser} {user.prenomUser}</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/" onClick={()=>handleLogout()}>Logout</a>
                        </li>
                    </ul>
                </div>
            </nav>
            </div>
            
        );
    }
    
};

export default Nav;