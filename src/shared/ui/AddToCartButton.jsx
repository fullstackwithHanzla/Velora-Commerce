import React from 'react'
import { RiShoppingCart2Line } from "react-icons/ri";
const AddToCartButton = () => {
  return (
    <button className='flex gap-2 bg-(--accent-secondary) rounded-md text-[10px] md:text-[14px] items-center justify-center px-4 py-2 text-white hover:bg-blue-700'>
        <RiShoppingCart2Line />
        Add to Cart
    </button>
  )
}

export default AddToCartButton