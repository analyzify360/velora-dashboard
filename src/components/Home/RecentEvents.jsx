import React, {useState, useEffect} from 'react';
import { Paper, Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Button } from '@mui/material';
import axios from 'axios';

const RecentEvents = () => {

  const [events, setEvents] = useState([]);
  const [filter, setFilter] = useState('all');

  useEffect(() => {
    getRecentEvents();
  }, [filter]);

  const getRecentEvents = async () => {
    const response = await axios.get(`http://localhost:8000/recent-pool-event?page_limit=10&filter_by=${filter}`);
    const data = response.data;
    setEvents(data);
  }
  return (
    <Paper sx={{ padding: '20px', marginBottom: '40px' }}>
      <Typography variant="h5" gutterBottom>
        Recent Events
      </Typography>
      <div className="event-filters" sx={{ marginBottom: '10px' }}>
        <Button variant="outlined" sx={{ marginRight: '10px' }} onClick={() => { setFilter('all')}}>All</Button>
        <Button variant="outlined" sx={{ marginRight: '10px' }} onClick={() => { setFilter('swap')}}>Swaps</Button>
        <Button variant="outlined" sx={{ marginRight: '10px' }} onClick={() => { setFilter('mint')}}>Mints</Button>
        <Button variant="outlined" onClick={() => { setFilter('burn')}}>Burns</Button>
      </div>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>#</TableCell>
              <TableCell>Timestamp</TableCell>
              <TableCell>Pool</TableCell>
              <TableCell>Event Type</TableCell>
              <TableCell>Key Details</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {events.map((event, index) => (
              <TableRow key={index}>
                <TableCell>{index + 1}</TableCell>
                <TableCell>{event.timestamp}</TableCell>
                <TableCell>{event.token0_symbol} / {event.token1_symbol}</TableCell>
                <TableCell>{event.event_type}</TableCell>
                <TableCell>{event.amount0.toFixed(2)} / {event.amount1.toFixed(2)}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  );
};

export default RecentEvents;