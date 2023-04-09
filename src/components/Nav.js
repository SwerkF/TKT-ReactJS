import React, { useState } from 'react'
import './Nav.scss'
import logo from '../logo.svg'

const Nav = (props) => {
  // Déclaration des variables
  const [user] = useState(JSON.parse(localStorage.getItem('user')))

  // Fonction de déconnexion
  const handleLogout = () => {
    localStorage.removeItem('user')
  }

  // Afficher la barre de navigation
  if (!localStorage.getItem('user')) {
    // Si l'utilisateur n'est pas connecté, on affiche la barre de navigation de la page de connexion
    return null
  } else {
    // Si l'utilisateur est connecté, on affiche la barre de navigation de la page d'accueil
    return (
      <div className="comp-nav">
        <nav className="navbar navbar-expand-sm navbar-dark bg-orange text-brown">
          <a className="navbar-brand" href="/home">
            <img src={logo} alt="logo.png"></img>
          </a>
          <button
            className="navbar-toggler d-lg-none"
            type="button"
            data-toggle="collapse"
            data-target="#collapsibleNavId"
            aria-controls="collapsibleNavId"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            X
          </button>
          <div className="collapse navbar-collapse" id="collapsibleNavId">
            <ul className="navbar-nav ml-auto mt-2 mt-lg-0">
              <li className="nav-item">
                <a className="nav-link" href="/home">
                  Accueil
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/encyclopedie">
                  Encyclopédie
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/missionAccueil">
                  Missions
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/listeAlert">
                  Alertes
                </a>
              </li>
              {user.libelleRole === 'admin' ? (
                <li className="nav-item">
                  <a className="nav-link" href='/administration'>
                    Administration
                  </a>
              </li>
              ) : null}
              <li className="nav-item">
                <a className="nav-link">
                  {user.nomUser} {user.prenomUser}
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/" onClick={() => handleLogout()}>
                  Logout
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    )
  }
}

export default Nav
