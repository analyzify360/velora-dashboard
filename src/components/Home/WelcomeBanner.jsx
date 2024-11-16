import React from 'react';
import { Paper, Typography, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const WelcomeBanner = () => {
    const navigate = useNavigate();
    return (
        <Paper sx={{ padding: '20px', marginBottom: '40px', textAlign: 'center' }}>
        <Typography variant="h4" gutterBottom>
            Welcome to Uniswap Analytics
        </Typography>
        <Typography variant="body1" gutterBottom>
            Track pool events, visualize liquidity trends, and leverage machine learning predictions for Uniswap V3 pools.
        </Typography>
        <Button variant="contained" color="primary" onClick={()=> navigate("/pools/")}>
            Explore Pools
        </Button>
        <Button variant="contained" sx={{ marginLeft: '10px' }} onClick={()=> navigate("/analytics/")}>
            View Analytics
        </Button>
        </Paper>
    );
};

export default WelcomeBanner;