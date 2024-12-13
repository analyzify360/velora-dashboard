import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { Paper, Typography, Grid } from '@mui/material';

const TopPoolsHighlights = () => {
  const [topPools, setTopPools] = useState([]);

  useEffect(() => {
    fetchTopPools();
  }, []);

  const fetchTopPools = async () => {
    const response = await axios.get(`http://localhost:8000/current-pool-metric?page_number=1&page_limit=3&sort_by=liquidity_token0&search_query=&fee_tier=0.0&liquidity_threshold=0.0&volume_threshold=0.0`);
    const data = response.data;
    setTopPools(data.pools);
  };

  return (
    <Paper sx={{ padding: '20px', marginBottom: '40px' }}>
      <Typography variant="h5" gutterBottom>
        Top Pools
      </Typography>
      <Grid container spacing={2}>
        {topPools.map((pool, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Paper sx={{ padding: '10px', textAlign: 'left' }}>
              <Typography variant="h6">{pool.token0_symbol || "ETH"} / {pool.token1_symbol || "ETH"}</Typography>
              <Typography variant="body1">Liquidity: {pool.liquidity_token0 + pool.liquidity_token1}</Typography>
              <Typography variant="body1">TVL: {pool.total_volume_token0 + pool.total_volume_token1}</Typography>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Paper>
  );
};

export default TopPoolsHighlights;