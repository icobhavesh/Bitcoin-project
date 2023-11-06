import React from 'react'
import Trending from '../Components/Trending'
import Market from '../Components/Market'
// import CoinDetails from '../Components/CoinDetails'

const CryptoHome = () => {
    return (
        <div className='w-full h-auto bg-[#0f051d]'>

            <Trending />
            <Market />
        </div>
    )
}

export default CryptoHome