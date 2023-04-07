import './App.scss'
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import Login from './pages/Login'
import Home from './pages/Home'
import Nav from './components/Nav'
import Admin from './pages/Admin'
import Accounts from './pages/Accounts'
import MissionAccueil from './pages/MissionAccueil'
import Invalider from './pages/Invalider'

function App() {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/missionAccueil" element={<MissionAccueil />} />
        <Route path="/administration" element={<Admin />} />
        <Route path="/administration/accounts" element={<Accounts />} />
        <Route path="/invalider" element={<Invalider />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
