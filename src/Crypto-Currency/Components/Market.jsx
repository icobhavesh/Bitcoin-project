import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Coin from './Coin'


const Market = () => {
    const [Data, setData] = useState([])
    useEffect(() => {
        const FetchFromApi = async () => {
            const response = await axios.get(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false&locale=en`
            )
            setData(response.data)
            // console.log(response.data);

        }
        FetchFromApi()

    }, [])

    return (
        <div className='w-full  h-auto bg-[#0f051d] '>
            
            <h1 className=' font-serif text-4xl text-center text-yellow-300  pt-10  animate-bounce'>CurrentMarket</h1>
            <div className="grid  grid-cols-3 sm:grid-cols-4  md:text-3xl p-3 bg-[#1b0c32] rounded-md shadow-md text-white max-w-[1280px] items-center  mx-auto h-auto m-2 font-semibold bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500  ">
            <h1 className='text-center pl-5'>Curreny Name</h1>
                <h1 className='text-center pl-7'>Price</h1>
                <h1>24h change</h1>
                <h1>Market_cap_rank</h1>
                {/* <h1 className='hidden'>Symbol</h1> */}
                </div>
            {
                Data && Data.map(coin => <Coin key={coin.id} coin={coin} />)
            }
        </div>
    )
}

export default Market