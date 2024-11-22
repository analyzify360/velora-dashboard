import React from 'react';
import { Paper, Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Button } from '@mui/material';

const TopPoolsSnapshot = () => {
  return (
    <Paper sx={{ padding: '20px', marginBottom: '40px' }}>
      <Typography variant="h5" gutterBottom>
        Top Pools Snapshot
      </Typography>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Pool Name</TableCell>
              <TableCell>Current Price</TableCell>
              <TableCell>Liquidity</TableCell>
              <TableCell>Volume (24h)</TableCell>
              <TableCell>Number of Events</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell>USDC/ETH</TableCell>
              <TableCell>$1.00</TableCell>
              <TableCell>$1,000,000</TableCell>
              <TableCell>$100,000</TableCell>
              <TableCell>50</TableCell>
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