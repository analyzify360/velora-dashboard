import React, { useState } from 'react';
import { Container, Typography, Grid, FormControl, InputLabel, Select, MenuItem, Paper } from '@mui/material';
import PredictionOverview from '../components/predictions/PredictionOverview';
import PricePrediction from '../components/predictions/PricePrediction';
import LiquidityPrediction from '../components/predictions/LiquidityPrediction';
import VolumePrediction from '../components/predictions/VolumePrediction';
import ModelInsights from '../components/predictions/ModelInsights';

const PredictionsPage = () => {
  const [selectedPool, setSelectedPool] = useState('');

  const handlePoolChange = (event) => {
    setSelectedPool(event.target.value);
  };

  const pools = [
    { name: 'USDC/ETH', id: 'usdc-eth' },
    { name: 'DAI/ETH', id: 'dai-eth' },
    // Add more pools as needed
  ];

  return (
    <Container sx={{ padding: '20px' }}>
      <Typography variant="h4" gutterBottom>
        Predictions Dashboard
      </Typography>
      <FormControl fullWidth sx={{ marginBottom: '20px' }}>
        <InputLabel>Select Pool</InputLabel>
        <Select value={selectedPool} onChange={handlePoolChange} label="Select Pool">
          {pools.map((pool) => (
            <MenuItem key={pool.id} value={pool.id}>
              {pool.name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      {selectedPool ? (
        <>
          <PredictionOverview />
          <Grid container spacing={4}>
            <Grid item xs={12}>
              <PricePrediction poolId={selectedPool} />
            </Grid>
            <Grid item xs={12}>
              <LiquidityPrediction poolId={selectedPool} />
            </Grid>
            <Grid item xs={12}>
              <VolumePrediction poolId={selectedPool} />
            </Grid>
          </Grid>
          <ModelInsights />
        </>
      ) : (
        <Paper sx={{ padding: '20px', textAlign: 'center' }}>
          <Typography variant="h6">Please select a pool to view predictions.</Typography>
        </Paper>
      )}
    </Container>
  );
};

export default PredictionsPage;