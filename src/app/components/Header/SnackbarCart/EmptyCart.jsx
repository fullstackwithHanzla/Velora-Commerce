import React from 'react'
import { AiOutlineShoppingCart } from "react-icons/ai";
import { Link } from 'react-router-dom';
const EmptyCart = () => {
  return (
    <div className=' py-10 flex flex-col justify-center gap-8 items-center'>
        <div className=' h-28 w-28 flex  justify-center items-center bg-gray-500/10 rounded-full'>
            <AiOutlineShoppingCart className='size-10 fill-gray-600/70'/>
        </div>
            <p className='text-gray-500/90'>Your cart is empty</p>
            <Link to="/shop" className='py-4 bg-(--accent-primary) text-white px-30 rounded-lg'>Continue Shoping</Link>
    </div>
  )
}

export default EmptyCart