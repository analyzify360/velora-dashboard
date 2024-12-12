import React, { useEffect, useState } from 'react';
import { Paper, Typography, Grid } from '@mui/material';
import Sparkline from './Sparkline';

const KeyMetricsSummary = ({ viewType, metrics, extraData }) => {
  const [lastMetric, setLastMetric] = useState(null);
  useEffect(() => {
    if (metrics.length > 0) {
      setLastMetric(metrics[metrics.length - 1]);
    }
  }, [metrics]);
  
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
            <Paper sx={{ padding: '10px', textAlign: 'left' }}>
              <Typography variant="h6">{extraData.symbol}</Typography>
              <Typography variant="body1">Price${lastMetric? lastMetric.close_price.toFixed(2) : 0}</Typography>
              <Typography variant="body1">Liquidity: ${lastMetric? (lastMetric.total_liquidity * lastMetric.close_price).toFixed(2) : 0}</Typography>
              <Typography variant="body1">Volume: ${lastMetric? (lastMetric.total_volume * lastMetric.close_price).toFixed(2) : 0}</Typography>
              {/* <Sparkline data={priceData} /> */}
            </Paper> 
          </Grid>
        </Grid>
      </Paper>
    ) : null
  );
};

export default KeyMetricsSummary;