import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Container, Typography, Grid, Paper, TextField } from '@mui/material';
import { Autocomplete } from '@mui/material';
import KeyMetricsSummary from '../components/Analytics/KeyMetricsSummary';
import PriceChart from '../components/Analytics/PriceChart';
import LiquidityChart from '../components/Analytics/LiquidityChart';
import VolumeChart from '../components/Analytics/VolumeChart';
import EventsTimeline from '../components/Analytics/EventsTimeline';
import ComparisonsAndCorrelations from '../components/Analytics/ComparisonsAndCorrelations';
import axios from 'axios';

const AnalyticsPage = () => {
  const { poolAddress } = useParams();
  const navigate = useNavigate();
  const [selectedPool, setSelectedPool] = useState(null);
  const [pools, setPools] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    fetchPools();
  }, [searchQuery, poolAddress]);

  useEffect(() => {
    if (selectedPool) {
      navigate(`/analytics/${selectedPool.pool}`);
      setSearchQuery(`${selectedPool.token0_symbol} / ${selectedPool.token1_symbol} - ${selectedPool.fee}`);
    } else {
      navigate('/analytics');
      setSearchQuery('')
    }
  }, [selectedPool]);

  const fetchPools = async () => {
    if (poolAddress) {
      const response = await axios.get(`http://localhost:8000/api/pools?search=${poolAddress}`);
      const data = response.data;
      setPools(data.pools);
      const pool = data.pools.find((p) => p.pool === poolAddress);
      setSelectedPool(pool);
    } else {
      const response = await axios.get(`http://localhost:8000/api/pools?page=1&page_limit=10&search=${searchQuery}`);
      const data = response.data;
      setPools(data.pools);
    }
  };

  const handlePoolChange = (event, value) => {
    setSelectedPool(value);
  };

  const handleInputChange = (event, newInputValue, reason) => {
    if (reason === 'input') {
      setSearchQuery(newInputValue);
    }
  }

  return (
    <Container sx={{ padding: '20px' }}>
      <Typography variant="h4" gutterBottom>
        Analytics Dashboard
      </Typography>
      <Autocomplete
        options={pools}
        getOptionLabel={(option) => `${option.token0_symbol}  / ${option.token1_symbol} - ${option.fee}`}
        value={selectedPool}
        onChange={handlePoolChange}
        inputValue={searchQuery}
        onInputChange={handleInputChange}
        renderInput={(params) => <TextField {...params} label="Select Pool" variant="outlined" fullWidth />}
        sx={{ marginBottom: '20px' }}
      />
      {selectedPool ? (
        <>
          <KeyMetricsSummary poolAddress={selectedPool.pool} />
          <Grid container spacing={4}>
            <Grid item xs={12} md={6}>
              <PriceChart poolAddress={selectedPool.pool} />
            </Grid>
            <Grid item xs={12} md={6}>
              <LiquidityChart poolAddress={selectedPool.pool} />
            </Grid>
            <Grid item xs={12}>
              <VolumeChart poolAddress={selectedPool.pool} />
            </Grid>
          </Grid>
          <EventsTimeline poolAddress={selectedPool.pool} />
          <ComparisonsAndCorrelations poolAddress={selectedPool.pool} />
        </>
      ) : (
        <Paper sx={{ padding: '20px', textAlign: 'center' }}>
          <Typography variant="h6">Please select a pool to view analytics.</Typography>
        </Paper>
      )}
    </Container>
  );
};

export default AnalyticsPage;