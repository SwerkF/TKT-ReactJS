import './App.scss';
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Login from './pages/Login';
import Home from './pages/Home';
import Nav from './components/Nav';
import Admin from './pages/Admin'
import Accounts from './pages/Accounts'

function App() {

  return (
    <div>
      <Nav />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/administration" element={<Admin />} />
          <Route path="/administration/accounts" element={<Accounts />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;
