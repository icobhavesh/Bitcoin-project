import React from 'react'
import axios from 'axios'
export const  BASE_URL='https://api.coingecko.com/api/v3'
export const FetchFromAPI = async (url) => {
    const { data } = await axios.get(`${BASE_URL}/${url}`);
    console.log(data);

    return data;
};
