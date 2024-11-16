import React from 'react';
import { Paper, Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';

const EventsTimeline = () => {
  const events = [/* events data */];

  return (
    <Paper sx={{ padding: '20px', marginBottom: '40px' }}>
      <Typography variant="h5" gutterBottom>
        Events Timeline
      </Typography>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Timestamp</TableCell>
              <TableCell>Event Type</TableCell>
              <TableCell>Details</TableCell>
              <TableCell>Liquidity Impact</TableCell>
              <TableCell>Price Impact</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {events.map((event, index) => (
              <TableRow key={index}>
                <TableCell>{event.timestamp}</TableCell>
                <TableCell>{event.type}</TableCell>
                <TableCell>{event.details}</TableCell>
                <TableCell>{event.liquidityImpact}</TableCell>
                <TableCell>{event.priceImpact}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  );
};

export default EventsTimeline;