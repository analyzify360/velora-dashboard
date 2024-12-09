import React, { useEffect, useState } from 'react';
import { Paper, Typography } from '@mui/material';
import { Line } from 'react-chartjs-2';
import axios from 'axios';
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Title,
  Tooltip,
  Legend,
  TimeScale,
} from 'chart.js';
import 'chartjs-adapter-date-fns';
import zoomPlugin from 'chartjs-plugin-zoom';

ChartJS.register(
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Title,
  Tooltip,
  Legend,
  TimeScale,
  zoomPlugin
);

const MetricChart = ({ viewType, metrics, metricType, extraData}) => {

  const [data, setData] = useState([]);
  const [chartLabel, setChartLabel] = useState('');
  
  useEffect(() => {
    setData(metrics);
    setChartLabel(metricType.charAt(0).toUpperCase() + metricType.slice(1) + ' Chart');
    console.log(metrics);
  }, [metrics]);


  const chartData = viewType === 'pool' ? {
    labels: data.map((metric) => new Date(metric.timestamp * 1000).toLocaleTimeString('en-US', { timeZone: 'UTC' })),
    datasets: [
      {
        label: metricType === 'price' ? 'Price' : metricType === 'liquidity' ? 'Liquidity' : 'Volume',
        data: metricType === 'price' ? data.map((metric) => metric.price) : metricType === 'liquidity' ? data.map((metric) => metric.liquidity_token0 * extraData.token0_price + metric.liquidity_token1 * extraData.token0_price) : data.map((metric) => metric.volume_token0 * extraData.token0_price + metric.volume_token1 * extraData.token1_price),
        borderColor: metricType === 'price' ? 'rgba(75, 192, 192, 1)' : metricType === 'liquidity' ? 'rgba(153, 102, 255, 1)' : 'rgba(255, 159, 64, 1)',
        backgroundColor: metricType === 'price' ? 'rgba(75, 192, 192, 0.2)' : metricType === 'liquidity' ? 'rgba(153, 102, 255, 0.2)' : 'rgba(255, 159, 64, 0.2)',
        fill: false,
        pointRadius: 1,
        pointHitRadius: 5,
      },
    ],
  } : {}

  const options = {
    responsive: true,
    plugins: {
      zoom: {
        pan: {
          enabled: true,
          mode: 'x',
        },
        zoom: {
          wheel: {
            enabled: true,
          },
          pinch: {
            enabled: true,
          },
          mode: 'x',
        },
      },
    },
    scales: {
      x: {
        title: {
          display: true,
          text: 'Date',
        },
      },
      y: {
        beginAtZero: true,
      },
    },
  };

  return (
    <Paper sx={{ padding: '20px', marginBottom: '40px' }}>
      <Typography variant="h5" gutterBottom>
        {chartLabel}
      </Typography>
      <Line data={chartData} options={options} />
    </Paper>
  );
};

export default MetricChart;