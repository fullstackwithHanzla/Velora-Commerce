import React, { useState } from 'react'
import { useShallow } from 'zustand/react/shallow';
import useShippingMethods from '../../app/layouts/providers/useShippingMethods'
const ShippingMethod = () => {
  const {selectedShippingMethod, setselectedShippingMethod} = useShippingMethods(
    useShallow((state) => ({
      selectedShippingMethod : state.selectedShippingMethod,
      setselectedShippingMethod : state.setselectedShippingMethod
    }))
  )
  return (
    <div className=' rounded-md bg-white shadow-md'>
      <h3 className='text-lg p-5 font-medium'>Shipping Method</h3>
      <hr className='text-gray-600/30 ' />
      <div  className='flex flex-col w-full items-start gap-2 p-5'>
        <div onClick={()=>setselectedShippingMethod("freeShipping")} className='flex gap-5 w-full items-center '>
          <input onChange={(e)=>setselectedShippingMethod(e.target.value)} checked={selectedShippingMethod === "freeShipping"}  type="radio" name='shipping' value="freeShipping" className='appearance-none h-4 w-4 border  rounded-full checked:border-4 checked:border-blue-600' />
          <span>Free Shipping</span>
        </div>
        <div onClick={()=>setselectedShippingMethod("FedEx")} className='flex  w-full items-center gap-5'>
          <input onChange={(e) => setselectedShippingMethod(e.target.value)} checked={selectedShippingMethod === "FedEx"}  type="radio" name='shipping' value="FedEx" className='appearance-none h-4 w-4 border  rounded-full checked:border-4 checked:border-blue-600' />
          <div className='border rounded-md border-gray-600/30 hover:bg-gray-200/20 hover:border-gray-600/70 transition-colors duration-300 ease-in-out flex px-5 items-center  gap-5 w-full'>
            <img src="/assets/shippingMethod/FedEx.png" alt="hi" className=' w-12 md:w-20 ' />
            <div className='h-15 w-px bg-gray-600/30'></div>
            <div>
              <span className='font-medium text-[14px] md:text-[18px]'>$10.99</span>
              <p className='text-[12px] md:text-[14px] text-gray-600 '>Standard Shipping</p>
            </div>
          </div>
        </div>
        <div onClick={()=>setselectedShippingMethod("DHL")} className='flex w-full items-center gap-5'>
          <input onChange={(e)=>setselectedShippingMethod(e.target.value)} checked={selectedShippingMethod === "DHL"}  type="radio" name='shipping' value="DHL" className='appearance-none h-4 w-4 border  rounded-full checked:border-4 checked:border-blue-600' />
          <div className='border p-2.5 rounded-md border-gray-600/30 hover:bg-gray-200/20 hover:border-gray-600/70 transition-colors duration-300 ease-in-out flex px-5 items-center  gap-5 w-full'>
            <img src="/assets/shippingMethod/DHL.png" alt="hi" className=' w-12 md:w-20' />
            <div className='h-15 w-px bg-gray-600/30'></div>
            <div>
              <span className='font-medium text-[14px] md:text-[18px]'>$12.75</span>
              <p className='text-[12px] md:text-[14px] text-gray-600 '>Standard Shipping</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ShippingMethod