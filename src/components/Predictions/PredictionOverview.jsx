import React from 'react';
import { Paper, Typography, Grid, Button } from '@mui/material';

const PredictionOverview = () => {
  return (
    <Paper sx={{ padding: '20px', marginBottom: '40px' }}>
      <Typography variant="h5" gutterBottom>
        Overview of Predictions
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={4}>
          <Typography variant="h6">Prediction Types</Typography>
          <ul>
            <li>Price Prediction</li>
            <li>Liquidity Prediction</li>
            <li>Volume Prediction</li>
          </ul>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Typography variant="h6">Prediction Time Horizon</Typography>
          <Button variant="outlined" sx={{ marginRight: '10px' }}>5m</Button>
          <Button variant="outlined" sx={{ marginRight: '10px' }}>1h</Button>
          <Button variant="outlined" sx={{ marginRight: '10px' }}>1d</Button>
          <Button variant="outlined" sx={{ marginRight: '10px' }}>1w</Button>
          <Button variant="outlined">1m</Button>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Typography variant="h6">Confidence Level</Typography>
          <Typography variant="body1">70% accuracy, 90% confidence interval</Typography>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default PredictionOverview;