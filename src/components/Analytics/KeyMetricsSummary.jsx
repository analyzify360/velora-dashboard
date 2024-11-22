import React, { useEffect, useState } from 'react';
import { Paper, Typography, Grid } from '@mui/material';
import Sparkline from './Sparkline';

const KeyMetricsSummary = ({ poolId }) => {
  const [priceData, setPriceData] = useState([]);
  const [liquidityData, setLiquidityData] = useState([]);
  const [volumeData, setVolumeData] = useState([]);

  useEffect(() => {
    // Fetch key metrics data based on poolId
    // Example:
    // setPriceData(fetchPriceData(poolId));
    // setLiquidityData(fetchLiquidityData(poolId));
    // setVolumeData(fetchVolumeData(poolId));
  }, [poolId]);

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
            <Sparkline data={priceData} />
          </Paper>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Paper sx={{ padding: '10px', textAlign: 'center' }}>
            <Typography variant="h6">Current Liquidity</Typography>
            <Typography variant="body1">$1,000,000</Typography>
            <Typography variant="body2">Liquidity Change (24h): +5%</Typography>
            <Sparkline data={liquidityData} />
          </Paper>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Paper sx={{ padding: '10px', textAlign: 'center' }}>
            <Typography variant="h6">24h Volume</Typography>
            <Typography variant="body1">$100,000</Typography>
            <Typography variant="body2">Volume Change (24h): +10%</Typography>
            <Sparkline data={volumeData} />
          </Paper>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default KeyMetricsSummary;