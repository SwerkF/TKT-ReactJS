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
       
        console.log(user)
        return (
            <div className="comp-nav">
                <nav class="navbar navbar-expand-sm navbar-dark bg-orange text-brown">
                <a class="navbar-brand" href="/home"><img src={logo} alt="logo.png"></img></a>
                <button class="navbar-toggler d-lg-none" type="button" data-toggle="collapse" data-target="#collapsibleNavId" aria-controls="collapsibleNavId"
                    aria-expanded="false" aria-label="Toggle navigation">X</button>
                <div class="collapse navbar-collapse" id="collapsibleNavId">
                    <ul class="navbar-nav ml-auto mt-2 mt-lg-0">
                        <li class="nav-item">
                            <a class="nav-link" href="/home">Accueil</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="/encyclopedie">Encyclopédie</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="/missions">Missions</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="/alertes">Alertes</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="/alertes">{user.nomUser} {user.prenomUser}</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="/" onClick={()=>handleLogout()}>Logout</a>
                        </li>
                    </ul>
                </div>
            </nav>
            </div>
            
        );
    }
    
};

export default Nav;