import React, { useCallback } from 'react'
import usePaymentMethods from '../../app/layouts/providers/usePaymentMethods';
import { useShallow } from 'zustand/react/shallow';
import Input from './Input'
import { useForm } from 'react-hook-form';

const PaymentMethodDetails = () => {
    const {register , handleSubmit , formState} = useForm({
        criteriaMode : "all",
        mode : "onSubmit",
        reValidateMode : "onChange",
    })
    const { SelectedPaymentMethod, setSelectedPaymentMethod } = usePaymentMethods(
        useShallow((state) => ({
            SelectedPaymentMethod: state.SelectedPaymentMethod,
            setSelectedPaymentMethod: state.setSelectedPaymentMethod
        }))
    )
    const onSubmit = 
        async (data) => {
            await new Promise(res => setTimeout(res, 500))
            console.log(data);
    }

    if (SelectedPaymentMethod === "CashOnDelivery"){
        return <>
            <p className='my-5 text-center text-green-700'>You have selected Cash on Delivery. Your order will be processed and payment will be collected upon delivery.</p>
            <button type='submit' onClick={onSubmit} className='border py-2 text-white bg-(--accent-secondary) hover:bg-blue-600 transition-colors duration-300 ease-in-out rounded-md flex items-center justify-center'>Place Order</button>
        </>
    }
    
  return (
    <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col my-5 gap-5'>
        <Input register={register} maxValue={16} registerValue="CardNumber" placeholder='Card Number' label="Card Number" inputType='number'/>
        <div className='flex flex-col gap-2 md:flex-row'>
              <Input register={register} maxValue={2} registerValue="ExpiryMonth" placeholder='Expiry Month' label="Expiry Month" inputType='number' />
              <Input register={register} maxValue={2} registerValue="ExpiryYear" placeholder='Expiry Year' label="Expiry Year" inputType='number' />
              <Input register={register} maxValue={3} registerValue="CVC" placeholder='CVC' label="Security Code" inputType='number' />
        </div>
          <Input register={register} registerValue="Email" placeholder='Email' label="Email" inputType='email' />
          <button type='submit' onClick={onSubmit} className='border py-2 text-white bg-(--accent-secondary) hover:bg-blue-600 transition-colors duration-300 ease-in-out rounded-md flex items-center justify-center'>Pay</button>
    </form>
  )
}

export default PaymentMethodDetails