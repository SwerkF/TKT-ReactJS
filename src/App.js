import FormulaireAjout from "./pages/missions/formulaireAjout";
import Liste from "./pages/missions/liste";
import MissionOne from "./pages/missions/MissionOne";
import Suppression from "./pages/missions/suppression";
import { BrowserRouter,Routes,Route } from "react-router-dom";


function App() {
  return (
  <BrowserRouter>
  <Routes>
   <Route path="/liste" element={<Liste/>}></Route>
   <Route path="/formulaire" element= {<FormulaireAjout/>}></Route>
   <Route path="/detail" element={<MissionOne/>}></Route>
   <Route path="/suppression" element={<Suppression/>}></Route>
   </Routes>
  </BrowserRouter>
    
  );
}
export default App;
