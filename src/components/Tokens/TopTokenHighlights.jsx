import React, {useState, useEffect} from 'react';
import {Container, Typography, Grid, Paper} from '@mui/material';
import axios from 'axios';
import {useNavigate} from 'react-router-dom';

const TopTokens = () => {
    const navigate = useNavigate();
    const [tokens, setTokens] = useState([]);

    useEffect(() => {
        fetchTokens();
    }, []);

    const fetchTokens = async () => {
        const response = await axios.get(`http://localhost:8000/current-token-metric?page_number=1&page_limit=3&search_query=&sort_by=total_volume`);
        const data = response.data;
        setTokens(data.tokens);
    };

    return (
        <Container sx={{padding: '20px'}}>
            <Typography variant="h4" gutterBottom>
                Top Tokens
            </Typography>
            <Grid container spacing={2} sx={{marginBottom: '20px'}}>
                {tokens && tokens.length > 0 && tokens.map((token, index) => (
                    <Grid item xs={12} sm={6} md={4} key={index}>
                        <Paper sx={{padding: '10px', textAlign: 'left'}}>
                            <Typography variant="h6">{token.symbol}</Typography>
                            <Typography variant="body1">Price: {token.price}</Typography>
                            <Typography variant="body1">Volume: {token.total_volume}</Typography>
                            <Typography variant="body1">Liquidity: {token.total_liquidity}</Typography>
                        </Paper>
                    </Grid>
                ))}
            </Grid>
        </Container>
    );
}

export default TopTokens;