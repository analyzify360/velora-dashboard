import React from 'react';
import { Paper, Typography, Grid } from '@mui/material';
import Sparkline from './Sparkline'; // Assume you have a Sparkline component for mini charts

const KeyMetricsSummary = () => {
  return (
    <Paper sx={{ padding: '20px', marginBottom: '40px' }}>
      <Typography variant="h5" gutterBottom>
        Key Metrics Summary
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={4}>
          <Paper sx={{ padding: '10px', textAlign: 'center' }}>
            <Typography variant="h6">Current Price</Typography>
            <Typography variant="body1">$1.00</Typography>
            <Typography variant="body2">Price Change (24h): +2%</Typography>
            <Sparkline data={[/* price data */]} />
          </Paper>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Paper sx={{ padding: '10px', textAlign: 'center' }}>
            <Typography variant="h6">Current Liquidity</Typography>
            <Typography variant="body1">$1,000,000</Typography>
            <Typography variant="body2">Liquidity Change (24h): +5%</Typography>
            <Sparkline data={[/* liquidity data */]} />
          </Paper>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Paper sx={{ padding: '10px', textAlign: 'center' }}>
            <Typography variant="h6">24h Volume</Typography>
            <Typography variant="body1">$100,000</Typography>
            <Typography variant="body2">Volume Change (24h): +10%</Typography>
            <Sparkline data={[/* volume data */]} />
          </Paper>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default KeyMetricsSummary;