import React, {useState, useEffect} from 'react';
import { Paper, Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Button, Box, LinearProgress } from '@mui/material';
import axios from 'axios';


const TopPoolsSnapshot = () => {

  const EPSILON = 1e-8;
  
  const [pools, setPools] = useState([]);
  const [loading, setLoading] = useState(false);

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
              <TableCell>30D Vol</TableCell>
              <TableCell>1D vol/TVL</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            
            {pools.map((pool, index) => (
              <TableRow key={pool.pool_address}>
                <TableCell>{index + 1}</TableCell>
                <TableCell>
                  {pool.token0_symbol} / {pool.token1_symbol}&nbsp;&nbsp;v3&nbsp;&nbsp;
                  <Box
                    sx={{
                      display: 'inline-block',
                      padding: '2px 4px',
                      backgroundColor: '#f0f0f0',
                      borderRadius: '4px',
                      fontWeight: 'bold',
                    }}
                  >
                    {pool.fee / 10000}%
                  </Box>
                </TableCell>
                <TableCell>{pool.volume_token0.toFixed(2)}</TableCell>
                <TableCell>{pool.liquidity_token0.toFixed(2)}</TableCell>
                <TableCell>{pool.volume_token1.toFixed(2)}</TableCell>
                <TableCell>{pool.volume_token1.toFixed(2)}</TableCell>
                <TableCell>{(pool.volume_token0 / (pool.volume_token0 + pool.volume_token1 + EPSILON)).toFixed(2)}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Button variant="contained" color="primary" sx={{ marginTop: '10px' }}>
        View More
      </Button>
    </Paper>
  );
};

export default TopPoolsSnapshot;