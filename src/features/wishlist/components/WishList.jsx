import React from 'react'
import WishListHeader from './WishListHeader'
import WishListProducts from './WishListProducts'
import useWishListStore from '../store/useWishListStore'
import EmptyWishList from './EmptyWishList'

const WishList = () => {
  const wishList = useWishListStore((state) => state.wishList)
  return (
    <div className=' w-full xl:w-[85%] flex flex-col items-center gap-5 p-5 '>
        {wishList.length > 0? 
        <>
          <WishListHeader/>
          <WishListProducts/>
        </> : <EmptyWishList/>}
    </div>
  )
}

export default WishList