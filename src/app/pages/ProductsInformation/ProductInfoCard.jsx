import React from 'react'
import QuickViewStars from '../../components/Home/QuickView/QuickViewStars'
import { FaCheck } from 'react-icons/fa6'

const ProductInfoCard = ({product}) => {
  return (
    <div className='flex flex-col w-full gap-3'>
            <h2 className='text-xl md:text-3xl font-medium'>{product.title}</h2>
            <div className='flex items-center justify-between'>
                <div className='flex gap-2'>
                    <QuickViewStars rating={product.rating}/>
                    <p className='text-[12px]'>({product.reviewCount} Customer Reviews)</p>
                    <div className='flex items-center gap-1'>
                        <div className={`h-4 w-4  rounded-full  border flex items-center justify-center ${product.inStock? "border-green-600": "border-red-700"}`}>
                                <FaCheck className={`size-2 ${product.inStock? "text-green-500/80" : "text-red-700"}`}/>
                                    </div>
                                <p className='text-[10px] text-gray-600 md:text-[12px]'>{product.inStock? "In Stock" : "Out of Stock"}</p>
                    </div>
                </div>
                <div className={`border px-4 rounded-2xl text-[12px] text-white  py-1 ${product.inStock? "bg-(--accent-secondary)" : "bg-red-700 line-through" }`}>
                    <p>{product.inStock? `%${product.salesPercentage} OFF` : "Out of Stock"}</p>
                </div>
            </div>
            {/* Description */}
            <p className='text-[14px]'>{product.description}</p>
            {/*  */}
            <h3 className='flex gap-1 items-center text-xl'>Price : 
                <span className='line-through font-medium text-gray-600 text-2xl'>${product.originalPrice}</span>
                <span className='font-medium text-2xl'>${product.price}</span>
            </h3>
        </div>
  )
}

export default ProductInfoCard