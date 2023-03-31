import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './encyclopedie.scss';

const Encyclopedie = () => {
    const [data, setData] = useState([]);
    const [data2, setData2] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:3300/api/encyclopedie") /* lien pour récupérer valeur requête */
        .then((response) => {
            setData(response.data);
            setData2(response.data);
        })
    },[])

    const handleChangeOrdre = (event) => {
        let array = [];
        if(event.target.value === "a_z"){
            data.forEach((item) => {
                array.push(item);
            })
            array.sort((a, b) => (a.libelleRace > b.libelleRace) ? 1 : -1);
            setData(array);
        }else if(event.target.value === "z_a"){
            data.forEach((item) => {
                array.push(item);
            })
            array.sort((a, b) => (a.libelleRace < b.libelleRace) ? 1 : -1);
            setData(array);
        }
    }

    const liItem = document.querySelectorAll('ul li');
    const handleClickFiltre = (event) => {
        liItem.forEach(li => {
            li.onclick = function () {
                
                //reintialisation de data
                setData(data2);

                //active
                liItem.forEach(li => {
                    li.className = "";
                })
                li.className = "active";

                //filtre
                let filter = li.textContent;
                console.log(filter);
                let array = [];
                data2.forEach((item) => {
                if(item.libelle === filter){
                    array.push(item);
                }else if (filter === "Tous"){
                    array.push(item);
                }
                })
                setData(array);
            }
        });
    }
    return (
        <div className="page-encyclopedie">
            <div className="container page">
                <h1 className='titre_ency'><strong>Encyclopédie</strong></h1>
                <hr></hr>
                <h2 className='liste_ani'><strong>Liste de nos animaux</strong></h2>
                <div className="container">
                    <div className="row filter_card">
                        <ul>
                            <li class="active" onClick={handleClickFiltre} >Tous</li>
                            <li onClick={handleClickFiltre} >Carnivore</li>
                            <li onClick={handleClickFiltre} >Omnivore</li>
                            <li onClick={handleClickFiltre} >Herbivore</li>
                            <select className="form-select" aria-label="Default select example" onChange={handleChangeOrdre}>
                                <option value="a_z">De A à Z</option>
                                <option value="z_a">De Z à A</option>
                            </select>
                        </ul>                   
                    </div>
                    <div className="row img_animal">                       
                        {data.map((item) => (
                            <div className="col-sm card" id={item.idRace} key={item.idRace} name={item.libelleRace}>
                                <a href={"/animal?idRace="+item.idRace}><img className="image" id={item.libelleRace} src={"http://localhost:3300/api/src/images/"+item.libelleImage} name={item.libelle}></img>
                                    <div className='overlay'>
                                        <div className="text">{item.libelleRace}</div>
                                    </div>
                                </a>
                            </div>
                        ))}                    
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Encyclopedie;