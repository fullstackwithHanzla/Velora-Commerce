import React from 'react'
import { useToast } from '../../../layouts/providers/ToastProvider'
const CouponCode = () => {
    const {showToast} = useToast()
    function handleDiscount() {
        showToast({
            message : "Invalid Discount Code!",
            type : "error",
            duration : 2500,
        })
    }
  return (
    <div className='rounded-md shadow-md bg-white flex flex-col gap-5 w-full py-5 '>
          <p className='text-gray-600 text-[14px] mx-5'>Have any discount code?</p>
          <hr  className='text-gray-600/20'/>
          <div className='flex flex-col xs:flex-row w-full px-5 gap-5'>
              <input type="text" placeholder='Enter Discount Code' className='border text-[14px] px-5  py-2 grow rounded-md focus:outline-(--accent-secondary) border-gray-600/30' />
              <button onClick={handleDiscount} className='border px-6 rounded-md bg-(--accent-secondary) py-2 text-white text-[14px] hover:bg-blue-600'>Apply Code</button>
          </div>
    </div>
  )
}

export default CouponCode