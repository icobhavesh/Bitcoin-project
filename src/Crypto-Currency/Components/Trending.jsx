import React from 'react'
import { useEffect } from 'react'
import axios from "axios"
import { useState } from 'react'
// import { FetchFromAPI } from '../Axios/FatchApi'
import CoinTrending from './CoinTrending'
const Trending = () => {
    const [trending, setTrending] = useState([])
    useEffect(() => {
        const FetchFromApi = async () => {
            const response = await axios.get('https://api.coingecko.com/api/v3/search/trending')
            // console.log(response.data.coins);
            setTrending(response.data.coins)
        }
        FetchFromApi()

    }, [])

    return (


        <div className='bg-[#0f051d]'>
            <h1 className='text-yellow-300  font-serif text-3xl pt-4  pb-3  h-auto  text-center '>Coin Trending</h1>
            <div className='max-w-[1280px] text-white text-center h-auto mx-auto bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500  rounded-md shadow-md p-4 m-4 grid grid-cols-4 hover:bg-gray-900 text-[20px]  '>
                <h1>Curreny Name</h1>
                <h1>Price</h1>
                <h1>Market_cap_rank</h1>
                <h1 className='hidden'>Symbol</h1>
            </div>
            {trending && trending.map((coin, idx) => {
                return <div key={idx}>
                    <CoinTrending coin={coin.item} key={coin.coin_id} />
                </div>
            })}
        </div>
    )

}

export default Trending
