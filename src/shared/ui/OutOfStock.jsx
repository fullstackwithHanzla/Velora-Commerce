import React from 'react'
import { TbShoppingCartOff } from "react-icons/tb";
const OutOfStock = () => {

  return (
    <button className='flex gap-2 bg-(--accent-secondary) rounded-md text-[10px] md:text-[14px] items-center justify-center px-4 py-2 text-white hover:bg-blue-700'>
        <TbShoppingCartOff/>
        Out Of Stock
    </button>
  )
}

export default OutOfStock