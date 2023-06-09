import React, { useEffect, useState } from 'react'
import axios from 'axios'
import './MissionAccueil.scss'

const MissionAccueil = () => {
  /*recupere les données de la base de données*/

  const [data, setData] = useState([])
  const [data2, setData2] = useState([])
  const [user] = useState(JSON.parse(localStorage.getItem('user')))

  let load = () => {
    axios
      .get('http://localhost:3300/api/missions/user?id=' + user.idUser)
      .then((response) => {
        setData(response.data)
      })

    axios
      .get('http://localhost:3300/api/missions/user/done?id=' + user.idUser)
      .then((response) => {
        setData2(response.data)
      })
  }

  useEffect(() => {
    axios
      .get('http://localhost:3300/api/missions/user?id=' + user.idUser)
      .then((response) => {
        setData(response.data)
      })

    axios
      .get('http://localhost:3300/api/missions/user/done?id=' + user.idUser)
      .then((response) => {
        setData2(response.data)
      })
  }, [])

  const handleClickValider = (x) => {
    //console.log((x)
    axios.get('http://localhost:3300/api/missions/etat/valid', {
      params: {
        id: x,
      },
    })
    load()
  }

  const handleClickStart = (x) => {
    //console.log((x)
    axios.get('http://localhost:3300/api/missions/etat/start', {
      params: {
        id: x,
      },
    })
    load()
  }

  return (
    <div className="page-mission">
      <div className="container">
        <div className="card">
          <h1 className="text-center">Mes missions</h1>
          <h5 className="text-center card-title">En Cours</h5>

          {data.map((item) => (
            <div>
              <div className="card-body bg-orange ml-4 mr-4 mb-4">
                <div className="row">
                  <div className="col">
                    <h3>
                      Mission {item.idMission}-{item.libelleMission}
                    </h3>
                    <p className="card-text">{item.commentaireMission}</p>
                  </div>
                  <div className="col col-lg-2">
                    <div className="col">
                      <a
                        href="#"
                        className="btn btn-valid "
                        onClick={() => handleClickValider(item.idMission)}
                      >
                        Valider
                      </a>
                    </div>
                    <div className="col">
                      <a
                        href={'Invalider?idMission=' + item.idMission}
                        className="btn btn-danger mt-2"
                      >
                        Invalider
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
          <hr></hr>
          <h5 className="text-center card-title">A Faire</h5>
          {data2.map((item) => (
            <div className="card-body bg-orange ml-4 mr-4 mb-3">
              <div className="row">
                <div className="col">
                  <h3>
                    Mission {item.idMission}-{item.libelleMission}
                  </h3>

                  <p className="card-text">{item.commentaireMission}</p>
                </div>
                <div className="col col-lg-2">
                  <div className="col">
                    <a
                      href="#"
                      className="btn btn-commencer mt-2"
                      onClick={() => handleClickStart(item.idMission)}
                    >
                      Commencer
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default MissionAccueil
