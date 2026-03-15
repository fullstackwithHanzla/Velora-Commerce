import React, { memo } from 'react'
import  { useEffect, useState } from 'react'
import QuickProductThumbnail from '../../components/Home/QuickView/QuickProductThumbnail'
import ProductImgType from '../../components/Home/QuickView/ProductImgType'

import ProductInfoCard from './ProductInfoCard'
import AboutProduct from './AboutProduct'

const InformationCard = memo(({product }) => {
    const [defaultImgUrl,setDefaultImgUrl] = useState(null)
        useEffect(()=>{
            if(product?.images.length){
                setDefaultImgUrl({url : product.images[0]})
            }
        },[product?.id])
  return (
    <div className='w-full px-5 2xl:w-[85%] flex-col xl:flex-row  my-10 gap-20'>
        {/* ProductImage */}
        <div className='flex flex-row-reverse  xl:flex-col  justify-between gap-3'>
            <div className='flex grow xl:grow-0'>
                <QuickProductThumbnail size="lg" defaultImgUrl={defaultImgUrl} qvProd={product}/>
            </div>
            <div>
                <ProductImgType qvProd={product} setDefaultImgUrl={setDefaultImgUrl} flexRow={true}/>
            </div>
        </div>
        {/* Product Information card*/}
        <ProductInfoCard product={product} setDefaultImgUrl={setDefaultImgUrl}/>
        
    </div>
  )
})

export default InformationCard