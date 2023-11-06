
import { useParams } from "react-router-dom";
import { Line } from 'react-chartjs-2';
import moment from "moment";
import axios from "axios";
import { useEffect, useState } from 'react';
import { Chart, CategoryScale, LinearScale, Title, Tooltip, Legend, Filler, PointElement, LineElement, BarController, TimeScale } from 'chart.js';
import 'chartjs-adapter-date-fns';

Chart.register(
  CategoryScale,
  LinearScale,
  Title,
  Tooltip,
  Legend,
  Filler,
  PointElement,
  LineElement,
  BarController,
  TimeScale
);

const HistoryChart = () => {
  const { id } = useParams();
  const [coinChartData, setCoinChartData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`https://api.coingecko.com/api/v3/coins/${id}/market_chart?vs_currency=usd&days=7`);
        const prices = response.data.prices.map(value => ({ x: new Date(value[0]), y: value[1].toFixed(2) }));
        setCoinChartData(prices);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
        setLoading(false);
      }
    };

    fetchData();
  }, [id]);

  const options = {
    responsive: true,
    scales: {
      x: {
        type: 'time',
        time: {
          unit: 'day',
          displayFormats: {
            day: 'MMM dd',
          },
        },
      },
      y: {
        beginAtZero: true,
        title: {
          display: true,
          text: 'Price (USD)',
        },
      },
    },
    plugins: {
      filler: {
        propagate: true,
      },
    },
    layout: {
      padding: {
        left: 20,
        right: 20,
        top: 10,
        bottom: 20,
      },
    },
    interaction: {
      intersect: false,
    },
  };

  const data = {
    datasets: [
      {
        label: id,
        data: coinChartData,
        borderColor: 'rgb(53, 162, 235)',
        backgroundColor: 'rgba(53, 162, 235, 0.5)',
        fill: 'origin',
        pointRadius: 0,
      }
    ]
  }

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <Line options={options} data={data} />
    </div>
  )
}

export default HistoryChart;
