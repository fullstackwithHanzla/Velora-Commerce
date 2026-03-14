import React from 'react'
import useWishListStore from '../../layouts/providers/useWishListStore'

const WishListHeader = () => {
    const clearWishList = useWishListStore((state) => state.clearWishList)
    const clearWishListId = useWishListStore((state) => state.clearWishListId)

    function handleClearWishlist() {
        clearWishList();
        clearWishListId();
        
    }
  return (
    <div className='flex justify-between w-full   items-center'>
        <h3 className='text-md md:text-2xl'>Your WishList</h3>
        <button onClick={handleClearWishlist} className='border border-gray-600/20 transition-colors ease-in-out duration-300  rounded-lg py-2 px-4 text-[8px] md:text-[12px] bg-gray-600/10 hover:bg-(--accent-primary) hover:text-white'>Clear WishList Cart</button>
    </div>
  )
}

export default WishListHeader