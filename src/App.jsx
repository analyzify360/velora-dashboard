import './App.css';

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import PoolsPage from './pages/PoolsPage';
import TokensPage from './pages/TokensPage';
import AnalyticsPage from './pages/AnalyticsPage';
import Layout from './components/Layout/Layout';
import PredictionsPage from './pages/PredictionsPage';
import APIDocsPage from './pages/APIDocsPage';
import About from './pages/About';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/pools" element={<PoolsPage />} />
          <Route path="/tokens" element={<TokensPage />} />
          <Route path="/analytics/:viewType/:address?" element={<AnalyticsPage />} />
          <Route path="/predictions/:poolAddress?" element={<PredictionsPage />} />
          <Route path="/api-docs" element={<APIDocsPage/>}/>
          <Route path="/about" element={<About/>}/>
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;