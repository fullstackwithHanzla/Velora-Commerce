import React from 'react'
import EmptyCart from '../../app/components/Header/SnackbarCart/EmptyCart'
import ProductCheckout from './ProductCheckout'
import useCartStore from '../../app/layouts/providers/useCartStore'

const Checkout = () => {
    const cart = useCartStore((state) => state.cart)
  return (
      <div className=' w-full md:w-[85%] flex flex-col gap-5 items-center justify-center my-10 p-5'>
          {cart.length === 0 ? <EmptyCart isCartPageOpen={true} /> : <ProductCheckout/>}
    </div>
  )
}

export default Checkout