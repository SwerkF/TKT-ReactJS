import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MissionAccueil from './pages/MissionAccueil';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/missionAccueil" element={<MissionAccueil/>} />
      </Routes>
      </BrowserRouter>  
      );
}

export default App;
