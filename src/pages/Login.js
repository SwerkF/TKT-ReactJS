import React from 'react';
import LoginForm from '../components/LoginForm';
import './Login.css'
import logo from '../logo.svg';

const Login = (props) => {


    if(localStorage.getItem('user')) {
        window.location.href = "/home";
    }

    return (
        <div className="container">
            <div className="card card-margin">
                <div className="card-header">
                    <div className="d-flex justify-content-center">
                        <img className="img-40vw" src={logo} alt="logo.svg"></img>
                    </div>
                </div>
                <LoginForm></LoginForm>
            </div>
            
        </div>
    );
};

export default Login;