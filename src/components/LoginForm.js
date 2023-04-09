import React, { useState } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';

const LoginForm = (props) => {

    
    const [credentials, setCredentials] = useState([
        {
            login: "",
            password: ""
        }
    ])

    const handleLogin = () => {
        axios.get('http://localhost:3300/api/user/login', {
            params: {
                login: credentials.login,
                password: credentials.password
            }
        })
        .then((res) => {
            if(res.data) {
                if(res.data.data) {
                    //save user in localstorage;
                    localStorage.setItem('user', JSON.stringify(res.data.data));
                    //redirect to home
                    window.location.href = "/home";
                } else {
                    toast.error('Echec lors du login.', {
                        position: "bottom-center",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "light",
                        });
                }
            }
        })
        .catch((err) => {
            //console.log((err)
            toast.error('Echec lors du login.', {
                position: "bottom-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                });
        })
    }

    let handleChangeLogin = (e) => {
        setCredentials({
            ...credentials,
            login: e.target.value
        })
        //console.log((credentials)
    }

    let handleChangePassword = (e) => {
        setCredentials({
            ...credentials,
            password: e.target.value
        })
        //console.log((credentials)
    }

    return (
        <div className="card-body">
            <ToastContainer position="bottom-center" autoClose={5000} hideProgressBar={false} newestOnTop={false} closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover theme="light"/>
            <div className="d-flex flex-column flex-cred mt-4">
                <label for="login" className="label">Identifiant</label>
                <input type="text" name="login" id="login" className="input" value={credentials.login} onChange={handleChangeLogin} required></input>
            </div>
            <div className="d-flex flex-column flex-cred mt-4">
                <label for="password" className="label">Mot de passe</label>
                <input type="password" name="password" id="password" className="input" value={credentials.value} onChange={handleChangePassword} required></input>
            </div>
            <div className="d-flex justify-content-center mt-4">
                <button className="btn btn-brown" onClick={handleLogin}>Connexion</button>
            </div>
        </div>
    );
};

export default LoginForm;