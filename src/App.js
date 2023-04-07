
import Liste from "./pages/missions/liste";
import Suppression from "./pages/missions/suppression";
import FormulaireAjout from "./pages/missions/formulaireAjout";
import ListeAlert from "./pages/avertissements/listeAlert";
import FormAjout from "./pages/avertissements/formAjout";
import FormDelete from "./pages/avertissements/formDelete";

import { BrowserRouter,Routes,Route } from "react-router-dom";


function App() {
  return (
  <BrowserRouter>
  <Routes>
   <Route path="/liste" element={<Liste/>}></Route>
   <Route path="/formulaire" element= {<FormulaireAjout/>}></Route>
   <Route path="/suppression" element={<Suppression/>}></Route>
   <Route path="/listeAlert" element={<ListeAlert/>}></Route>
   <Route path="/formAjout" element= {<FormAjout/>}></Route>
   <Route path="/formDelete" element={<FormDelete/>}></Route>
   </Routes>
  </BrowserRouter>
    
  );
}
export default App;
