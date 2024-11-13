import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Importe os componentes de página
import Home from './Components/Home';
import Skincare from './Components/Skincare';
import Pele from './Components/Pele';
import Olhos from './Components/Olhos';
import Boca from './Components/Boca';
import Dicas from './Components/Dicas';
import Cart from './Components/Cart';
import Login from './Components/Login';
import Product1 from './Components/Product1';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} /> {/* Página inicial */}
        <Route path="/skincare" element={<Skincare />} />
        <Route path="/pele" element={<Pele />} />
        <Route path="/olhos" element={<Olhos />} />
        <Route path="/boca" element={<Boca />} />
        <Route path="/dicas" element={<Dicas />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/login" element={<Login />} />
        <Route path="/product1" element={<Product1 />} />
      </Routes>
    </Router>
  );
};

export default App;
