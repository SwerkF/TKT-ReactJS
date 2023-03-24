import './App.css';
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Login from './pages/Login';
import Home from './pages/Home';
import Nav from './components/Nav';

function App() {

  //if localstorage not set, go to "/" once

  return (
    <div>
      <Nav />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/home" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;
