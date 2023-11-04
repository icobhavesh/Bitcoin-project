import React from 'react';
import logo from '../assets/btc.png';
import { Link } from 'react-router-dom';
const Navbar = () => {
    return (
        <div className="w-full h-screen   bg-gradient-to-r from-indigo-900 via-purple-900 to-purple-600 ">
            <nav className="container   flex text-white font-bold  items-center justify-center p-6 mx-auto hover:text-gray-600 capitalize">
                <Link to="/" className="text-gray-800 transition-colors duration-300 transform dark:text-gray-200 border-b-2 border-blue-500 mx-1.5 sm:mx-6 ">
                    Home
                </Link>

                <Link to='/trending' className="border-b-2 border-transparent hover:text-gray-800 transition-colors duration-300 transform dark:hover:text-gray-200 hover:border-blue-500 mx-1.5 sm:mx-6">
                    Trending
                </Link>

                <Link to="coin/:id" className="border-b-2 border-transparent hover:text-gray-800 transition-colors duration-300 transform dark:hover:text-gray-200 hover:border-blue-500 mx-1.5 sm:mx-6">
                    CoinDetails
                </Link>

                <Link to="coins" className="border-b-2 border-transparent hover:text-gray-800 transition-colors duration-300 transform dark:hover:text-gray-200 hover:border-blue-500 mx-1.5 sm:mx-6">
                    Coins
                </Link>

                <Link to="#" className="border-b-2 border-transparent hover:text-gray-800 transition-colors duration-300 transform dark:hover:text-gray-200 hover:border-blue-500 mx-1.5 sm:mx-6">
                    Login
                </Link>


            </nav>
            <div className='mt-4'>
                <h1 className=' pt-10 text-white text-center font-sans font-bold    md:text-7xl'>TRACK AND TRADE</h1>
                <h1 className='bg-gradient-to-r from-amber-200 to-yellow-500 bg-clip-text text-transparent text-center font-sans font-bold text-6xl md:text-8xl'>CRYPTO CURRENCIES</h1>

            </div>
            <div className="w-[300px] mt-40 h-auto absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2    ">
                <img className="block mx-auto pt-4 animate-bounce" src={logo} alt="" />
            </div>
        </div>
    );
};

export default Navbar;
