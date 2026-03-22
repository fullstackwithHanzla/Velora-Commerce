import React from 'react'
import ProductsCartHeader from './ProductsCartHeader'
import Products from './Products'
import useCartStore from '../store/useCartStore'
import EmptyCart from './EmptyCart'
import CouponCode from './CouponCode'
import OrderSummary from './OrderSummary'

const ProductsCart = () => {
    const cart = useCartStore((state) => state.cart)
  return (
    <div className=' w-full md:w-[85%] flex flex-col gap-5 items-center justify-center my-10 p-5'>
          {cart.length > 0 ? 
        <>
                  <ProductsCartHeader />
                  <Products />
                  <CouponCode/>
                  <OrderSummary/>
        </>
              : <EmptyCart isCartPageOpen={true}/>
    }   
    </div>
  )
}

export default ProductsCart