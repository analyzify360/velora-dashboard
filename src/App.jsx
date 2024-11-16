import './App.css';

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import PoolsPage from './pages/PoolsPage';
import AnalyticsPage from './pages/AnalyticsPage';
import Layout from './components/Layout/Layout';
import PredictionsPage from './pages/PredictionsPage';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/pools" element={<PoolsPage />} />
          <Route path="/analytics/:poolId?" element={<AnalyticsPage />} />
          <Route path="/predictions/:poolId?" element={<PredictionsPage />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;