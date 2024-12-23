import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
// import Settings from './pages/Settings';

const App: React.FC = () => (
  <Router>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      {/* <Route path="/settings" element={<Settings />} /> */}
    </Routes>
  </Router>
);

export default App;
