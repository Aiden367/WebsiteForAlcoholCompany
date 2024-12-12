import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './FRONTEND/Pages/Home';
import Nav from '@components/Nav'; // Ensure this matches the alias
import React from 'react';

const App: React.FC = () => {
  return (
    <Router>
      <Nav /> {/* Render the navbar */}
      <Routes>
        <Route path="/" element={<Home />} /> {/* This will render the Home component on the main page */}
        
      </Routes>
    </Router>
  );
};

export default App;