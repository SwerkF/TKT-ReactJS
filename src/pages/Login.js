import React, { useEffect } from 'react';
import LoginForm from '../components/LoginForm';
import './Login.scss'
import logo from '../logo.svg';

const Login = (props) => {

    // Redirection vers la page d'accueil si l'utilisateur est déjà connecté
    useEffect(() => {
        document.title = "Connexion";
        if(localStorage.getItem('user')) {
            window.location.href = "/home";
        }
    },[])

    // Afficher la page de connexion
    return (
        <div className="page-login pt-5">
            <div className="container pt-5">
                <div className="card card-margin">
                    <div className="card-header">
                        <div className="d-flex justify-content-center">
                            <img className="img-40vw" src={logo} alt="logo.svg"></img>
                        </div>
                    </div>
                    <LoginForm></LoginForm>
                </div>
            </div>
        </div>
        
    );
};

export default Login;