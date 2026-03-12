import React, { useCallback, useState } from 'react'
import NewArrivalsProducts from '../../../components/Home/NewArrivals/NewArrivalsProducts'
import { newProductsData } from '../../../../features/settings/api'
import PaginationButtons from './PaginationButtons'
import ShopFilter from './ShopFilter'

const ShopWithoutSidebar = () => {
  const [pages,setPages] = useState(1);

  const [filterType , setFilterType] = useState("")
  const [noColumngrid , setNoColumnGrid] = useState(false)

  const handleFilterType = useCallback((data) => {
      setFilterType(data)
  })

  const handleGridType = useCallback((data) =>{
      setNoColumnGrid(data ? true : false)
  })

  
  

  const defaultProducts = newProductsData;

  const bestSelling = [...defaultProducts]
    .sort((a , b) => 
    (b.unitsSold / b.initialStock) - (a.unitsSold / a.initialStock)
    )

  
  const latestProduct = [...defaultProducts]
    .sort((a,b) => b.launchDate - a.launchDate)

  const filterdProduct = useCallback(()=>{
    if(filterType === "Latest Products") return latestProduct;
    if(filterType === "Best Selling") return bestSelling;
    else return defaultProducts;
  })


  const productsPerPage = 8;
  const totalProducts = Math.ceil(filterdProduct()?.length / productsPerPage);
  

  const start = (pages - 1) * productsPerPage
  const end = start + productsPerPage
  const slicedProducts = filterdProduct()?.slice(start,end).length;

  const getFilterProduct = useCallback(filterdProduct())
  

  return (
    <div className='flex flex-col items-center my-10 w-full'>
        <div className='w-full md:w-[90%] '>
            <ShopFilter productsLength={newProductsData.length} slicedProducts={slicedProducts} handleFilterType={handleFilterType} handleGridType={handleGridType}  noColumngrid={noColumngrid}/>
            <NewArrivalsProducts products={getFilterProduct} shopDifferentPage={true} start={start} end={end} noColumngrid={noColumngrid}/>
            <PaginationButtons totalProducts={totalProducts} pages={pages} setPages={setPages} />
        </div>
    </div>
  )
}

export default ShopWithoutSidebar