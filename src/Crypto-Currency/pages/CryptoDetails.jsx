import React from 'react'
import CoinDetails from '../Components/CoinDetails'

import HistoryChart from '../Components/HistoryChart'

const CryptoDetails = () => {

    return (
        <div className='bg-[#0f051d] w-full h-auto'>

            <div className='max-w-[1240px]  mx-auto bg-[#0f051d] text-white'>

                <HistoryChart />
                <CoinDetails />
            </div>
        </div>

    )
}

export default CryptoDetails