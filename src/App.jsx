import './App.css';

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import PoolDetailPage from './pages/PoolDetailPage';
import Layout from './components/Layout/Layout';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/pools/:poolAddress" element={<PoolDetailPage />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;