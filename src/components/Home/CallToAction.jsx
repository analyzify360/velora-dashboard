import React from 'react';
import { Paper, Typography } from '@mui/material';

const CallToAction = () => {
  return (
    <Paper sx={{ padding: '20px', textAlign: 'center' }}>
      <Typography variant="h5" gutterBottom>
        Explore More
      </Typography>
      <Typography variant="body1">
        Track your favorite pools in the Pools section.
      </Typography>
      <Typography variant="body1">
        Dive deeper into metrics and trends in Analytics.
      </Typography>
    </Paper>
  );
};

export default CallToAction;