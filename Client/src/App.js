import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import Budget from './pages/Budget';

function App() {
  return (
    <Router>
      <div className="container">
        <nav className="card">
          <Link to="/">Dashboard</Link> | <Link to="/budget">Budget</Link>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/budget" element={<Budget />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;