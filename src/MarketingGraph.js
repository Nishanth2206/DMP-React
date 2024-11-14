// src/MarketingGraph.js
import React, { useEffect, useRef } from 'react';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend,
  CategoryScale,
} from 'chart.js';

// Register the required components
ChartJS.register(LinearScale, PointElement, LineElement, Tooltip, Legend, CategoryScale);

const MarketingGraph = () => {
  const chartRef = useRef(null);

  const data = {
    labels: [
      'January', 'February', 'March', 'April', 'May', 'June', 'July',
      'August', 'September', 'October', 'November', 'December'
    ],
    datasets: [
      {
        label: 'Website Traffic',
        data: [65, 59, 80, 81, 56, 55, 40, 70, 75, 90, 95, 85],
        fill: false,
        backgroundColor: 'rgba(75,192,192,0.4)',
        borderColor: 'rgba(75,192,192,1)',
        tension: 0, // Straight lines
      },
      {
        label: 'Conversions',
        data: [28, 48, 40, 19, 86, 27, 90, 80, 60, 70, 75, 95],
        fill: false,
        backgroundColor: 'rgba(255,99,132,0.4)',
        borderColor: 'rgba(255,99,132,1)',
        tension: 0, // Straight lines
      },
    ],
  };

  const options = {
    responsive: true,
    animation: {
      // Animate the drawing of the lines
      onProgress: (animation) => {
        const chartInstance = chartRef.current?.chartInstance;
        if (chartInstance) {
          chartInstance.update();
        }
      },
      onComplete: () => {
        const chartInstance = chartRef.current?.chartInstance;
        if (chartInstance) {
          chartInstance.update();
        }
      },
      duration: 2000, // Duration of the animation in milliseconds
    },
    scales: {
      x: {
        grid: {
          color: 'rgba(0, 0, 0, 0.1)', // Light grid lines for x-axis
        },
      },
      y: {
        beginAtZero: true,
        grid: {
          color: 'rgba(0, 0, 0, 0.1)', // Light grid lines for y-axis
        },
      },
    },
    plugins: {
      legend: {
        labels: {
          color: 'black', // Legend text color
        },
      },
    },
    elements: {
      line: {
        tension: 0.4, // Slightly curved lines
      },
      point: {
        radius: 5, // Point size
      },
    },
  };

  useEffect(() => {
    const chartInstance = chartRef.current?.chartInstance;

    return () => {
      if (chartInstance) {
        chartInstance.destroy();
      }
    };
  }, []);

  return (
    <div style={{ backgroundColor: 'white', padding: '20px', borderRadius: '10px' }}>
      <h2 style={{ color: 'black' }}>Marketing Performance</h2>
      <Line ref={chartRef} data={data} options={options} />
    </div>
  );
};

export default MarketingGraph;
