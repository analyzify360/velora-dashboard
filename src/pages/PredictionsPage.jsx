import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Container, Typography, Grid, Paper, TextField } from '@mui/material';
import { Autocomplete } from '@mui/lab';
import PredictionOverview from '../components/Predictions/PredictionOverview';
import PricePrediction from '../components/Predictions/PricePrediction';
import LiquidityPrediction from '../components/Predictions/LiquidityPrediction';
import VolumePrediction from '../components/Predictions/VolumePrediction';
import ModelInsights from '../components/Predictions/ModelInsights';

const PredictionsPage = () => {
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
      navigate(`/predictions/${value.id}`);
    } else {
      navigate('/predictions');
    }
  };

  return (
    <Container sx={{ padding: '20px' }}>
      <Typography variant="h4" gutterBottom>
        Predictions Dashboard
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
          <PredictionOverview />
          <Grid container spacing={4}>
            <Grid item xs={12}>
              <PricePrediction poolId={selectedPool.id} />
            </Grid>
            <Grid item xs={12}>
              <LiquidityPrediction poolId={selectedPool.id} />
            </Grid>
            <Grid item xs={12}>
              <VolumePrediction poolId={selectedPool.id} />
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