import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Login from './components/auth/login';
import Register from './components/auth/register';
import HomePage from './components/home/HomePage';
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        {/* More routes coming soon */}
        <Route path="/" element={<HomePage />} />
      </Routes>
    </Router>
  );
}

export default App;