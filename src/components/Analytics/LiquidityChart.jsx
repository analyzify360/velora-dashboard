import React, { useEffect, useState } from 'react';
import { Paper, Typography } from '@mui/material';
import { AreaChart, Area, XAxis, YAxis, Tooltip, CartesianGrid, ResponsiveContainer, Brush } from 'recharts';

const LiquidityChart = ({ poolId }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    // Fetch liquidity data based on poolId
    // Example:
    // setData(fetchLiquidityData(poolId));
  }, [poolId]);

  return (
    <Paper sx={{ padding: '20px', marginBottom: '40px' }}>
      <Typography variant="h5" gutterBottom>
        Liquidity Chart
      </Typography>
      <ResponsiveContainer width="100%" height={400}>
        <AreaChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="timestamp" />
          <YAxis />
          <Tooltip />
          <Area type="monotone" dataKey="liquidity" stroke="#8884d8" fill="#8884d8" fillOpacity={0.3} />
          <Brush dataKey="timestamp" height={30} stroke="#8884d8" />
        </AreaChart>
      </ResponsiveContainer>
    </Paper>
  );
};

export default LiquidityChart;