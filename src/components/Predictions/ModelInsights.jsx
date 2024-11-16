import React from 'react';
import { Paper, Typography } from '@mui/material';

const ModelInsights = () => {
  return (
    <Paper sx={{ padding: '20px', marginBottom: '40px' }}>
      <Typography variant="h5" gutterBottom>
        Model Insights & Explanations
      </Typography>
      <Typography variant="body1">
        <strong>Predictive Model Overview:</strong> We use LSTM (Long Short-Term Memory) models to predict token prices based on historical data.
      </Typography>
      <Typography variant="body1">
        <strong>Training Data:</strong> The model is trained on historical price, liquidity, and volume data over the past year.
      </Typography>
      <Typography variant="body1">
        <strong>Model Performance:</strong> The model has an accuracy of 85% for price predictions, 80% for liquidity predictions, and 85% for volume predictions.
      </Typography>
      <Typography variant="body1">
        <strong>Feature Importance:</strong> Price changes in the past 30 minutes contributed 60% to the price prediction.
      </Typography>
      <Typography variant="body1">
        <strong>Prediction Confidence:</strong> The model’s confidence is based on historical volatility and the availability of real-time data.
      </Typography>
    </Paper>
  );
};

export default ModelInsights;