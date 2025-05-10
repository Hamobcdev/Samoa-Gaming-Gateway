import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Home from './pages/Home';
import WalletPage from './pages/WalletPage';
import Investor from './pages/Investor';

function App() {
  const [currentPage, setCurrentPage] = useState<string>('home');

  const handleNavigate = (page: string) => {
    setCurrentPage(page);
  };

  return (
    <Router>
      <div>
        <Navbar currentPage={currentPage} onNavigate={handleNavigate} />
        <Routes>
          <Route path="/" element={<Home onNavigate={handleNavigate} />} />
          <Route path="/wallet" element={<WalletPage onNavigate={handleNavigate} />} />
          <Route path="/investor" element={<Investor />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

