import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import {Link} from "react-router-dom"
const CoinDetails = () => {
    const [data, setData] = useState({});
    const { id } = useParams();

    useEffect(() => {
        const fetchFromApi = async () => {
            try {
                const response = await axios.get(
                    `https://api.coingecko.com/api/v3/coins/${id}?localization=false&tickers=true&market_data=false&community_data=false&sparkline=false`
                );
                setData(response.data);
                // console.log(response.data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        fetchFromApi();
    }, [id]);

    return (
        <>
            <Link to={`/coin/${id}`}>
                <div className='flex gap-4 items-center mt-10'>
                    <img src={data.image && data.image.small} alt={data.name} />
                    <h1 className='text-2xl text-white  mb-2 capitalize font-bold'>{data.name}</h1>

                </div>
                {data.description && data.description.en && (
                    <p className=' cursor-pointer  font-serif mt-6 text-gray-300 [&>a]:text-blue-600 [&>a]:underline' dangerouslySetInnerHTML={{ __html: data.description.en }}></p>

                )}
                
            </Link>
        </>
    );
};

export default CoinDetails;
