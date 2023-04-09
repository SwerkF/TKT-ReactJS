import React, { useState, useEffect } from 'react';
import './Accounts.scss'
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Accounts = (props) => {

    const [accounts, setAccounts] = useState([]);
    const [roles, setRoles] = useState([]);

    //Fonction pour charger les comptes
    const handleLoad = () => {
        //Récupérer les coomptes
        axios.get('http://localhost:3300/api/user/get', {
        })
        .then(function (response) {
            //attribuer les comptes à la variable accounts
            setAccounts(response.data.data);
        })

    }
    useEffect(() => {
        document.title = "Gestion des comptes";

        //Si l'utilisateur n'est pas un admin, on le redirige vers la page d'accueil
        if(JSON.parse(localStorage.getItem('user')).libelleRole !== "admin") {
            return window.location.href = "/home";
        }

        //Récupérer les roles
        axios.get('http://localhost:3300/api/roles/get', {
        })
        .then(function (response) {
            //attribuer les roles à la variable roles
            setRoles(response.data.data);

            handleLoad();
        })

    },[])

    //Fonction pour ajouter un compte
    let handleSubmit = (e) => {
        //Empêcher le rechargement de la page
        e.preventDefault();
        //Ajouter le compte
        axios.post('http://localhost:3300/api/user/add', {
            nomUser: e.target.nom.value,
            prenomUser: e.target.prenom.value,
            loginUser: e.target.login.value,
            passwordUser: e.target.password.value,
            idRole: e.target.role.value
        })
        .then(function (response) {
            //Si l'ajout a été effectué avec succès
            if(response.status === 200) {
                //Afficher un message de succès
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
                //Recharger les comptes
                handleLoad();
            }
        })
        //Si l'ajout a échoué
        .catch(function (error) {
            //Afficher un message d'erreur
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

    //Fonction pour supprimer un compte
    let handleDelete = (id) => {
        //Supprimer le compte
        axios.post('http://localhost:3300/api/user/delete', {
            idUser: id
        })
        .then(function (response) {
            //Si la suppression a été effectuée avec succès
            if(response.status === 200) {
                //Afficher un message de succès
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
        //Si la suppression a échoué
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
   
    //Afficher la page
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