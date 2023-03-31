import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './animal.scss';

const Animal = () => {
    let animal = window.location.href.split("=")[1]; // récupère le nom de l'animal dans l'url */
    const [data, setData] = useState([])
    const [data2, setData2] = useState([])

    useEffect(() => {
        
        console.log(data2)
        axios
          .get('http://localhost:3300/api/encyclopedie/animal?id='+animal)
          .then((response) => {
            setData(response.data)
          }),

          axios
            .get('http://localhost:3300/api/encyclopedie/imageAnimal?id='+animal)
            .then((response) => {
            setData2(response.data)
            console.log(data2[0])
          })
    }, [])

    return (
        <div className='page-animal'>
            {data2.map((image) => {
              if(image.idImage === data2[0].idImage) {
                return <img className="image" id={image.idImage} src={"http://localhost:3300/api/src/images/"+image.libelleImage}></img>
              } 
            })}
            {data.map((item) => (
                <h1 className='text-center'>{item.libelleRace}</h1>
            ))}
            <hr></hr>
                <div className='row justify-content-around'>
                    <div className='col-sm'>
                        <div className='card ml-1 mr-1'>
                            <h2>Description</h2>
                            {data.map((item) => (
                                <div>
                                    <p className='text-justify font-weight-bold'>{item.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className='col-sm'>
                        <div className=' card ml-1 mr-1'>
                            <h2>Caractéristiques</h2>
                            {data.map((item) => (
                                <div>
                                    <p><b>Origine : </b>{item.origine}</p>
                                    <p><b>Alimentation : </b>{item.libelle}</p>
                                    <p><b>Poids : </b>{item.poids}</p>
                                    <p><b>Taille : </b>{item.taille}</p>
                                    <p><b>Temps de Portée : </b>{item.tempsPorte}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
        </div>
    );
};

export default Animal;