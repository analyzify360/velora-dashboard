import React from 'react';
import { Paper, Typography, Grid } from '@mui/material';

const TopPoolsHighlights = () => {
  const topPools = [
    // Sample data
    { name: 'USDC/ETH', liquidity: 1000000, volume: 100000, events: 50 },
    { name: 'DAI/ETH', liquidity: 2000000, volume: 200000, events: 60 },
    // Add more sample data as needed
  ];

  return (
    <Paper sx={{ padding: '20px', marginBottom: '40px' }}>
      <Typography variant="h5" gutterBottom>
        Top Pools Highlights
      </Typography>
      <Grid container spacing={2}>
        {topPools.map((pool, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Paper sx={{ padding: '10px', textAlign: 'center' }}>
              <Typography variant="h6">{pool.name}</Typography>
              <Typography variant="body1">Liquidity: ${pool.liquidity.toLocaleString()}</Typography>
              <Typography variant="body1">Volume (24h): ${pool.volume.toLocaleString()}</Typography>
              <Typography variant="body1">Events (24h): {pool.events}</Typography>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Paper>
  );
};

export default TopPoolsHighlights;