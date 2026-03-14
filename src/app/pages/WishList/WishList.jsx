import React from 'react'
import WishListHeader from './WishListHeader'
import WishListProducts from './WishListProducts'

const WishList = () => {
  return (
    <div className=' w-full xl:w-[85%] flex flex-col items-center gap-5 p-5 '>
        <WishListHeader/>
        <WishListProducts/>
    </div>
  )
}

export default WishList