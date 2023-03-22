import FormulaireAjout from "./pages/missions/formulaireAjout";
import Liste from "./pages/missions/liste";
import { BrowserRouter,Routes,Route } from "react-router-dom";


function App() {
  return (
  <BrowserRouter>
  <Routes>
   <Route path="/liste" element={<Liste/>}></Route>
   <Route path="/formulaire" element= {<FormulaireAjout/>}>
   </Route>
   <Route path="/form" element={<Form/>}></Route>
   </Routes>
  </BrowserRouter>
    
  );
}
export default App;
