import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Paper, Typography, Grid, TextField, FormControl, InputLabel, Select, MenuItem, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TablePagination } from '@mui/material';

const PoolsTable = () => {
  const navigate = useNavigate();
  const [pools, setPools] = useState([]);
  const [search, setSearch] = useState('');
  const [feeTier, setFeeTier] = useState("All");
  const [liquidityThreshold, setLiquidityThreshold] = useState('');
  const [volumeThreshold, setVolumeThreshold] = useState('');
  const [sortField, setSortField] = useState("None");
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [totalPools, setTotalPools] = useState(0);

  useEffect(() => {
    fetchPools(page, rowsPerPage);
  }, [page, rowsPerPage, search, feeTier, liquidityThreshold, volumeThreshold, sortField]);

  

  const fetchPools = async (page, rowsPerPage) => {
    
    const response = await axios.get(`http://localhost:8000/api/pools?page=${page + 1}&page_limit=${rowsPerPage}&search=${search}&fee_tier=${feeTier}&liquidity_threshold=${liquidityThreshold}&volume_threshold=${volumeThreshold}&sort_field=${sortField}`);
    const data = response.data;
    setPools(data.pools);
    setTotalPools(data.total);

  };

  const handlePageChange = (event, newPage) => {
    setPage(newPage);
  };

  const handleRowsPerPageChange = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  return (
    <Paper sx={{ padding: '20px', marginBottom: '40px' }}>
      <Grid container spacing={2} sx={{ marginBottom: '20px' }}>
        <Grid item xs={12} sm={6} md={3}>
          <TextField
            label="Search by Token"
            variant="outlined"
            fullWidth
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={2}>
          <FormControl fullWidth variant="outlined">
            <InputLabel>Fee Tier</InputLabel>
            <Select
              value={feeTier}
              onChange={(e) => setFeeTier(e.target.value)}
              label="Fee Tier"
            >
              <MenuItem value="All">All</MenuItem>
              <MenuItem value="3000">0.3%</MenuItem>
              <MenuItem value="500">0.05%</MenuItem>
              <MenuItem value="10000">1%</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12} sm={6} md={2}>
          <TextField
            label="Liquidity Threshold"
            variant="outlined"
            fullWidth
            value={liquidityThreshold}
            onChange={(e) => setLiquidityThreshold(e.target.value, 10)}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={2}>
          <TextField
            label="Volume Threshold"
            variant="outlined"
            fullWidth
            value={volumeThreshold}
            onChange={(e) => setVolumeThreshold(e.target.value, 10)}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={2}>
          <FormControl fullWidth variant="outlined">
            <InputLabel>Sort By</InputLabel>
            <Select
              value={sortField}
              onChange={(e) => setSortField(e.target.value)}
              label="Sort By"
            >
              <MenuItem value="None">None</MenuItem>
              <MenuItem value="liquidity">Highest Liquidity</MenuItem>
              <MenuItem value="volume">Highest Volume (24h)</MenuItem>
              <MenuItem value="events">Most Active Pool</MenuItem>
            </Select>
          </FormControl>
        </Grid>
      </Grid>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell><Typography fontWeight="bold">Pool Name</Typography></TableCell>
              <TableCell><Typography fontWeight="bold">Fee Tier</Typography></TableCell>
              <TableCell><Typography fontWeight="bold">Liquidity</Typography></TableCell>
              <TableCell><Typography fontWeight="bold">Volume (24h)</Typography></TableCell>
              <TableCell><Typography fontWeight="bold">Number of Events (24h)</Typography></TableCell>
              <TableCell><Typography fontWeight="bold">Price Range</Typography></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {pools.map((pool, index) => (
              <TableRow key={index} onClick={() => navigate(`/analytics/${pool.pool}`)}>
                <TableCell>{pool.token0_symbol} / {pool.token1_symbol}</TableCell>
                <TableCell>{pool.fee}</TableCell>
                <TableCell>{pool.liquidity}</TableCell>
                <TableCell>{pool.volume_24h}</TableCell>
                <TableCell>{pool.events_count_24h}</TableCell>
                <TableCell>{pool.price_range_24h}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        component="div"
        count={totalPools}
        page={page}
        onPageChange={handlePageChange}
        rowsPerPage={rowsPerPage}
        onRowsPerPageChange={handleRowsPerPageChange}
      />
    </Paper>
  );
};

export default PoolsTable;