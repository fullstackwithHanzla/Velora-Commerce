import React from 'react'
import { IoMdHeartEmpty } from "react-icons/io";


const AddToWishListButton = () => {
  return (
    <button className='flex gap-2 bg-(--accent-primary) rounded-md text-[10px] md:text-[14px] items-center justify-center px-4 py-2 text-white hover:bg-[#192344]'>
        <IoMdHeartEmpty/>
        Add to WishList
    </button>
  )
}

export default AddToWishListButton