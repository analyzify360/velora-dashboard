import React from 'react';
import { Paper, Typography } from '@mui/material';

const KeyFeatures = () => {
  return (
    <Paper sx={{ padding: '20px', marginBottom: '40px' }}>
      <Typography variant="h5" gutterBottom>
        Key Features
      </Typography>
      <ul>
        <li>Real-time data for Uniswap V3 pools.</li>
        <li>Historical metrics and trends.</li>
        <li>Machine learning predictions.</li>
        <li>API access for developers.</li>
      </ul>
    </Paper>
  );
};

export default KeyFeatures;