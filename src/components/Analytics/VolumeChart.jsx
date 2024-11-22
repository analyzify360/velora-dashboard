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

const VolumeChart = ({ poolAddress }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    if (poolAddress) {
      fetchSignals();
    }
  }, [poolAddress]);

  const fetchSignals = async () => {
    const response = await axios.get(`http://localhost:8000/api/pools/${poolAddress}/signals?type=price`);
    if (response.status !== 200) {
      console.error('Error fetching signals:', response);
      return;
    }
    setData(response.data);
  };

  const chartData = {
    labels: data.map((signal) => new Date(signal.timestamp * 1000).toISOString()),
    datasets: [
      {
        label: 'Volume',
        data: data.map((signal) => signal.volume),
        borderColor: 'rgba(192, 192, 72, 1)',
        backgroundColor: 'rgba(192, 192, 72, 0.2)',
        fill: false,
      },
    ],
  };

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
        Volume Chart
      </Typography>
      <Line data={chartData} options={options} />
    </Paper>
  );
};

export default VolumeChart;