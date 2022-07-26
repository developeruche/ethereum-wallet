import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
// import faker from 'faker';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);




export function LineGraph({chatData}) {
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: false,
        text: 'DAO Asset Feed',
      },
    },
  };

  const labels = ['January', 'February', 'March', 'April', 'May', 'June'];
  

  const data = {
    labels,
    datasets: [
      {
        label: 'Price Data',
        data: chatData,
        borderColor: 'rgb(255, 99, 132)',
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      },
    ],
  };

  
  return (
    <div className='line-cht'>
      <Line options={options} data={data} />;
    </div>
  )
  
}