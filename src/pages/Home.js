import React, { useEffect } from 'react'
import './Home.scss'
import CardAcceuil from '../components/CardAccueil'

const Home = (props) => {
  let admin = <></>
  if (JSON.parse(localStorage.getItem('user')).libelleRole === 'admin') {
    admin = (
      <CardAcceuil
        title="Administration"
        text="Panneau administratif pour du site. Ajoutez y des missions, contrôlez les alertes et bien plus encore."
        link="/administration"
        src="https://www.wwf.org.au/images/carousel/3a413e04-d0d7-4df7-9d19-7b94b71b08f1_img-a-portrait-of-a-giant-panda-china-1000px.jpg"
      />
    )
  }
  useEffect(() => {
    document.title = 'Accueil'
    if (!localStorage.getItem('user')) {
      window.location.href = '/'
    }
  }, [])

  return (
    <div className="page-home d-flex align-items-center">
      <div className="container">
        <div className="row  justify-content-around">
          <div className="col-sm pb-5 mt-1">
            <CardAcceuil
              page="encyclopedie"
              title="Encyclopédie"
              text="Page permettant d'accéder à la liste des animaux du zoo. Vous y retrouverez des informations cruciales."
              link="/encyclopedie"
              src="https://cdn-images.zoobeauval.com/tezSQU1qf_1CirojEl3JB0VZRVU=/800x600/https%3A%2F%2Fs3.eu-west-3.amazonaws.com%2Fimages.zoobeauval.com%2F2020%2F06%2Flion2-5ee39badf0e85.jpg"
            />
          </div>
          <div className="col-sm pb-5 mt-1">
            <CardAcceuil
              page="missions"
              title="Missions"
              text="Retrouvez ici toutes vos missions en cours ainsi que celle qui ne sont pas encore commencées."
              link="/missionAccueil"
              src="https://cdn-images.zoobeauval.com/J6i95lPSlqM5IBtaAb3WdiREwgE=/1600x950/https%3A%2F%2Fs3.eu-west-3.amazonaws.com%2Fimages.zoobeauval.com%2F2020%2F06%2Fheader-7-5ef06597df3db.jpg"
            />
          </div>
          <div className="col-sm pb-5 mt-1">{admin}</div>
        </div>
      </div>
    </div>
  )
}

export default Home
