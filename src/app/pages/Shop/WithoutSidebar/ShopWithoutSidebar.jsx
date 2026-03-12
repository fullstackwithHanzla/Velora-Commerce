import React, { useState } from 'react'
import NewArrivalsProducts from '../../../components/Home/NewArrivals/NewArrivalsProducts'
import { newProductsData } from '../../../../features/settings/api'
import PaginationButtons from './PaginationButtons'

const ShopWithoutSidebar = () => {
  const [pages,setPages] = useState(1);


  const productsPerPage = 8;
  const totalProducts = Math.ceil(newProductsData.length / productsPerPage)
  

  const start = (pages - 1) * productsPerPage
  const end = start + productsPerPage
  

  return (
    <div className='flex flex-col items-center  w-full bg-white'>
        <div className='w-full md:w-[90%] '>
            <NewArrivalsProducts products={newProductsData} start={start} end={end}/>
            <PaginationButtons totalProducts={totalProducts} pages={pages} setPages={setPages} />
        </div>
    </div>
  )
}

export default ShopWithoutSidebar