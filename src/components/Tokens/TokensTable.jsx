import React, {useState, useEffect} from 'react';
import {Container, Typography, Grid, TableContainer, TableRow, TableCell, Table, TableHead, TableBody, TablePagination, InputLabel, MenuItem, Paper, TextField, FormControl, Select} from '@mui/material';
import axios from 'axios';
import {useNavigate} from 'react-router-dom';

const TokensTable = () => {
    const navigate = useNavigate();
    const [tokens, setTokens] = useState([]);
    const [search, setSearch] = useState('');
    const [sortField, setSortField] = useState('total_volume');
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(10);
    const [totalTokens, setTotalTokens] = useState(0);

    useEffect(() => {
        fetchTokens(page, rowsPerPage);
    }, [page, rowsPerPage, search, sortField]);

    const fetchTokens = async (page, rowsPerPage) => {
        const response = await axios.get(`http://localhost:8000/current-token-metric?page_number=${page + 1}&page_limit=${rowsPerPage}&search_query=${search}&sort_by=${sortField}`);
        const data = response.data;
        setTokens(data.tokens);
        setTotalTokens(data.total_token_count);
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
                Tokens
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
                            <MenuItem value="Price">Price</MenuItem>
                            <MenuItem value="Change">Change</MenuItem>
                        </Select>
                    </FormControl>
                </Grid>
            </Grid>
            <TableContainer component={Paper}>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>#</TableCell>
                            <TableCell>Token</TableCell>
                            <TableCell>Price</TableCell>
                            <TableCell>Liquidity</TableCell>
                            <TableCell>Volume</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {tokens.map((token, index) => (
                            <TableRow key={token.token_address} onClick={() => navigate(`/tokens/${token.token_address}`)}>
                                <TableCell>{index + 1}</TableCell>
                                <TableCell>{token.symbol || "ETH"}</TableCell>
                                <TableCell>${token.price}</TableCell>
                                <TableCell>${token.total_liquidity}</TableCell>
                                <TableCell>${token.total_volume}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
            <TablePagination
                rowsPerPageOptions={[10, 25, 50]}
                component="div"
                count={totalTokens}
                rowsPerPage={rowsPerPage}
                page={page}
                onPageChange={handlePageChange}
                onRowsPerPageChange={handleRowsPerPageChange}
            />
        </Container>
    );
}

export default TokensTable;