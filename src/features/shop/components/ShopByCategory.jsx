import React from 'react'
import { useParams } from 'react-router-dom'
import { newProductsData } from '../../blog/api'
import ShopWithoutSidebar from './ShopWithoutSidebar'


const ShopByCategory = () => {
    const {slug} = useParams()

    const products = newProductsData.filter((item) => item.category.replaceAll(" ","-")=== slug)

    
  return (
      <>
        <ShopWithoutSidebar products={products} BrowseByCategory={true}/>
    </>
  )
}

export default ShopByCategory