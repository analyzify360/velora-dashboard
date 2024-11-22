import React, { useEffect, useState } from 'react';
import { Paper, Typography } from '@mui/material';
import { BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid, ResponsiveContainer, Brush } from 'recharts';

const VolumeChart = ({ poolId }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    // Fetch volume data based on poolId
    // Example:
    // setData(fetchVolumeData(poolId));
  }, [poolId]);

  return (
    <Paper sx={{ padding: '20px', marginBottom: '40px' }}>
      <Typography variant="h5" gutterBottom>
        Volume Chart
      </Typography>
      <ResponsiveContainer width="100%" height={400}>
        <BarChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="timestamp" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="volume" fill="#8884d8" />
          <Brush dataKey="timestamp" height={30} stroke="#8884d8" />
        </BarChart>
      </ResponsiveContainer>
    </Paper>
  );
};

export default VolumeChart;