import React, { memo, useState } from 'react'
import { FaMinus, FaPlus } from 'react-icons/fa6'
import useCartStore from '../../../layouts/providers/useCartStore'

const QuickViewQuantity = memo(({qvProd , quantity  , setQuantity , showLabel = true}) => {
    
    

    const updateQuantity = useCartStore((state) => state.updateQuantity)
  return (
    <div className='flex flex-col items-center gap-1 p-2'>
            {showLabel && <h3 className='text-gray-600 text-[12px] md:text-[14px]'>Quantity</h3>}
            <div className='flex gap-2'>
                <button onClick={()=>{
                  setQuantity((prev) => prev + 1)
                    updateQuantity(qvProd.id, + 1);
                    
                }} className='bg-gray-600/20 px-3 rounded-md'>
                    <FaPlus className='w-2 md:w-4'/>
                </button>
                     {/* Quantity Count */}
            <div className='px-4 md:px-8 py-1 border border-gray-600/30 rounded-md'>
                <h1 className='text-lg'>{qvProd.quantity? qvProd.quantity : quantity}</h1>
            </div>
                <button onClick={()=>{
                    setQuantity((prev) => prev - 1)
                    updateQuantity(qvProd.id, - 1);
                    
                }} className='bg-gray-600/20 px-3 rounded-md'>
                    <FaMinus className='w-2 md:w-4'/>
                </button>
            </div>
    </div>
  )
})

export default QuickViewQuantity