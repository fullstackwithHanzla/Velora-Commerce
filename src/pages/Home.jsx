
import React from 'react'
import HomeLandingPage from '../features/home/components/HomeLandingPage'
import HomeProductsInfo from '../features/home/components/HomeProductsInfo'
import NewArrivals from '../features/products/components/NewArrivals'
import ProductTimer from '../features/home/components/ProductTimer'
import LatestTrends from '../features/home/components/LatestTrends'
import AboutDelivery from '../features/home/components/AboutDelivery'

const Home = () => {
  return (
    <>
      <div className='flex flex-col gap-5 bg-gray-400/10 w-full p-5 z-0  justify-center items-center'>
      <HomeLandingPage/>
      </div>
    
    <HomeProductsInfo/>
    <NewArrivals/>
    <ProductTimer/>
    <LatestTrends/>
    <AboutDelivery/>
    </>
  )
}

export default Home