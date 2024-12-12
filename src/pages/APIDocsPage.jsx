import React, { useState } from 'react';
import { Container, Grid, Paper, Typography, List, ListItem, ListItemText, Divider } from '@mui/material';

const APIDocsPage = () => {
  const [selectedApi, setSelectedApi] = useState('poolEvents');

  const apiDescriptions = {
    poolEvents: {
      title: 'Pool Events',
      description: 'Retrieve events for a specific pool, such as swaps, mints, and burns.',
      example: `
        GET /api/pools/{poolId}/events
        Example Response:
        {
          "events": [
            {
              "timestamp": "2023-01-01T12:00:00Z",
              "type": "swap",
              "details": "100 USDC for 0.1 ETH"
            },
            ...
          ]
        }
      `,
    },
    poolHistoricalMetrics: {
      title: 'Pool Historical Metrics',
      description: 'Retrieve historical metrics for a specific pool, such as liquidity, volume, and fees.',
      example: `
        GET /api/pools/{poolId}/historical-metrics
        Example Response:
        {
          "metrics": [
            {
              "timestamp": "2023-01-01T12:00:00Z",
              "liquidity": 1000000,
              "volume": 100000,
              "fees": 300
            },
            ...
          ]
        }
      `,
    },
    tokenHistoricalMetrics: {
      title: 'Token Historical Metrics',
      description: 'Retrieve historical metrics for a specific token, such as price, volume, and market cap.',
      example: `
        GET /api/tokens/{tokenId}/historical-metrics
        Example Response:
        {
          "metrics": [
            {
              "timestamp": "2023-01-01T12:00:00Z",
              "price": 1.00,
              "volume": 100000,
              "marketCap": 1000000
            },
            ...
          ]
        }
      `,
    },
  };

  return (
    <Container sx={{ padding: '20px' }}>
      <Typography variant="h4" gutterBottom>
        API Documentation
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={12} md={4}>
          <Paper sx={{ padding: '20px' }}>
            <Typography variant="h6" gutterBottom>
              API Endpoints
            </Typography>
            <List>
              {Object.keys(apiDescriptions).map((key) => (
                <ListItem button key={key} onClick={() => setSelectedApi(key)}>
                  <ListItemText primary={apiDescriptions[key].title} />
                </ListItem>
              ))}
            </List>
          </Paper>
        </Grid>
        <Grid item xs={12} md={8}>
          <Paper sx={{ padding: '20px' }}>
            <Typography variant="h5" gutterBottom>
              {apiDescriptions[selectedApi].title}
            </Typography>
            <Typography variant="body1" gutterBottom>
              {apiDescriptions[selectedApi].description}
            </Typography>
            <Divider sx={{ marginY: '20px' }} />
            <Typography variant="h6" gutterBottom>
              Example
            </Typography>
            <pre>{apiDescriptions[selectedApi].example}</pre>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};

export default APIDocsPage;