import React, { useState } from 'react'
import { IoMdHeartEmpty } from "react-icons/io";
import { useToast } from '../../app/layouts/providers/ToastProvider';
import useQuickViewStore from '../../app/layouts/providers/useQuickViewStore';


const AddToWishListButton = () => {
  const [isWishListActive,setIsWishListActive] = useState(false)
  const closeQuickView = useQuickViewStore((state) => state.closeQuickView)
  const {showToast} = useToast()
  function showToastMessage (message ,type ){
        showToast({
            message: message,
            type : type,
        })
    }

  return (
    <button onClick={()=>{
      setIsWishListActive(!isWishListActive)
      showToastMessage(!isWishListActive? "Product added in wishlist" : "Product removed from wishlist" , !isWishListActive ? "success" : "error");
      closeQuickView()
    }} className='flex gap-2 bg-(--accent-primary) rounded-md text-[10px] md:text-[14px] items-center justify-center px-4 py-2 text-white hover:bg-[#192344]'>
        <IoMdHeartEmpty/>
        Add to WishList
    </button>
  )
}

export default AddToWishListButton