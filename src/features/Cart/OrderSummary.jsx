import React, { useEffect } from 'react'
import useCartStore from '../../app/layouts/providers/useCartStore'
import { Link } from 'react-router-dom'

const OrderSummary = () => {
    const cart = useCartStore((state) => state.cart)
    const getTotalPrice = useCartStore((state) => state.getTotalPrice)

    useEffect(() => {
        getTotalPrice()
    }, [cart])
    
  return (
    <div className='shadow-md w-full p-5 rounded-md bg-white'>
        <p className='font-medium my-5 text-center'>Order Summary</p>
        <hr className='text-gray-600/30'/>
        <div className='flex flex-col'>
            <div className='flex items-center p-3 justify-between'>
                <p>Products</p>
                <p>Subtotal</p>
            </div>
            <hr className='text-gray-600/30'/>
            <div className='flex flex-col '>
                {cart.map((item , index) => (
                        <div key={index} className='flex border-b border-b-gray-600/30 items-center p-3 justify-between'>
                            <p className='font-light text-[14px] max-w-[70%]'>{item.title}</p>
                            <p className='font-light text-[14px]'>${item.price * item.quantity}</p>
                        </div>
                ))}
            </div>
              <div className='flex items-center p-3 justify-between'>
                  <p className='font-medium'>Total</p>
                  <p className='font-medium'>${getTotalPrice().toLocaleString()}</p>
              </div>
              <Link to='/checkout' className='rounded-md flex items-center justify-center py-2.5 grow bg-(--accent-secondary) hover:bg-blue-600 text-white'>Process to Checkout</Link>
        </div>

    </div>
  )
}

export default OrderSummary