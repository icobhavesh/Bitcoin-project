import React, { useState, useEffect } from 'react';
import { Line } from 'react-chartjs-2';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const HistoryCharts = () => {
    const [chartData, setChartData] = useState({});
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const { id } = useParams();

    useEffect(() => {
        const fetchChartData = async () => {
            try {
                const response = await axios.get(
                    `https://api.coingecko.com/api/v3/coins/${id}/market_chart?vs_currency=usd&days=7`
                );

                if (response.data && response.data.prices) {
                    const data = response.data.prices.map(([timestamp, price]) => ({
                        x: new Date(timestamp),
                        y: price,
                    }));

                    setChartData({
                        labels: data.map((point) => point.x.toLocaleDateString()),
                        datasets: [
                            {
                                label: 'Price (USD)',
                                data: data,
                                fill: false,
                                borderColor: 'rgba(75, 192, 192, 1)',
                                tension: 0.1,
                                backgroundColor: 'rgba(75, 192, 192, 0.8)'
                            },
                        ],
                    });
                } else {
                    setError(true);
                }
            } catch (error) {
                console.error('Error fetching data:', error);
                setError(true);
            } finally {
                setLoading(false);
            }
        };

        fetchChartData();
    }, [id]);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error fetching data for {id}</div>;
    }

    return (
        <div>
            <h2 className='text-white'>Price Chart for {id}</h2>
            <Line data={chartData} />
        </div>
    );
};

export default HistoryChart;