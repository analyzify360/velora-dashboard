import React from 'react';
import { Container, Typography, Paper, Grid, Box } from '@mui/material';

const About = () => {
  return (
    <Container sx={{ padding: '20px' }}>
      <Typography variant="h4" gutterBottom>
        About Us
      </Typography>
      <Paper sx={{ padding: '20px', marginBottom: '40px' }}>
        <Typography variant="h5" gutterBottom>
          Welcome to Uniswap Analytics
        </Typography>
        <Typography variant="body1" gutterBottom>
          Uniswap Analytics is a platform designed to help users track pool events, visualize liquidity trends, and leverage machine learning predictions for Uniswap V3 pools. Our goal is to provide comprehensive insights and tools to help users make informed decisions in the DeFi space.
        </Typography>
      </Paper>
      <Paper sx={{ padding: '20px', marginBottom: '40px' }}>
        <Typography variant="h5" gutterBottom>
          Key Features
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <Box>
              <Typography variant="h6">Real-time Data</Typography>
              <Typography variant="body1">
                Access real-time data for Uniswap V3 pools, including swaps, mints, and burns.
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Box>
              <Typography variant="h6">Historical Metrics</Typography>
              <Typography variant="body1">
                Analyze historical metrics and trends for pools and tokens.
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Box>
              <Typography variant="h6">Machine Learning Predictions</Typography>
              <Typography variant="body1">
                Leverage machine learning models to predict future price, liquidity, and volume trends.
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Box>
              <Typography variant="h6">Developer API</Typography>
              <Typography variant="body1">
                Access our API to integrate Uniswap data into your own applications.
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Paper>
      <Paper sx={{ padding: '20px', marginBottom: '40px' }}>
        <Typography variant="h5" gutterBottom>
          Our Team
        </Typography>
        <Typography variant="body1" gutterBottom>
          Our team is composed of experienced developers and data scientists passionate about decentralized finance and blockchain technology. We are committed to providing the best tools and insights to help you navigate the DeFi landscape.
        </Typography>
        <Typography variant="body1" gutterBottom>
          We also have talented AI developers who specialize in creating advanced machine learning models to enhance our platform's predictive capabilities. Their expertise allows us to offer cutting-edge predictions and insights that help users make informed decisions.
        </Typography>
      </Paper>
      <Paper sx={{ padding: '20px', marginBottom: '40px' }}>
        <Typography variant="h5" gutterBottom>
          Contact Us
        </Typography>
        <Typography variant="body1" gutterBottom>
          If you have any questions or feedback, feel free to reach out to us at stefan@analyzify360.com.
        </Typography>
      </Paper>
    </Container>
  );
};

export default About;