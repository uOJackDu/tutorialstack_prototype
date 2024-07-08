import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import HomePage from './components/HomePage';
import BrowsePage from './components/BrowsePage';
import TutorialDetailPage from './components/TutorialDetailPage';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Sidebar />
        <div className="main-content">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/browse" element={<BrowsePage />} />
            <Route path="/tutorial" element={<TutorialDetailPage />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
