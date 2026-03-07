import React from 'react'
import { newProductsData } from '../../../../features/settings/api'
import CountDown from './CountDown'
import { Link } from 'react-router-dom'
const productId = 1010
const productForCountDown = newProductsData.find((item) => item.id === productId)

const targetDate = new Date(new Date().getTime() + 7 * 24 * 60 * 60 * 1000)

const ProductTimer = () => {
  return (
    <div className='w-full 2xl:w-[65%] flex items-center justify-center p-5'>
        <div className='bg-(--bg-card) gap-5 border w-full border-gray-600/20 rounded-lg p-8 flex flex-col-reverse md:flex-row items-center justify-between'>
            {/* Product Info and timer */}
            <div className='flex flex-col gap-4 items-center md:items-start'>
                <p className='text-(--accent-secondary) text-[10px] md:text-[12px]'>Don't Miss!!</p>
                <h4 className='text-lg md:text-2xl font-medium text-center md:text-start'>Enhance Your <br /> Working Experience</h4>
                <p className='text-gray-600 text-[10px] md:text-[12px]'>{productForCountDown.title}</p>
                <CountDown targetDate={targetDate}/>
                <Link to="/shop" className='w-[50%] flex items-center justify-center bg-(--accent-secondary) rounded-md text-[10px] md:text-[14px] px-4 py-2 text-white  hover:bg-blue-700'>Check it Out</Link>
            </div>
            <div className='flex  items-center justify-center w-60 md:w-100'>
                <img src={productForCountDown.thumbnail} alt={productForCountDown.id} className='grow'/>
            </div>
        </div>
    </div>
  )
}

export default ProductTimer