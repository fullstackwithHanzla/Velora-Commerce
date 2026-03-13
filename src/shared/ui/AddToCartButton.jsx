import React, { memo } from 'react'
import { RiShoppingCart2Line } from "react-icons/ri";
import {useToast} from '../../app/layouts/providers/ToastProvider'
import useQuickViewStore from '../../app/layouts/providers/useQuickViewStore';
import { useShallow } from 'zustand/shallow';
import useCartStore from '../../app/layouts/providers/useCartStore';
import { IoBagCheckOutline } from "react-icons/io5";

const AddToCartButton = memo(({qvProd}) => {
  const closeQuickView = useQuickViewStore((state) => state.closeQuickView)
  const { addItem , cartId , toggleCartId} = useCartStore(
        useShallow((state) => ({
            addItem : state.addItem,
            cartId : state.cartId,
            toggleCartId : state.toggleCartId
        }))
    )
  const {showToast} = useToast()
  function showToastMessage (message ,type ){
        showToast({
            message: message,
            type : type,
        })
    }
    function handleAddToCart() {
        showToastMessage("Product Successfully added to cart", "success");
        addItem(qvProd)
        closeQuickView();
        
    }
  return (
    <button onClick={handleAddToCart} className={`flex gap-2 rounded-md text-[10px] md:text-[14px] items-center justify-center transition-colors duration-200 ease-in-out px-4 py-2 text-white bg-(--accent-secondary) hover:bg-blue-700`}>
        <RiShoppingCart2Line/>
        Add to Cart
    </button>
  )
})

export default AddToCartButton