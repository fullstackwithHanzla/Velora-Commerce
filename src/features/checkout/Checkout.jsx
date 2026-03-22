import React from 'react'
import EmptyCart from '../cart/components/EmptyCart'
import ProductCheckout from './components/ProductCheckout'
import useCartStore from '../cart/store/useCartStore'

const Checkout = () => {
    const cart = useCartStore((state) => state.cart)
  return (
      <div className=' w-full md:w-[85%] flex flex-col gap-5 items-center justify-center my-10 p-5'>
          {cart.length === 0 ? <EmptyCart isCartPageOpen={true} /> : <ProductCheckout/>}
    </div>
  )
}

export default Checkout
