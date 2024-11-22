import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { Paper, Typography, Grid } from '@mui/material';

const TopPoolsHighlights = () => {
  const [topPools, setTopPools] = useState([]);

  useEffect(() => {
    fetchTopPools();
  }, []);

  const fetchTopPools = async () => {
    const response = await axios.get(`http://localhost:8000/api/pools?page=1&page_limit=3&sort_field=volume&search=&fee_tier=All&liquidity_threshold=&volume_threshold=`);
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
              <Typography variant="h6">{pool.token0_symbol} / {pool.token1_symbol}</Typography>
              <Typography variant="body1">Liquidity: {pool.liquidity}</Typography>
              <Typography variant="body1">Volume (24h): {pool.volume_24h}</Typography>
              <Typography variant="body1">Events (24h): {pool.events_count_24h}</Typography>
              <Typography variant="body1">Price Range: {pool.price_range_24h}</Typography>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Paper>
  );
};

export default TopPoolsHighlights;