import React, {useState, useEffect} from 'react';
import axios from 'axios';
import './Animals.scss';
import CardAnimal from '../components/CardAnimal';

const Animals = (props) => {

    let [animals, setAnimals] = useState([]);
    let [sante, setSante] = useState([]);

    useEffect(() => {
        load();
        axios.get('http://localhost:3300/api/sante/get', {
        })
        .then(function (response) {
            setSante(response.data.data);
        })
    },[])

    let load = () => {
        axios.get('http://localhost:3300/api/animals/get', {
        })
        .then(function (response) {
            setAnimals(response.data.data);
        })
    }

    return (
        <div className="page-animals">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <h1 className="text-center">Gestion des animaux</h1>
                        <div className="row">
                            {animals.map((item, index) => {
                                return (
                                    <div key={index} className="col-4">
                                        <CardAnimal nom={item.nomAnimal} poids={item.poidsAnimal} src={"https://dummyimage.com/640x360/fff/aaa"} idSante={item.idSante} race={item.libelleRace} enclos={item.libelleEnclos} sante={sante}></CardAnimal>
                                    </div>
                                    
                                )
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Animals;