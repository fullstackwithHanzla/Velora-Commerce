import React, { useCallback, useMemo, useState } from 'react'
import NewArrivalsProducts from '../../../components/Home/NewArrivals/NewArrivalsProducts'
import { newProductsData } from '../../../../features/settings/api'
import PaginationButtons from './PaginationButtons'
import ShopFilter from './ShopFilter'


const ShopWithoutSidebar = ({ Popular = false, products = [], BrowseByCategory = false}) => {
  const [pages,setPages] = useState(1);

  const [filterType, setFilterType] = useState(() => {
    return Popular ? "Best Selling" : "";
  })
  

  const [noColumngrid , setNoColumnGrid] = useState(false)

  const handleFilterType = useCallback((data) => {
      setFilterType(data)
  })

  const handleGridType = useCallback((data) =>{
      setNoColumnGrid(data ? true : false)
  })

  
  

  const defaultProducts = newProductsData;

  const bestSelling = BrowseByCategory ? [...products].sort((a, b) =>
    (b.unitsSold / b.initialStock) - (a.unitsSold / a.initialStock)
  ) : [...defaultProducts].sort((a, b) =>
    (b.unitsSold / b.initialStock) - (a.unitsSold / a.initialStock)
  )
  

  
  const latestProduct = BrowseByCategory ? [...products].sort((a, b) => b.launchDate - a.launchDate) : [...defaultProducts].sort((a, b) => b.launchDate - a.launchDate)
    

  const filteredProducts = useMemo(() => {
  if (filterType === "Latest Products") return latestProduct;
  if (filterType === "Best Selling") return bestSelling;
    if (BrowseByCategory === true) return products
  return defaultProducts;
}, [filterType]);


  const productsPerPage = 8;
  const totalProducts = Math.ceil(filteredProducts?.length / productsPerPage);
  

  const start = (pages - 1) * productsPerPage
  const end = start + productsPerPage
  const slicedProducts = filteredProducts?.slice(start,end).length;

  const getFilterProduct = filteredProducts

  const PopularFilter = Popular ? true : false
  

  return (
    <div className='flex flex-col items-center my-10 w-full'>
        <div className='w-full md:w-[90%] '>
        <ShopFilter Popular={PopularFilter} productsLength={newProductsData.length} slicedProducts={slicedProducts} handleFilterType={handleFilterType} handleGridType={handleGridType}  noColumngrid={noColumngrid}/>
            <NewArrivalsProducts products={getFilterProduct} shopDifferentPage={true} start={start} end={end} noColumngrid={noColumngrid}/>
            <PaginationButtons totalProducts={totalProducts} pages={pages} setPages={setPages} />
        </div>
    </div>
  )
}

export default ShopWithoutSidebar