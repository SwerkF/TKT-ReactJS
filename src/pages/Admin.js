import React from 'react';
import CardAccueil from '../components/CardAccueil';
import './Admin.css'
const Admin = (props) => {
    return (

        <div className="page-admin d-flex align-items-center">
            <div className="container">
                <div className="row  justify-content-between">
                    <div className="col-sm width-10">
                        <CardAccueil title="Gestion des missions" text="Retrouvez ici la liste des missions. Ajoutez de nouvelles missions pour vos employés ou supprimez les" link="/administration/missions" src="https://cdn-images.zoobeauval.com/tezSQU1qf_1CirojEl3JB0VZRVU=/800x600/https%3A%2F%2Fs3.eu-west-3.amazonaws.com%2Fimages.zoobeauval.com%2F2020%2F06%2Flion2-5ee39badf0e85.jpg"/>
                    </div>
                    <div className="col-sm width-10">
                        <CardAccueil title="Gestion des comptes" text="Page pour la gestion des comptes du parc. Ajoutez de nouveaux employés juste ici." link="/administration/animals" src="https://cdn-images.zoobeauval.com/tezSQU1qf_1CirojEl3JB0VZRVU=/800x600/https%3A%2F%2Fs3.eu-west-3.amazonaws.com%2Fimages.zoobeauval.com%2F2020%2F06%2Flion2-5ee39badf0e85.jpg"/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Admin;