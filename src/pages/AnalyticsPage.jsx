import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Container, Typography, Grid, Paper } from '@mui/material';
import { Autocomplete } from '@mui/material';
import KeyMetricsSummary from '../components/Analytics/KeyMetricsSummary';
import MetricChart from '../components/Analytics/MetricChart';
import LiquidityChart from '../components/Analytics/LiquidityChart';
import VolumeChart from '../components/Analytics/VolumeChart';
import EventsTimeline from '../components/Analytics/EventsTimeline';
import ComparisonsAndCorrelations from '../components/Analytics/ComparisonsAndCorrelations';
import axios from 'axios';

const AnalyticsPage = () => {
  const { viewType, address } = useParams();
  const navigate = useNavigate();
  const [selectedPool, setSelectedPool] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [metrics, setMetrics] = useState([]);
  const [extraData, setExtraData] = useState({});
  const [totalMetricsCount, setTotalMetricsCount] = useState(0);

  useEffect(() => {
    fetchPool();
  }, []);

  // useEffect(() => {
  //   if (selectedPool) {
  //     navigate(`/analytics/${selectedPool.pool}`);
  //     setSearchQuery(`${selectedPool.token0_symbol} / ${selectedPool.token1_symbol} - ${selectedPool.fee}`);
  //   } else {
  //     navigate('/analytics');
  //     setSearchQuery('')
  //   }
  // }, [selectedPool]);

  const fetchPool = async () => {
    if (address) {
      const response = await axios.get(`http://localhost:8000/${viewType}-metric?address=${address}&start_timestamp=1620259200&end_timestamp=1620345600`);
      const data = response.data;
      if (data){
        if (viewType === 'pool') {
          setMetrics(data.pools);
          setExtraData(data.token_pair_data);
          setTotalMetricsCount(data.total_metrics_count);
        } else if (viewType === 'token') {
          setMetrics(data.tokens);
          setExtraData(data.token_data);
          setTotalMetricsCount(data.total_metrics_count);
        }
      }
    }
  };

  const handlePoolChange = (event, value) => {
    setSelectedPool(value);
  };

  const handleInputChange = (event, newInputValue, reason) => {
    if (reason === 'input') {
      setSearchQuery(newInputValue);
    }
  }

  return (
    <Container sx={{ padding: '20px' }}>
      <Typography variant="h4" gutterBottom>
        Analytics Dashboard
      </Typography>
      <Paper sx={{ padding: '20px', marginBottom: '40px' }}>
          {/* <KeyMetricsSummary poolAddress={selectedPool.pool} /> */}
          <Grid container spacing={4}>
            <Grid item xs={6}>
              <MetricChart viewType={viewType} metrics={metrics} metricType="price"/>
            </Grid>
            <Grid item xs={6}>
              <MetricChart viewType={viewType} metrics={metrics} metricType="liquidity"/>
            </Grid>
            <Grid item xs={6}>
              <MetricChart viewType={viewType} metrics={metrics} metricType="volume" />
            </Grid>
          </Grid>
          {/* <EventsTimeline poolAddress={selectedPool.pool} />
          <ComparisonsAndCorrelations poolAddress={selectedPool.pool} /> */}
        <Paper sx={{ padding: '20px', textAlign: 'center' }}>
          <Typography variant="h6">Please select a pool to view analytics.</Typography>
        </Paper>
      </Paper>
    </Container>
  );
};

export default AnalyticsPage;