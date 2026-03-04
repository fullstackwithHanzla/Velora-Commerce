
import React from 'react'
import HomeLandingPage from '../components/Home/HomeLandingPage'
import HomeProductsInfo from '../components/Home/HomeProductsInfo/HomeProductsInfo'

const Home = () => {
  return (
    <>
      <div className='flex flex-col gap-5 bg-gray-400/10 w-full p-5  justify-center items-center'>
      <HomeLandingPage/>
      </div>
    
    <HomeProductsInfo/>
    </>
  )
}

export default Home