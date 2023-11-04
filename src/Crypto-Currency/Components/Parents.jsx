import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import CryptoHome from '../pages/CryptoHome'
import CryptoDetails from '../pages/CryptoDetails'
import Navbar from './Navbar'
import Trending from './Trending'
import Market from './Market'


const Parents = () => {
    return (
        <BrowserRouter>
        <Navbar/>
            <Routes>
                <Route path='/'
                    element={<CryptoHome />}/>
                <Route path='/trending'
                    element={<Trending/>}/>
                <Route path='/coins'
                    element={<Market/>}/>
                <Route path="coin/:id" element={<CryptoDetails />} />

            </Routes>
        </BrowserRouter>
    )
}

export default Parents