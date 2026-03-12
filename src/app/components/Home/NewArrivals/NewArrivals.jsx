import React from 'react'
import NewArrivalsHeader from './NewArrivalsHeader'
import NewArrivalsProducts from './NewArrivalsProducts'
import { newProductsData } from '../../../../features/settings/api'

const NewArrivals = () => {
  return (
    <div className='bg-white w-full flex flex-col  gap-5 '>
        <NewArrivalsHeader/>
        <NewArrivalsProducts products={newProductsData}/>
    </div>
  )
}

export default NewArrivals