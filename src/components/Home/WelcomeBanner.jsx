import React from 'react';
import { Paper, Typography, Button } from '@mui/material';

const WelcomeBanner = () => {
  return (
    <Paper sx={{ padding: '20px', marginBottom: '40px', textAlign: 'center' }}>
      <Typography variant="h4" gutterBottom>
        Welcome to Uniswap Analytics
      </Typography>
      <Typography variant="body1" gutterBottom>
        Track pool events, visualize liquidity trends, and leverage machine learning predictions for Uniswap V3 pools.
      </Typography>
      <Button variant="contained" color="primary">
        Explore Pools
      </Button>
      <Button variant="contained" sx={{ marginLeft: '10px' }}>
        View Analytics
      </Button>
    </Paper>
  );
};

export default WelcomeBanner;