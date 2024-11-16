import './App.css';

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import PoolsPage from './pages/PoolsPage';
import Layout from './components/Layout/Layout';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/pools" element={<PoolsPage />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;