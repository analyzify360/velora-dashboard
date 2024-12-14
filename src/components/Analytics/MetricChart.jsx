import React, { useEffect, useState } from 'react';
import { Paper, Typography } from '@mui/material';
import { Line, Bar } from 'react-chartjs-2';
import axios from 'axios';
import {
  Chart as ChartJS,
  LineElement,
  BarElement,
  CategoryScale,
  LinearScale,
  LogarithmicScale,
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
  BarElement,
  CategoryScale,
  LinearScale,
  LogarithmicScale,
  PointElement,
  Title,
  Tooltip,
  Legend,
  TimeScale,
  zoomPlugin
);

const MetricChart = ({ viewType, metrics, metricType, extraData}) => {

  const chartLabel = viewType === 'pool' ? `Pool ${metricType === 'price' ? 'Price' : metricType === 'liquidity' ? 'Liquidity' : 'Volume'} Chart` : `Token ${metricType === 'price' ? 'Price' : metricType === 'liquidity' ? 'Liquidity' : 'Volume'} Chart`;
  const chartData = viewType === 'pool' ? {
    labels: metrics.map((metric) => new Date(metric.timestamp * 1000).toLocaleTimeString('en-US', { timeZone: 'UTC' })),
    datasets: [
      {
        type: metricType === 'volume' ? 'bar' : 'line',
        label: metricType === 'price' ? 'Price' : metricType === 'liquidity' ? 'Liquidity' : 'Volume',
        data: metricType === 'price' ? metrics.map((metric) => metric.price) : metricType === 'liquidity' ? metrics.map((metric) => metric.liquidity_token0 * extraData.token0_price + metric.liquidity_token1 * extraData.token0_price) : metrics.map((metric) => metric.volume_token0 * extraData.token0_price + metric.volume_token1 * extraData.token1_price),
        borderColor: metricType === 'price' ? 'rgba(75, 192, 192, 1)' : metricType === 'liquidity' ? 'rgba(153, 102, 255, 1)' : 'rgba(255, 159, 64, 1)',
        backgroundColor: metricType === 'price' ? 'rgba(75, 192, 192, 0.2)' : metricType === 'liquidity' ? 'rgba(153, 102, 255, 0.2)' : 'rgba(255, 159, 64, 0.2)',
        fill: false,
        pointRadius: 1,
        pointHitRadius: 5,
        barThickness: metricType === 'volume' ? 2 : undefined,
      },
    ],
  } : {
    labels: metrics.map((metric) => new Date(metric.timestamp * 1000).toLocaleTimeString('en-US', { timeZone: 'UTC' })),
    datasets: [
      {
        type: metricType === 'volume' ? 'bar' : 'line',
        label: metricType === 'price' ? 'Price' : metricType === 'liquidity' ? 'Liquidity' : 'Volume',
        data: metricType === 'price' ? metrics.map((metric) => metric.close_price) : metricType === 'liquidity' ? metrics.map((metric) => metric.total_liquidity * metric.close_price) : metrics.map((metric, index) => index === 0 ? 0 : (metric.total_volume - metrics[index - 1].total_volume) * metric.close_price),
        borderColor: metricType === 'price' ? 'rgba(75, 192, 192, 1)' : metricType === 'liquidity' ? 'rgba(153, 102, 255, 1)' : 'rgba(255, 159, 64, 1)',
        backgroundColor: metricType === 'price' ? 'rgba(75, 192, 192, 0.2)' : metricType === 'liquidity' ? 'rgba(153, 102, 255, 0.2)' : 'rgba(255, 159, 64, 0.7)',
        fill: false,
        pointRadius: 1,
        pointHitRadius: 5,
        barThickness: metricType === 'volume' ? 2 : undefined,
      },
    ],
  }

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
        // type: metricType === 'volume' ? 'linear' : 'logarithmic',
      },
    },
  };

  return (
    <Paper sx={{ padding: '20px', marginBottom: '40px' }}>
      <Typography variant="h5" gutterBottom>
        {chartLabel}
      </Typography>
      {metricType === 'volume' ? (
        <Bar data={chartData} options={options} />
      ) : (
        <Line data={chartData} options={options} />
      )}
    </Paper>
  );
};

export default MetricChart;