import React from 'react';
import { Container, Typography, Grid } from '@mui/material';
import KeyMetricsSummary from '../components/Analytics/KeyMetricsSummary';
import PriceChart from '../components/Analytics/PriceChart';
import LiquidityChart from '../components/Analytics/LiquidityChart';
import VolumeChart from '../components/Analytics/VolumeChart';
import EventsTimeline from '../components/Analytics/EventsTimeline';
import MachineLearningPredictions from '../components/Analytics/MachineLearningPredictions';
import ComparisonsAndCorrelations from '../components/Analytics/ComparisonsAndCorrelations';

const AnalyticsPage = () => {
  return (
    <Container sx={{ padding: '20px' }}>
      <Typography variant="h4" gutterBottom>
        Analytics Dashboard
      </Typography>
      <KeyMetricsSummary />
      <Grid container spacing={4}>
        <Grid item xs={12} md={6}>
          <PriceChart />
        </Grid>
        <Grid item xs={12} md={6}>
          <LiquidityChart />
        </Grid>
        <Grid item xs={12}>
          <VolumeChart />
        </Grid>
      </Grid>
      <EventsTimeline />
      <MachineLearningPredictions />
      <ComparisonsAndCorrelations />
    </Container>
  );
};

export default AnalyticsPage;