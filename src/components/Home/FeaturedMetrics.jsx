import React from 'react';
import { Paper, Typography, Grid } from '@mui/material';

const FeaturedMetrics = () => {
  return (
    <Paper sx={{ padding: '20px', marginBottom: '40px' }}>
      <Typography variant="h5" gutterBottom>
        Featured Metrics
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6} md={3}>
          <Paper sx={{ padding: '10px', textAlign: 'center' }}>
            <Typography variant="h6">Total Volume (24h)</Typography>
            <Typography variant="body1">$1,234,567</Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Paper sx={{ padding: '10px', textAlign: 'center' }}>
            <Typography variant="h6">Total Liquidity</Typography>
            <Typography variant="body1">$12,345,678</Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Paper sx={{ padding: '10px', textAlign: 'center' }}>
            <Typography variant="h6">Top Fee-Generating Pool (24h)</Typography>
            <Typography variant="body1">USDC/ETH</Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Paper sx={{ padding: '10px', textAlign: 'center' }}>
            <Typography variant="h6">Most Active Pool</Typography>
            <Typography variant="body1">DAI/ETH</Typography>
          </Paper>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default FeaturedMetrics;