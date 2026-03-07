import React from 'react'
import HomeSlider from './HomeSlider'
import HomeBanner from './HomeBanner'

const HomeLandingPage = () => {
  return (
    <div className="grid gap-5 grid-cols-1 grid-rows-2 2xl:grid-cols-[1fr_auto]  sm:grid-rows-1    w-full ">
        <HomeSlider/>
        <HomeBanner/>
    </div>
  )
}

export default HomeLandingPage
