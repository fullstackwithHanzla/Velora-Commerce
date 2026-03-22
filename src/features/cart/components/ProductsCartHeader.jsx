import React from 'react'
import useCartStore from '../store/useCartStore'
const ProductsCartHeader = () => {
    const clearCart = useCartStore((state) => state.clearCart)

    function clearCartItems() {
        clearCart();
    }
    return (
        <div className='flex justify-between w-full   items-center'>
            <h3 className='text-md md:text-2xl'>Your Cart</h3>
            <button onClick={clearCartItems} className='border border-gray-600/20 transition-colors ease-in-out duration-300  rounded-lg py-2 px-4 text-[8px] md:text-[12px] bg-gray-600/10 hover:bg-(--accent-primary) hover:text-white'>Clear Cart</button>
        </div>
    )
}

export default ProductsCartHeader