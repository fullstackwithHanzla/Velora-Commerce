import React from 'react'
import BillingAddress from './BillingAddress'
import OtherNotes from './OtherNotes'
import OrderSummary from '../Cart/OrderSummary'
import CouponCode from '../Cart/CouponCode'
import ShippingMethod from './ShippingMethod'
import PaymentMethod from './PaymentMethod'

const ProductCheckout = () => {
  return (
    <div className='w-full flex gap-5 items-start '>
        <div className='flex flex-col w-[60%]  gap-5'>
            <BillingAddress/>
            <OtherNotes/>
        </div>
        <div className='flex flex-col w-[40%]  gap-5'>
            <OrderSummary isShippingFee={true}/>
            <CouponCode/>
            <ShippingMethod/>
            <PaymentMethod/>
        </div>
    </div>
  )
}

export default ProductCheckout