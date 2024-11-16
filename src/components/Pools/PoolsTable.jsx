import React, { useState } from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, TextField, MenuItem, Select, InputLabel, FormControl, Grid } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const PoolsTable = () => {

    const navigate = useNavigate();

    const [search, setSearch] = useState('');
    const [feeTier, setFeeTier] = useState('');
    const [liquidityThreshold, setLiquidityThreshold] = useState('');
    const [volumeThreshold, setVolumeThreshold] = useState('');
    const [sortField, setSortField] = useState('');

    const pools = [
        // Sample data
        { name: 'USDC/ETH', feeTier: '0.3%', liquidity: 1000000, volume: 100000, events: 50, priceRange: '0.95 - 1.05' },
        { name: 'DAI/ETH', feeTier: '0.05%', liquidity: 2000000, volume: 200000, events: 60, priceRange: '0.90 - 1.10' },
        // Add more sample data as needed
    ];

    const filteredPools = pools
        .filter(pool => pool.name.toLowerCase().includes(search.toLowerCase()))
        .filter(pool => !feeTier || pool.feeTier === feeTier)
        .filter(pool => !liquidityThreshold || pool.liquidity >= parseInt(liquidityThreshold))
        .filter(pool => !volumeThreshold || pool.volume >= parseInt(volumeThreshold))
        .sort((a, b) => {
        if (sortField === 'liquidity') return b.liquidity - a.liquidity;
        if (sortField === 'volume') return b.volume - a.volume;
        if (sortField === 'events') return b.events - a.events;
        return 0;
        });

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
            <Grid item xs={12} sm={6} md={3}>
            <FormControl fullWidth variant="outlined">
                <InputLabel>Fee Tier</InputLabel>
                <Select
                value={feeTier}
                onChange={(e) => setFeeTier(e.target.value)}
                label="Fee Tier"
                >
                <MenuItem value="">All</MenuItem>
                <MenuItem value="0.3%">0.3%</MenuItem>
                <MenuItem value="0.05%">0.05%</MenuItem>
                <MenuItem value="1%">1%</MenuItem>
                </Select>
            </FormControl>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
            <TextField
                label="Liquidity Threshold"
                variant="outlined"
                fullWidth
                value={liquidityThreshold}
                onChange={(e) => setLiquidityThreshold(e.target.value)}
            />
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
            <TextField
                label="Volume Threshold"
                variant="outlined"
                fullWidth
                value={volumeThreshold}
                onChange={(e) => setVolumeThreshold(e.target.value)}
            />
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
            <FormControl fullWidth variant="outlined">
                <InputLabel>Sort By</InputLabel>
                <Select
                value={sortField}
                onChange={(e) => setSortField(e.target.value)}
                label="Sort By"
                >
                <MenuItem value="">None</MenuItem>
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
                <TableCell>Pool Name</TableCell>
                <TableCell>Fee Tier</TableCell>
                <TableCell>Liquidity</TableCell>
                <TableCell>Volume (24h)</TableCell>
                <TableCell>Number of Events (24h)</TableCell>
                <TableCell>Price Range</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {filteredPools.map((pool, index) => (
                <TableRow key={index} onClick={() => navigate(pool.name)}>
                    <TableCell>{pool.name}</TableCell>
                    <TableCell>{pool.feeTier}</TableCell>
                    <TableCell>${pool.liquidity.toLocaleString()}</TableCell>
                    <TableCell>${pool.volume.toLocaleString()}</TableCell>
                    <TableCell>{pool.events}</TableCell>
                    <TableCell>{pool.priceRange}</TableCell>
                </TableRow>
                ))}
            </TableBody>
            </Table>
        </TableContainer>
        </Paper>
    );
};

export default PoolsTable;