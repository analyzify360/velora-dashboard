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

const AnalyticsPage = () => {
  const { poolId } = useParams();
  const navigate = useNavigate();
  const [selectedPool, setSelectedPool] = useState(null);

  const pools = [
    { name: 'USDC/ETH', id: 'usdc-eth' },
    { name: 'DAI/ETH', id: 'dai-eth' },
    // Add more pools as needed
  ];

  useEffect(() => {
    if (poolId) {
      const pool = pools.find((p) => p.id === poolId);
      setSelectedPool(pool);
    }
  }, [poolId]);

  const handlePoolChange = (event, value) => {
    setSelectedPool(value);
    if (value) {
      navigate(`/analytics/${value.id}`);
    } else {
      navigate('/analytics');
    }
  };

  return (
    <Container sx={{ padding: '20px' }}>
      <Typography variant="h4" gutterBottom>
        Analytics Dashboard
      </Typography>
      <Autocomplete
        options={pools}
        getOptionLabel={(option) => option.name}
        value={selectedPool}
        onChange={handlePoolChange}
        renderInput={(params) => <TextField {...params} label="Select Pool" variant="outlined" fullWidth />}
        sx={{ marginBottom: '20px' }}
      />
      {selectedPool ? (
        <>
          <KeyMetricsSummary poolId={selectedPool.id} />
          <Grid container spacing={4}>
            <Grid item xs={12} md={6}>
              <PriceChart poolId={selectedPool.id} />
            </Grid>
            <Grid item xs={12} md={6}>
              <LiquidityChart poolId={selectedPool.id} />
            </Grid>
            <Grid item xs={12}>
              <VolumeChart poolId={selectedPool.id} />
            </Grid>
          </Grid>
          <EventsTimeline poolId={selectedPool.id} />
          <ComparisonsAndCorrelations poolId={selectedPool.id} />
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