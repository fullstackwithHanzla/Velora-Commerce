import React, { memo, useEffect } from 'react'
import useCartStore from '../store/useCartStore'
import { Link } from 'react-router-dom'
import useShippingMethods from '../../checkout/store/useShippingMethods'
import { useShallow } from 'zustand/react/shallow'

const OrderSummary = memo(({ isShippingFee, isCheckout = true }) => {
    const cart = useCartStore((state) => state.cart)
    const getTotalPrice = useCartStore((state) => state.getTotalPrice)

    const { selectedShippingMethod, setselectedShippingMethod } = useShippingMethods(
        useShallow((state) => ({
            selectedShippingMethod: state.selectedShippingMethod,
            setselectedShippingMethod: state.setselectedShippingMethod
        }))
    )

    const getPrice = () => {
        const totalDefault = getTotalPrice();
        if(selectedShippingMethod === "freeShipping") return totalDefault;
        if(selectedShippingMethod === "FedEx") return totalDefault + 10.99;
        if(selectedShippingMethod === "DHL") return totalDefault + 12.75;
    }

    useEffect(() => {
        getTotalPrice()
    }, [cart])

    return (
        <div className='shadow-md w-full p-5 rounded-md bg-white'>
            <p className='font-medium my-5 text-center'>Order Summary</p>
            <hr className='text-gray-600/30' />
            <div className='flex flex-col'>
                <div className='flex items-center p-3 justify-between'>
                    <p>Products</p>
                    <p>Subtotal</p>
                </div>
                <hr className='text-gray-600/30' />
                <div className='flex flex-col '>
                    {cart.map((item, index) => (
                        <div key={index} className='flex border-b border-b-gray-600/30 items-center p-3 justify-between'>
                            <p className='font-light text-[14px] max-w-[70%]'>{item.title}</p>
                            <p className='font-light text-[14px]'>${item.price * item.quantity}</p>
                        </div>
                    ))}
                </div>

                {isShippingFee && <div className='flex border-b border-b-gray-600/30 items-center p-3 justify-between'>
                    <p className='font-light text-[14px] max-w-[70%]'>Shipping Fee</p>
                    <p className='font-light text-[14px]'>$0</p>
                </div>}

                <div className='flex items-center p-3 justify-between'>
                    <p className='font-medium'>Total</p>
                    <p className='font-medium'>${getPrice().toLocaleString()}</p>
                </div>
                {isCheckout && <Link to='/checkout' className='rounded-md flex items-center justify-center py-2.5 grow bg-(--accent-secondary) hover:bg-blue-600 text-white'>Process to Checkout</Link>}
            </div>

        </div>
    )
})

export default OrderSummary