
import React from 'react'
import { BiTrendingDown } from "react-icons/bi"
import { HiTrendingUp } from "react-icons/hi"
import { Link } from "react-router-dom"
const Coin = ({ coin }) => {
    // const { id } = useParams()
    console.log(coin);
    return (
        <Link to={`/coin/${coin.id}`}>
             <div className="grid  grid-cols-3 sm:grid-cols-4 font-light p-1  bg-[#1b0c32] rounded-md shadow-md text-white max-w-[1280px] items-center  mx-auto h-auto m-2  hover:bg-gray-900 transition duration-300 transform hover:scale-105">
                

                <div className="flex items-center text-center gap-1 font-bold md:ml-[50px] ">

                    <img className="w-6 md:mr-20" src={coin.image} alt={coin.name} />
                    <p >{coin.name}</p>
                    <span className="text-xs ">({coin.symbol})</span>

                </div>
                <span className="w-full text-2x md:ml-10 font-bold text-center">$ {coin.current_price}</span>

                <span className={`flex gap-1 font-bold  ${coin.price_change_percentage_24h < 0 ? 'text-red-400' : 'text-green-400'}`}>

                    {coin.price_change_percentage_24h < 0 ? <BiTrendingDown /> : <HiTrendingUp />}
                    {coin.price_change_percentage_24h}
                </span>

                <div className="hidden sm:block">
                    <p className="font-semibold">Market Cap</p>
                    <span>{coin.market_cap}</span>
                </div>
            </div>
        </Link>
    )
}

export default Coin

// const Coin = ({ coin }) => {
//     console.log(coin);
//     return (

//         <div className='flex flex-wrap justify-center '>
//             <div className='flex justify-center items-center gap-10 m-4'>
//                 <img className='w-10 h-10' src={coin.image} />
//                 {/* <h1>{coin.symbol}</h1> */}
//                 <p>{coin.name}</p>
//                 <p>{coin.current_price}</p>
//                 <span className={`flex gap-1 ${coin.price_change_percentage_24h < 0 ? 'text-red-400' : 'text-green-400'}`}>
//                     {coin.price_change_percentage_24h < 0 ? <BiTrendingDown /> : <HiTrendingUp />}
//                     {coin.price_change_percentage_24h}
//                 </span>
//                 <p>{coin.low_24}</p>
//                 <p>{coin.market_cap}</p>

//             </div>

//         </div>
//     )

// }
// export default Coin
// import React from 'react';
// import { BiTrendingDown } from 'react-icons/bi';
// import { HiTrendingUp } from 'react-icons/hi';

// const Coin = ({ coin }) => {
//     return (
//         <div className="flex flex-wrap justify-center">
//             <div className="flex justify-center items-center gap-4 md:gap-10 m-4">
//                 <img className="w-10 h-10" src={coin.image} alt={coin.name} />
//                 <div className="text-center">
//                     <p className="text-lg font-semibold">{coin.name}</p>
//                     <p className="text-xl md:text-2xl">{coin.current_price}</p>
//                 </div>
//                 <div className="text-center">
//                     <span
//                         className={`flex gap-1 text-xl md:text-2xl ${coin.price_change_percentage_24h < 0
//                                 ? 'text-red-400'
//                                 : 'text-green-400'
//                             }`}
//                     >
//                         {coin.price_change_percentage_24h < 0 ? (
//                             <BiTrendingDown />
//                         ) : (
//                             <HiTrendingUp />
//                         )}
//                         {coin.price_change_percentage_24h}
//                     </span>
//                     <p className="text-sm md:text-base">
//                         24h Change
//                     </p>
//                 </div>
//                 <p className="text-xl md:text-2xl">{coin.low_24}</p>
//                 <p className="text-xl md:text-2xl">{coin.market_cap}</p>
//             </div>
//         </div>
//     );
// };

// export default Coin;

