import React, { useState } from 'react';
import { Container, Typography, Grid } from '@mui/material';
import PoolsTable from '../components/pools/PoolsTable';
import TopPoolsHighlights from '../components/Pools/TopPoolsHighlights';

const PoolsPage = () => {
  return (
    <Container sx={{ padding: '20px' }}>
      <Typography variant="h4" gutterBottom>
        Uniswap V3 Pools
      </Typography>
      <TopPoolsHighlights />
      <PoolsTable />
    </Container>
  );
};

export default PoolsPage;