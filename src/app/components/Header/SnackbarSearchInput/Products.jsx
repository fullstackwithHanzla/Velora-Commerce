import React, { memo } from 'react'
import { newProductsData } from '../../../../features/settings/api'
import { Link } from 'react-router-dom';


const Products = memo(({products }) => {
    
  return (
    <>
        <h3 className='font-medium  text-lg lg:text-xl text-center md:text-start'>PRODUCTS</h3>
            <div className='flex flex-col gap-2'>
                {products?.map((prod) => (
                    <Link to="" key={prod.id} className='flex text-center md:text-start flex-col md:flex-row rounded-md items-center gap-3 hover:bg-gray-400/10 md:px-5 py-2'>
                        <img src={prod.thumbnail} alt={prod.title} className='w-50 w-md:w-35  lg:w-50 rounded-md p-3 bg-gray-400/20 border border-gray-400/20'/>
                        <div className='flex flex-col gap-1'>
                            <h3 className='font-normal'>{prod.title}</h3>
                            <div className='flex flex-col gap-1 items-start'>
                                <p className='font-light text-[10px] lg:text-[12px]'>{prod.description}</p>
                                <div className='flex gap-2 justify-center w-full md:justify-start items-center'>
                                    <p className='line-through font-light text-gray-600 text-[14px]'>${prod.originalPrice}</p>
                                <p className='font-light text-[18px]'>${prod.price}</p>
                                </div>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
    </>
  )
}
)
export default Products