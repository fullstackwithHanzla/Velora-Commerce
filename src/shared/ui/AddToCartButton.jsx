import React, { memo } from 'react'
import { RiShoppingCart2Line } from "react-icons/ri";
import {useToast} from '../../app/layouts/providers/ToastProvider'
import useQuickViewStore from '../../app/layouts/providers/useQuickViewStore';
import { useShallow } from 'zustand/shallow';
import useCartStore from '../../app/layouts/providers/useCartStore';
const AddToCartButton = memo(({qvProd}) => {
  const closeQuickView = useQuickViewStore((state) => state.closeQuickView)
  const { addItem } = useCartStore(
        useShallow((state) => ({
            addItem : state.addItem,
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
    <button onClick={handleAddToCart} className='flex gap-2 bg-(--accent-secondary) rounded-md text-[10px] md:text-[14px] items-center justify-center px-4 py-2 text-white hover:bg-blue-700'>
        <RiShoppingCart2Line />
        Add to Cart
    </button>
  )
})

export default AddToCartButton