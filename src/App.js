
import { useEffect, useState } from 'react';
import { BrowserRouter,Routes,Route } from "react-router-dom";
import './App.scss'

import Login from './pages/Login'
import Home from './pages/Home'
import Admin from './pages/Admin'
import Accounts from './pages/Accounts'
import Animals from './pages/Animals'
import MissionAccueil from './pages/MissionAccueil';
import Encyclopedie from './pages/Encyclopedie';
import Animal from './pages/Animal';
import Invalider from './pages/Invalider'
import Liste from "./pages/missions/liste";
import Suppression from "./pages/missions/suppression";
import FormulaireAjout from "./pages/missions/formulaireAjout";
import ListeAlert from "./pages/avertissements/listeAlert";
import FormAjout from "./pages/avertissements/formAjout";
import FormDelete from "./pages/avertissements/formDelete";

import Nav from './components/Nav'
import Loader from './components/Loader';
import Alert from './components/Alert';

function App() {

  // loader
  const [loading, setLoading] = useState(true);

  // loader
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);

    return () => {
      clearTimeout(timer);
    };
  },[]);

  return (
    <BrowserRouter>
      <Nav /> {/* navbar */}
      {loading && <Loader />}
      <Routes>
        <Route path="/" element={<Login />} /> {/* route vers page login */}
        <Route path="/home" element={<Home />} /> {/* route vers page home */}
        <Route path="/missionAccueil" element={<MissionAccueil/>} /> {/* route vers page missionAccueil */}
        <Route path="/administration" element={<Admin />} /> {/* route vers page admin */}
        <Route path="/administration/accounts" element={<Accounts />} /> {/* route vers page comptes */}
        <Route path="/encyclopedie" element={<Encyclopedie/>}></Route> {/* route vers page encyclopedie */}
        <Route path="/animal" element={<Animal/>}></Route> {/* route vers page animal */}
        <Route path="/invalider" element={<Invalider />} /> {/* route vers page invalider une mission */}
        <Route path="/administration/animals" element={<Animals />} /> {/* route vers page animaux */}
        <Route path="/administration/missions" element={<Liste/>}></Route> {/* route vers page liste */}
        <Route path="/formulaire" element= {<FormulaireAjout/>}></Route> {/* route vers page formulaire */}
        <Route path="/suppression" element={<Suppression/>}></Route> {/* route vers page suppression */}
        <Route path="/listeAlert" element={<ListeAlert/>}></Route> {/* route vers page liste */}
        <Route path="/formAjout" element= {<FormAjout/>}></Route> {/* route vers page formulaire */}
        <Route path="/formDelete" element={<FormDelete/>}></Route> {/* route vers page suppression */}
      </Routes>
      <Alert /> {/* alerte */}
  </BrowserRouter>
  );
}
export default App;
