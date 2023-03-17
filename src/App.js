import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Encyclopedie from './pages/Encyclopedie';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/encyclopedie" element={<Encyclopedie/>}></Route> {/* route vers page encyclopedie */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
