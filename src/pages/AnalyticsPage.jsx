import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Container, Typography, Grid, Paper } from '@mui/material';
import { Autocomplete } from '@mui/material';
import KeyMetricsSummary from '../components/Analytics/KeyMetricsSummary';
import MetricChart from '../components/Analytics/MetricChart';
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
  const [period, setPeriod] = useState('1d');

  useEffect(() => {
    fetchPool();
  }, []);


  const fetchPool = async () => {
    if (address) {
      const response = await axios.get(`${process.env.REACT_APP_SERVER_URL}/${viewType}-metric?page_limit=288&address=${address}&period=${period}`);
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
      console.log(data)
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
          <KeyMetricsSummary viewType={viewType} metrics={metrics} extraData={extraData}/>
          <Grid container spacing={4}>
            <Grid item xs={6}>
              <MetricChart viewType={viewType} metrics={metrics} metricType="price" extraData={extraData}/>
            </Grid>
            <Grid item xs={6}>
              <MetricChart viewType={viewType} metrics={metrics} metricType="liquidity" extraData={extraData}/>
            </Grid>
            <Grid item xs={6}>
              <MetricChart viewType={viewType} metrics={metrics} metricType="volume" extraData={extraData}/>
            </Grid>
          </Grid>
          {/* <EventsTimeline poolAddress={selectedPool.pool} />
          <ComparisonsAndCorrelations poolAddress={selectedPool.pool} /> */}
      </Paper>
    </Container>
  );
};

export default AnalyticsPage;