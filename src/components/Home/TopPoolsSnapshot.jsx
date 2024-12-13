import React, {useState, useEffect} from 'react';
import { Paper, Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Button, Box, LinearProgress } from '@mui/material';
import axios from 'axios';
import {useNavigate} from 'react-router-dom';


const TopPoolsSnapshot = () => {

  const EPSILON = 1e-8;
  const MILLION_NUMBER = 1000000;
  const THOUSAND_NUMBER = 1000;

  const [pools, setPools] = useState([]);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    getTopPools();
  }, []);

  const getTopPools = async () => {
    setLoading(true);
    try {
      const response = await axios.get('http://localhost:8000/current-pool-metric?page_number=1&page_limit=5&sort_by=liquidity_token0&sort_order=desc');
      const data = response.data;
      setPools(data.pools);
    } catch (error) {
      console.error('Error fetching top pools:', error);
    } finally {
      setLoading(false);
    }
  }

  return (
    <Paper sx={{ padding: '20px', marginBottom: '40px' }}>
      <Typography variant="h5" gutterBottom>
        Top Pools Snapshot
      </Typography>
      <TableContainer component={Paper}>
        {loading && <LinearProgress />}
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>#</TableCell>
              <TableCell>Pool</TableCell>
              <TableCell>TVL</TableCell>
              <TableCell>Liquidity</TableCell>
              <TableCell>1D Vol</TableCell>
              <TableCell>1D vol/TVL</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
          {pools.map((pool, index) => (
            <TableRow key={index} onClick={() => navigate(`/analytics/pool/${pool.pool_address}`)}>
              <TableCell>{index + 1}</TableCell>
              <TableCell>
                {pool.token0_symbol || "ETH"} / {pool.token1_symbol || "ETH"}&nbsp;&nbsp;v3&nbsp;&nbsp;{pool.fee / 10000}%
                {pool.token0_price}, {pool.token1_price}
                </TableCell>
              <TableCell>${((pool.total_volume_token0 * pool.token0_price + pool.total_volume_token1 * pool.token1_price) / MILLION_NUMBER).toFixed(2)}M</TableCell>
              <TableCell>${((pool.liquidity_token0 * pool.token0_price + pool.liquidity_token1 * pool.token1_price)/ MILLION_NUMBER).toFixed(2)}M</TableCell>
              <TableCell>${((pool.volume_token0_1day * pool.token0_price + pool.volume_token1_1day * pool.token1_price) / THOUSAND_NUMBER).toFixed(2)}K</TableCell>
              <TableCell>${((pool.volume_token0_1day * pool.token0_price + pool.volume_token1_1day * pool.token1_price) / (pool.total_volume_token0 * pool.token0_price + pool.total_volume_token1 * pool.token1_price + EPSILON) * 100).toFixed(2)}</TableCell>
            </TableRow>
          ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Button variant="contained" color="primary" sx={{ marginTop: '10px' }} onClick={() => navigate('/analytics/pools')}>
        View More
      </Button>
    </Paper>
  );
};

export default TopPoolsSnapshot;