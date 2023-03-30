import React, { useState, useEffect } from 'react';
import './Accounts.scss'
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Accounts = (props) => {

    const [accounts, setAccounts] = useState([]);
    const [roles, setRoles] = useState([]);

    const handleLoad = () => {
        axios.get('http://localhost:3300/api/user/get', {
        })
        .then(function (response) {
            setAccounts(response.data.data);
        })

    }
    useEffect(() => {
        document.title = "Gestion des comptes";
        if(JSON.parse(localStorage.getItem('user')).libelleRole !== "admin") {
            return window.location.href = "/home";
        }

        axios.get('http://localhost:3300/api/roles/get', {
        })
        .then(function (response) {
            setRoles(response.data.data);
            handleLoad();
        })

    },[])

    let handleSubmit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:3300/api/user/add', {
            nomUser: e.target.nom.value,
            prenomUser: e.target.prenom.value,
            loginUser: e.target.login.value,
            passwordUser: e.target.password.value,
            idRole: e.target.role.value
        })
        .then(function (response) {
            if(response.status === 200) {
                toast.success('Ajout effectué avec succès!', {
                    position: "bottom-center",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                    });
                handleLoad();
            }
        })
        .catch(function (error) {
            toast.error('Erreur lors de l\'ajout', {
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

    let handleDelete = (id) => {
        axios.post('http://localhost:3300/api/user/delete', {
            idUser: id
        })
        .then(function (response) {
            if(response.status === 200) {
                toast.success('Suppression effectuée avec succès!', {
                    position: "bottom-center",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                    });
                handleLoad();
            }
        })
        .catch(function (error) {
            toast.error('Erreur lors de la suppression', {
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
   
    return (
        <div className="page-accounts">
            <ToastContainer position="bottom-center" autoClose={5000} hideProgressBar={false} newestOnTop={false} closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover theme="light"/>
            <div className="container">
                <div className="row justify-content-around pt-5">
                    <div className="card width-10 mt-5 bg-orange-dark" style={{ overflowY: 'auto', maxHeight: '100%' }}>
                        
                        <div className="card-header bg-orange">
                            <h1 className="text-center text-600">Gestion des comptes</h1>                        
                        </div>
                        <table className="table table-striped bg-orange border-20">
                            <thead>
                                <tr>
                                    <th scope="col"><label className="text-700">NOM</label></th>
                                    <th scope="col"><label className="text-700">PRENOM</label></th>
                                    <th scope="col"><label className="text-700">ROLE</label></th>
                                    <th scope="col"><label className="text-700">ACTIONS</label></th>
                                </tr>
                            </thead>
                            <tbody>
                                {accounts.map((account, index) => {
                                    return (
                                        <tr key={index}>
                                            <td className="text-600">{account.nomUser}</td>
                                            <td className="text-600">{account.prenomUser}</td>
                                            <td className="text-600">{account.libelleRole}</td>
                                            <td>
                                                <button className="btn btn-danger" onClick={() => handleDelete(account.idUser)}>Supprimer</button>
                                            </td>
                                        </tr>
                                    )
                                })}
                            </tbody>
                        </table>
                    </div>
                    <div className="card width-10 mt-5 bg-orange-dark">
                        <div className="card-header bg-orange">
                            <h1 className="text-center text-600">Ajout des comptes</h1>
                        </div>
                        <form className="bg-orange p-3 border-20" onSubmit={handleSubmit}>
                            <div className="form-group">
                                <label className="text-600" htmlFor="nom">Nom</label>
                                <input type="text" className="form-control" name="nom" id="nom" placeholder="Nom" />
                            </div>
                            <div className="form-group">
                                <label className="text-600" htmlFor="prenom">Prénom</label>
                                <input type="text" className="form-control" name="prenom" id="prenom" placeholder="Prénom" />
                            </div>
                            <div className="form-group">
                                <label className="text-600" htmlFor="login">Login</label>
                                <input type="text" className="form-control" name="login" id="login" placeholder="Login" />
                            </div>
                            <div className="form-group">
                                <label className="text-600" htmlFor="password">Mot de passe</label>
                                <input type="password" className="form-control" name="password" id="password" placeholder="Mot de passe" />
                            </div>
                            <div className="form-group">
                                <label className="text-600" htmlFor="role">Rôle</label>
                                <select className="form-control" name="role" id="role">
                                    {roles.map((role, index) => {
                                        return (
                                            <option key={index} value={role.idRole}>{role.libelleRole}</option>
                                        )
                                    })}
                                </select>
                            </div>
                            <button type="submit" className="btn btn-primary">Ajouter</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Accounts;