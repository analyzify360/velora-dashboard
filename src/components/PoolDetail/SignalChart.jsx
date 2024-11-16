import React from 'react';
import { LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid, ResponsiveContainer, Brush, defs, linearGradient, stop } from 'recharts';

const SignalChart = ({ data, selectedSignal }) => {
  return (
    <ResponsiveContainer width="100%" height={400}>
      <LineChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
        <defs>
          <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
            <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
          </linearGradient>
        </defs>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="timestamp" />
        <YAxis />
        <Tooltip />
        <Line
          type="monotone"
          dataKey={selectedSignal}
          stroke="#8884d8"
          strokeWidth={2} // Custom stroke width
          dot={false} // Disable dots for each data point
          fillOpacity={1}
          fill="url(#colorUv)"
        />
      </LineChart>
    </ResponsiveContainer>
  );
};
export default SignalChart;