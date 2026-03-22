import React, { useState } from 'react'
import { RiMoneyDollarCircleLine } from "react-icons/ri";
import usePaymentMethods from '../../app/layouts/providers/usePaymentMethods';
import { useShallow } from 'zustand/react/shallow';
import PaymentMethodDetails from './PaymentMethodDetails';

const PaymentMethod = () => {
  const {SelectedPaymentMethod, setSelectedPaymentMethod} = usePaymentMethods(
    useShallow((state) => ({
      SelectedPaymentMethod : state.SelectedPaymentMethod,
      setSelectedPaymentMethod : state.setSelectedPaymentMethod
    }))
  )
  return (
    <div className='bg-white rounded-md shadow-md'>
      <h3 className='px-5 mt-5 text-lg font-medium'>Payment Methods</h3>
      <p className='px-5 text-red-600 text-center my-2'>This payment method is made manually without using any Library for learning purpose (because there is actually no backend involved in this project)</p>
      <hr className='text-gray-600/30' />
      <div className='flex flex-col p-5 gap-2 w-full'>

        <div className='flex gap-5 items-center w-full ' onClick={() => setSelectedPaymentMethod("Stripe")}>

          <input type="radio" name='paymentMethod' checked={SelectedPaymentMethod === "Stripe"} onChange={(e) => setSelectedPaymentMethod(e.target.value)} value="Stripe" className='appearance-none h-4 w-4 border  rounded-full checked:border-4 checked:border-blue-600' />

          <div className='border border-gray-600/30 hover:bg-gray-200/30 rounded-md p-3 flex items-center gap-3 w-full'>
            <img src="/assets/PaymentMethodCheckout/Stripe.png" alt="" className='w-15' />
            <div className='h-12 w-px bg-gray-600/30'></div>
            <span className='text-gray-600 text-[14px]'>Stripe</span>
          </div>
          
        </div>

        <div className='flex gap-5 items-center w-full ' onClick={() => setSelectedPaymentMethod("CashOnDelivery")}>

          <input type="radio" name='paymentMethod' checked={SelectedPaymentMethod === "CashOnDelivery"} onChange={(e) => setSelectedPaymentMethod(e.target.value)} value="CashOnDelivery" className='appearance-none h-4 w-4 border  rounded-full checked:border-4 checked:border-blue-600' />

          <div className='border border-gray-600/30 hover:bg-gray-200/30 rounded-md p-3 flex items-center gap-3 w-full'>
            <RiMoneyDollarCircleLine className='size-7 w-15' />
            <div className='h-12 w-px bg-gray-600/30'></div>
            <span className='text-gray-600 text-[14px]'>Cash On Delivery</span>
          </div>

        </div>
        <PaymentMethodDetails/>
      </div>
    </div>
  )
}

export default PaymentMethod