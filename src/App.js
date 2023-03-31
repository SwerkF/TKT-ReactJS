import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Encyclopedie from './pages/Encyclopedie';
import Animal from './pages/Animal';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/encyclopedie" element={<Encyclopedie/>}></Route> {/* route vers page encyclopedie */}
        <Route path="/animal" element={<Animal/>}></Route> {/* route vers page animal */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
