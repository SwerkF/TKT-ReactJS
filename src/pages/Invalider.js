import React, { useEffect, useState } from 'react'
import axios from 'axios'
import './Invalider.scss'

const Invalider = () => {
  const [data, setData] = useState([])
  let idMission = window.location.href.split('=')[1] // récupère le nom de l'animal dans l'url */
  //console.log((idMission)
  useEffect(() => {
    axios
      .get('http://localhost:3300/api/missions/user/getone', {
        params: {
          id: idMission,
        },
      })
      .then((response) => {
        setData(response.data[0])
        //console.log((response)
      })
  }, [])

  const handleClickInvalider = (x) => {
    //console.log((x)
    let text = document.querySelector('.txt-area').value
    axios.get('http://localhost:3300/api/missions/etat/invalid', {
      params: {
        id: x,
        remarque: text.replace(/'/g, "''"),
      },
    })
    window.location.href = '/missionAccueil'
  }

  return (
    <div className="page-mission">
      <div className="container">
        <div className="card">
          <div className="container">
            <div className="text-center">
              <h2 className="mt-2">
                Mission {idMission}- {data.libelleMission}
                <p className="card-text text-40">{data.commentaireMission}</p>
              </h2>
            </div>

            <h4 className="remarque">Remarques :</h4>
            <textarea className="txt-area" rows="5"></textarea>

            <div className="row">
              <div className="col">
                <a
                  href="#"
                  className="btn btn-valid-2 mt-2 mb-2"
                  onClick={() => handleClickInvalider(idMission)}
                >
                  Valider
                </a>
              </div>
              <div className="col">
                <a href="missionAccueil" className="btn btn-danger-2 mt-2 mb-2">
                  Annuler
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Invalider
