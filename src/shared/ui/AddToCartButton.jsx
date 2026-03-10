import React from 'react'
import { RiShoppingCart2Line } from "react-icons/ri";
import {useToast} from '../../app/layouts/providers/ToastProvider'
import useQuickViewStore from '../../app/layouts/providers/useQuickViewStore';
const AddToCartButton = () => {
  const closeQuickView = useQuickViewStore((state) => state.closeQuickView)
  const {showToast} = useToast()
  function showToastMessage (message ,type ){
        showToast({
            message: message,
            type : type,
        })
    }
    function handleAddToCart() {
        showToastMessage("Product Successfully added to cart", "success");
        closeQuickView()
    }
  return (
    <button onClick={handleAddToCart} className='flex gap-2 bg-(--accent-secondary) rounded-md text-[10px] md:text-[14px] items-center justify-center px-4 py-2 text-white hover:bg-blue-700'>
        <RiShoppingCart2Line />
        Add to Cart
    </button>
  )
}

export default AddToCartButton