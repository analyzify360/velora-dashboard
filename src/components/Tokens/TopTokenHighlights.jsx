import React, {useState, useEffect} from 'react';
import {Container, Typography, Grid, MenuItem, InputLabel, TextField, Select, FormControl} from '@mui/material';
import axios from 'axios';
import {useNavigate} from 'react-router-dom';

const TopTokens = () => {
    const navigate = useNavigate();
    const [tokens, setTokens] = useState([]);
    const [search, setSearch] = useState('');
    const [sortField, setSortField] = useState('None');
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(10);

    useEffect(() => {
        fetchTokens(page, rowsPerPage);
    }, [page, rowsPerPage, search, sortField]);

    const fetchTokens = async (page, rowsPerPage) => {
        const response = await axios.get(`http://localhost:8000/api/tokens?page=${page + 1}&page_limit=${rowsPerPage}&search=${search}&sort_field=${sortField}`);
        const data = response.data;
        setTokens(data.tokens);
    };

    const handlePageChange = (event, newPage) => {
        setPage(newPage);
    };

    const handleRowsPerPageChange = (event) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };

    return (
        <Container sx={{padding: '20px'}}>
            <Typography variant="h4" gutterBottom>
                Top Tokens
            </Typography>
            <Grid container spacing={2} sx={{marginBottom: '20px'}}>
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
                        <InputLabel>Sort By</InputLabel>
                        <Select
                            value={sortField}
                            onChange={(e) => setSortField(e.target.value)}
                            label="Sort By"
                        >
                            <MenuItem value="None">None</MenuItem>
                            <MenuItem value="Liquidity">Liquidity</MenuItem>
                            <MenuItem value="Volume">Volume</MenuItem>
                            <MenuItem value="Fees">Fees</MenuItem>
                        </Select>
                    </FormControl>
                </Grid>
            </Grid>
        </Container>
    );
}

export default TopTokens;