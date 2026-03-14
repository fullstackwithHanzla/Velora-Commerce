import React, { useState } from 'react'
import { IoMdHeartEmpty } from "react-icons/io";
import { useToast } from '../../app/layouts/providers/ToastProvider';
import useQuickViewStore from '../../app/layouts/providers/useQuickViewStore';
import useWishListStore from '../../app/layouts/providers/useWishListStore';
import { useShallow } from 'zustand/shallow';
import { FaHeart, FaRegHeart } from 'react-icons/fa6';

const AddToWishListButton = ({ qvProd }) => {

  const {
    wishListId,
    toggleWishList,
    addToWishList,
    removeFromWishList
  } = useWishListStore(
    useShallow((state) => ({
      wishListId: state.wishListId,
      toggleWishList: state.toggleWishList,
      addToWishList: state.addToWishList,
      removeFromWishList: state.removeFromWishList
    }))
  )

  const { showToast } = useToast()

  const isInWishlist = wishListId.includes(qvProd.id)

  function showToastMessage(message, type) {
    showToast({
      message,
      type
    })
  }

  return (
    <button
      onClick={() => {

        toggleWishList(qvProd.id)

        if (!isInWishlist) {
          addToWishList(qvProd)
          showToastMessage("Product added in wishlist", "success")
        } else {
          removeFromWishList(qvProd.id)
          showToastMessage("Product removed from wishlist", "error")
        }

      }}

      className="flex gap-2 bg-(--accent-primary) rounded-md text-[10px] md:text-[14px] items-center justify-center px-4 py-2 text-white hover:bg-[#192344]"
    >
      {isInWishlist ? <FaHeart /> : <FaRegHeart />}
      {isInWishlist ? "Remove From Wishlist" : "Add To Wishlist"}
    </button>
  )
}

export default AddToWishListButton