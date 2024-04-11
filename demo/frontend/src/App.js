//import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Comics from './pages/Comics';
import Characters from './pages/Characters';
import Series from './pages/Series';

function App() {
  return (
    <Router>
      <div>
        <main>
          <Routes>
            <Route path="/comics" element={<Comics />} />
            <Route path="/characters" element={<Characters />} />
            <Route path="/series" element={<Series />} />
            <Route path="/" element={<Home />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
