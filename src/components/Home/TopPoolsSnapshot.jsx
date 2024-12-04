import React, {useState, useEffect} from 'react';
import { Paper, Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Button } from '@mui/material';
import axios from 'axios';


const TopPoolsSnapshot = () => {

  const [pools, setPools] = useState([]);

  useEffect(() => {
    getTopPools();
  }, []);

  const getTopPools = async () => {
    const response = await axios.get('http://localhost:8000/api/pools?page=1&page_limit=5&sort_field=volume');
    const data = response.data;
    setPools(data.pools);
  }

  return (
    <Paper sx={{ padding: '20px', marginBottom: '40px' }}>
      <Typography variant="h5" gutterBottom>
        Top Pools Snapshot
      </Typography>
      <TableContainer component={Paper}>
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
            <TableRow>
              <TableCell>1</TableCell>
              <TableCell>USDC/ETH v3 0.1%</TableCell>
              <TableCell>$1,992,000</TableCell>
              <TableCell>$1,000,000</TableCell>
              <TableCell>$100,000</TableCell>
              <TableCell>$3,000,000</TableCell>
              <TableCell>0.2</TableCell>
            </TableRow>
            {/* Add more rows as needed */}
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