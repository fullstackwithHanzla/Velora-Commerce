import React from 'react'
import HomeSlider from './HomeSlider'
import HomeBanner from './HomeBanner'

const HomeLandingPage = () => {
  return (
    <div className='flex border w-full m-15'>
        <HomeSlider/>
        <HomeBanner/>
    </div>
  )
}

export default HomeLandingPage
