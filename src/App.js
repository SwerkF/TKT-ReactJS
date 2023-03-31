import './App.scss';
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Login from './pages/Login';
import Home from './pages/Home';
import Nav from './components/Nav';
import Admin from './pages/Admin'
import Accounts from './pages/Accounts'
import Animals from './pages/Animals'
import MissionAccueil from './pages/MissionAccueil';
import Loader from './components/Loader';
import {useState, useEffect} from 'react';

function App() {

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
      
      <BrowserRouter>
      {loading && <Loader />}
        <Nav />
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/home" element={<Home />} />
        <Route path="/missionAccueil" element={<MissionAccueil/>} />
          <Route path="/administration" element={<Admin />} />
          <Route path="/administration/accounts" element={<Accounts />} />
          <Route path="/administration/animals" element={<Animals />} />
        </Routes>
      </BrowserRouter>
  )
}

export default App;
