import React, { useEffect } from 'react';
import CardAccueil from '../components/CardAccueil';
import './Admin.scss'
const Admin = (props) => {

    // Si l'utilisateur n'est pas connecté, on le redirige vers la page de connexion
    useEffect(() => {
        document.title = "Administration";
        if(!localStorage.getItem('user')) {
            document.location.href = "/login";
        }
    })

    // Afficher la page d'administration
    return (
        <div className="page-admin d-flex align-items-center">
            <div className="container">
                <div className="row  justify-content-between">
                    <div className="col-sm width-10">
                        <CardAccueil title="Gestion des missions" text="Retrouvez ici la liste des missions. Ajoutez de nouvelles missions pour vos employés ou supprimez les" link="/administration/missions" src="https://cms.londonzoo.org/sites/default/files/styles/responsive/public/1024/729/1/2022-11/Asim-at-London-Zoo.jpg?itok=sxChnnU-"/>
                    </div>
                    <div className="col-sm width-10">
                        <CardAccueil title="Gestion des animaux" text="Retrouvez la liste de vos animaux dans le Zoo et modifiez leur état de santé à tout moment." link="/administration/animals" src="https://ichef.bbci.co.uk/news/976/cpsprodpb/11F4/production/_111369540_mediaitem111369539.jpg"></CardAccueil>
                    </div>
                    <div className="col-sm width-10">
                        <CardAccueil title="Gestion des comptes" text="Page pour la gestion des comptes du parc. Ajoutez de nouveaux employés juste ici." link="/administration/accounts" src="https://aldf.org/wp-content/uploads/2021/01/bear-4494180_1920-1200x676.jpg"></CardAccueil>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Admin;