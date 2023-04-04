import React, {useState} from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './CardAnimal.scss'

const CardAcceuil = (props) => {

    let [sante, setSante] = useState(props.sante)

    const handleChangeSante = (e) => {
        e.preventDefault();
        const idSante = e.target.value;
        const confirmed = window.confirm(
          "Êtes-vous sûr de vouloir modifier la santé de cet animal ?"
        );
        if (confirmed) {
          axios
            .get("http://localhost:3300/api/animals/update/sante", {
              params: {
                idAnimal: props.idAnimal,
                idSante: idSante,
              },
            })
            .then(function (response) {
              if (response.status === 200) {
                toast.success("Modification effectuée avec succès!", {
                  position: "bottom-center",
                  autoClose: 5000,
                  hideProgressBar: false,
                  closeOnClick: true,
                  pauseOnHover: true,
                  draggable: true,
                  progress: undefined,
                  theme: "light",
                });
              } else {
                toast.error("Erreur lors de la modification", {
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
            })
            .catch(function (error) {
              toast.error("Erreur lors de la modification", {
                position: "bottom-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
              });
            });
        }
      };

    return (
        <div className="comp-animals mt-5">
            <ToastContainer position="bottom-center" autoClose={5000} hideProgressBar={false} newestOnTop={false} closeOnClick={false} rtl={false} pauseOnFocusLoss draggable pauseOnHover theme="light"/>
            <a className="a-animals"href={props.link}>
                <div className="card width20">
                <img className="card-img-top" src={props.src} alt="Card cap"/>
                    <div className="card-body card-body-20 bg-dark-orange">
                        <p className="card-title card-name-animals mt-n3">Nom: {props.nom}</p>
                        <p className="card-text card-poids-animals mt-n3">Race: {props.race}</p>
                        <p className="card-text card-poids-animals mt-n3">Poids: {props.poids} kg</p>
                        <p className="card-text card-sante-animals mt-n3">Enclos: {props.enclos}</p>
                        <p className="card-text mt-n3">Santé</p>
                        <select className="form-control mt-n3 select-sante" onChange={handleChangeSante} value={props.idSanteAnimal}>
                            {sante.map((item, index) => {
                                return (
                                    <option
                                        key={item.idSante}
                                        value={item.idSante}
                                    >
                                        {item.libelleSante}
                                    </option>
                                );
                            })}
                        </select>
                    </div>
                </div>
            </a>
        </div>
        
    );
};

export default CardAcceuil;