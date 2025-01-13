import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './LandingPage';
import ProjectPage from './ProjectPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/portfolio" element={<LandingPage />} />
        <Route path="/portfolio/:project" element={<ProjectPage />} />
      </Routes>
    </Router>
  );
}

export default App;
