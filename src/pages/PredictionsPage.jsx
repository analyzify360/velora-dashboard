import React from 'react';
import { Container, Typography, Grid } from '@mui/material';
import PredictionOverview from '../components/Predictions/PredictionOverview';
import PricePrediction from '../components/Predictions/PricePrediction';
import LiquidityPrediction from '../components/Predictions/LiquidityPrediction';
import VolumePrediction from '../components/Predictions/VolumePrediction';
import ModelInsights from '../components/Predictions/ModelInsights';

const PredictionsPage = () => {
  return (
    <Container sx={{ padding: '20px' }}>
      <Typography variant="h4" gutterBottom>
        Predictions Dashboard
      </Typography>
      <PredictionOverview />
      <Grid container spacing={4}>
        <Grid item xs={12}>
          <PricePrediction />
        </Grid>
        <Grid item xs={12}>
          <LiquidityPrediction />
        </Grid>
        <Grid item xs={12}>
          <VolumePrediction />
        </Grid>
      </Grid>
      <ModelInsights />
    </Container>
  );
};

export default PredictionsPage;