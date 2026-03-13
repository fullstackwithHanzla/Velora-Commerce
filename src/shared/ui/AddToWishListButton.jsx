import React, { useState } from 'react'
import { IoMdHeartEmpty } from "react-icons/io";
import { useToast } from '../../app/layouts/providers/ToastProvider';
import useQuickViewStore from '../../app/layouts/providers/useQuickViewStore';
import useWishListStore from '../../app/layouts/providers/useWishListStore';
import { useShallow } from 'zustand/shallow';
import { FaHeart, FaRegHeart } from 'react-icons/fa6';


const AddToWishListButton = ({qvProd}) => {
  const [isWishListActive,setIsWishListActive] = useState(false)
  const {wishListId , toggleWishList} = useWishListStore(
    useShallow((state) => ({
      wishListId : state.wishListId,
      toggleWishList : state.toggleWishList
    }))
  )
  const {showToast} = useToast()
  function showToastMessage (message ,type ){
        showToast({
            message: message,
            type : type,
        })
    }

  return (
    <button onClick={()=>{
      toggleWishList(qvProd.id)
      setIsWishListActive(!isWishListActive)
      showToastMessage(!isWishListActive? "Product added in wishlist" : "Product removed from wishlist" , !isWishListActive ? "success" : "error");
      
    }} className='flex gap-2 bg-(--accent-primary) rounded-md text-[10px] md:text-[14px] items-center justify-center px-4 py-2 text-white hover:bg-[#192344]'>
        {wishListId.includes(qvProd.id)? <FaHeart/> : <FaRegHeart/>}
        {wishListId.includes(qvProd.id)? "Remove From Wishlist" : "Add to Wishlist"}
        
    </button>
  )
}

export default AddToWishListButton