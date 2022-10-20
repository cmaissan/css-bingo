import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Cards from './Cards';
import Home from './Home';
import Play from './Play';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/play" element={<Play />} />
          <Route path="/cards" element={<Cards />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
