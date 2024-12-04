import React, {useState, useEffect} from 'react';
import { Paper, Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Button } from '@mui/material';
import axios from 'axios';

const RecentEvents = () => {

  const [events, setEvents] = useState([]);

  useEffect(() => {
    getRecentEvents();
  }, []);

  const getRecentEvents = async () => {
    const response = await axios.get('http://localhost:8000/api/events?page=1&page_limit=5&sort_field=timestamp');
    const data = response.data;
    setEvents(data.events);
  }
  return (
    <Paper sx={{ padding: '20px', marginBottom: '40px' }}>
      <Typography variant="h5" gutterBottom>
        Recent Events
      </Typography>
      <div className="event-filters" sx={{ marginBottom: '10px' }}>
        <Button variant="outlined" sx={{ marginRight: '10px' }}>All</Button>
        <Button variant="outlined" sx={{ marginRight: '10px' }}>Swaps</Button>
        <Button variant="outlined" sx={{ marginRight: '10px' }}>Mints</Button>
        <Button variant="outlined">Burns</Button>
      </div>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Timestamp</TableCell>
              <TableCell>Pool</TableCell>
              <TableCell>Event Type</TableCell>
              <TableCell>Key Details</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell>2023-01-01 12:00:00</TableCell>
              <TableCell>USDC/ETH</TableCell>
              <TableCell>Swap</TableCell>
              <TableCell>100 USDC for 0.1 ETH</TableCell>
            </TableRow>
            {/* Add more rows as needed */}
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  );
};

export default RecentEvents;