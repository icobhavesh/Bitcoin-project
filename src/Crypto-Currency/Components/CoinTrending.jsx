
import React from 'react';
import { Link } from 'react-router-dom';

const CoinTrending = ({ coin }) => {
    console.log(coin);

    return (
        <>

            <Link to={`/coin/${coin.id}`}>
                <div className="max-w-[1280px] h-auto mx-auto bg-[#1b0c32]  rounded-md shadow-md p-4 m-4 grid grid-cols-4 hover:bg-gray-900 transition duration-300 transform    font-semibold hover:scale-105">

                    <h1 className="text-center text-white">{coin.name}</h1>
                    <h1 className="text-center text-white">{coin.market_cap_rank}</h1>
                    <h1 className="text-center text-white">{coin.price_btc.toFixed(10)}</h1>
                    <h1 className="text-center text-gray-400 hidden sm:block">{coin.symbol}</h1>
                </div>
            </Link>
        </>
    );
};

export default CoinTrending;
