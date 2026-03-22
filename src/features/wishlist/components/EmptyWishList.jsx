import React from 'react'
import { LuFolderHeart } from "react-icons/lu";
import { Link } from 'react-router-dom';

const EmptyWishList = () => {
  return (
    <div className='w-full bg-white flex items-center justify-center py-20'>
        <div className='flex flex-col gap-2 items-center'>
            <LuFolderHeart className='size-30 text-(--accent-secondary)'/>
            <p>Your WishList is Empty</p>
            <Link to="/shop" className='border px-4 md:px-10 py-2 bg-(--accent-secondary) text-white rounded-md'>Continue Shopping</Link>
        </div>
    </div>
  )
}

export default EmptyWishList