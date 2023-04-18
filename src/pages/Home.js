import React, { useEffect } from 'react'
import './Home.scss'
import CardAcceuil from '../components/CardAccueil'

const Home = (props) => {
  
  // On initialise la variable admin à rien
  let admin = <></>
  // Si l'utilisateur est un admin, on affiche le bouton d'administration
  if (JSON.parse(localStorage.getItem('user')).libelleRole === 'admin') {
    admin = (
      <CardAcceuil
        title="Administration"
        text="Panneau administratif pour du site. Ajoutez y des missions, contrôlez les alertes et bien plus encore."
        link="/administration"
        src="https://t0.gstatic.com/licensed-image?q=tbn:ANd9GcQoSuF6yCAIiQj9ne8WfTzgjQNDBnPx5MdQ1wk5tDM4lI0NR_QeZJjNndV7TEtiSL_T"
      />
    )
  }

  // Si l'utilisateur n'est pas connecté, on le redirige vers la page de connexion
  useEffect(() => {
    document.title = 'Accueil'
    if (!localStorage.getItem('user')) {
      window.location.href = '/'
    }
  }, [])

  // Afficher la page d'accueil
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
