import React from 'react'
import NewArrivalsHeader from './NewArrivalsHeader'
import NewArrivalsProducts from './NewArrivalsProducts'

const NewArrivals = () => {
  return (
    <div className='bg-white w-full flex flex-col  gap-5 '>
        <NewArrivalsHeader/>
        <NewArrivalsProducts/>
    </div>
  )
}

export default NewArrivals