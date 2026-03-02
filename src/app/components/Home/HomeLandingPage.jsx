import React from 'react'
import HomeSlider from './HomeSlider'
import HomeBanner from './HomeBanner'

const HomeLandingPage = () => {
  return (
    <div className='flex justify-between  w-full'>
        <HomeSlider/>
        <HomeBanner/>
    </div>
  )
}

export default HomeLandingPage
