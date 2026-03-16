import React from 'react'
import { newProductsData } from '../../../../features/settings/api'
import ProductCards from '../../../components/Home/NewArrivals/ProductCards';
import NewArrivalsProducts from '../../../components/Home/NewArrivals/NewArrivalsProducts';

const RelatedProductCard = ({product}) => {
  const allProducts = newProductsData;
  const filteredRelatedItems = allProducts.filter((item) => item.category === product.category)
  return (
    <div className='w-full lg:w-[85%] p-5'>
      <h3 className='text-md lg:text-xl font-medium'>Related Products</h3>
      {filteredRelatedItems ? <NewArrivalsProducts products={filteredRelatedItems} /> : <p className='items-center flex justify-center p-5'>No related products have been found</p>}
    </div>
  )
}

export default RelatedProductCard