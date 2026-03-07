
import React from 'react'
import HomeLandingPage from '../components/Home/HomeLandingPage'
import HomeProductsInfo from '../components/Home/HomeProductsInfo/HomeProductsInfo'
import NewArrivals from '../components/Home/NewArrivals/NewArrivals'

const Home = () => {
  return (
    <>
      <div className='flex flex-col gap-5 bg-gray-400/10 w-full p-5 z-0  justify-center items-center'>
      <HomeLandingPage/>
      </div>
    
    <HomeProductsInfo/>
    <NewArrivals/>
    </>
  )
}

export default Home