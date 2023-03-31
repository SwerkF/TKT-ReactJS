import FormulaireAjout from "./pages/missions/formulaireAjout";
import Liste from "./pages/missions/liste";
import Suppression from "./pages/missions/suppression";
import ListeAlert from "./pages/avertissements/listeAlert";
import FormAjout from "./pages/avertissements/formAjout";
<<<<<<< Updated upstream
import Delete from "./pages/avertissements/delete";
=======
<<<<<<< HEAD
import FormDelete from "./pages/avertissements/formDelete";
=======
import Delete from "./pages/avertissements/delete";
>>>>>>> feature-avertissement
>>>>>>> Stashed changes
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
<<<<<<< Updated upstream
   <Route path="/delete" element={<Delete/>}></Route>
=======
<<<<<<< HEAD
   <Route path="/formDelete" element={<FormDelete/>}></Route>
=======
   <Route path="/delete" element={<Delete/>}></Route>
>>>>>>> feature-avertissement
>>>>>>> Stashed changes
   </Routes>
  </BrowserRouter>
    
  );
}
export default App;
