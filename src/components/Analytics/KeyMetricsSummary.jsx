import React, { useEffect, useState } from 'react';
import { Paper, Typography, Grid } from '@mui/material';
import Sparkline from './Sparkline';

const KeyMetricsSummary = ({ viewType, metric, extraData }) => {
  const lastMetric = metrics.length > 0 ? metrics[metrics.length - 1] : null;
  return (
    (viewType === 'pool') ?
    (extraData) ? (
    <Paper sx={{ padding: '20px', marginBottom: '40px' }}>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={4}>
          <Paper sx={{ padding: '10px', textAlign: 'center' }}>
            <Typography variant="h6">{extraData.token0_symbol}</Typography>
            <Typography variant="body1">${extraData ? extraData.token0_price : 0}</Typography>
            <Typography variant="body1">Liquidity: ${lastMetric? lastMetric.liquidity_token0 * extraData.token1_price : 0}</Typography>
            <Typography variant="body1">Volume: ${lastMetric? lastMetric.volume_token0 * extraData.token1_price : 0}</Typography>
            {/* <Sparkline data={priceData} /> */}
          </Paper>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Paper sx={{ padding: '10px', textAlign: 'center' }}>
            <Typography variant="h6">{extraData.token1_symbol}</Typography>
            <Typography variant="body1">Price: ${extraData ? extraData.token1_price : 0}</Typography>
            <Typography variant="body1">Liquidity: ${lastMetric? lastMetric.liquidity_token1 * extraData.token1_price : 0}</Typography>
            <Typography variant="body1">Volume: ${lastMetric? lastMetric.volume_token1 * extraData.token1_price : 0}</Typography>
            {/* <Sparkline data={priceData} /> */}
          </Paper>
        </Grid>
      </Grid>
    </Paper>
    ) : null : (extraData) ? (
      <Paper sx={{ padding: '20px', marginBottom: '40px' }}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={4}>
            <Paper sx={{ padding: '10px', textAlign: 'center' }}>
              <Typography variant="h6">{extraData.symbol}</Typography>
              <Typography variant="body1">${extraData ? extraData.price : 0}</Typography>
              <Typography variant="body1">Market Cap: ${lastMetric? lastMetric.liquidity * extraData.price : 0}</Typography>
              <Typography variant="body1">Volume: ${lastMetric? lastMetric.volume * extraData.price : 0}</Typography>
              {/* <Sparkline data={priceData} /> */}
            </Paper> 
          </Grid>
        </Grid>
      </Paper>
    ) : null
  );
};

export default KeyMetricsSummary;