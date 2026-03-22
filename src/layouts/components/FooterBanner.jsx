import React from 'react'

const FooterBanner = () => {
    const paymentMethodImagesSource = [
        "/assets/paymentMethods/payment-01.svg",
        "/assets/paymentMethods/payment-02.svg",
        "/assets/paymentMethods/payment-03.svg",
        "/assets/paymentMethods/payment-04.svg",
        "/assets/paymentMethods/payment-05.svg",
    ]
  return (
    <div className='flex  px-5 min-h-15 justify-center md:justify-between  items-center  flex-wrap  text-[10px] md:text-[12px] bg-gray-400/20 '>
        <div className='flex justify-center px-5 py-2 items-center'>
            <span>© 2026 All rights reserved by<a href="https://github.com/fullstackwithHanzla" className='text-(--accent-secondary)'> @fullstackwithHanzla</a></span>
        </div>
        <div className=' flex py-2 px-5 gap-2 justify-between  items-center'>
            <div>
                <p className='text-gray-600/80'>We Accept:</p>
            </div>
            <div className='flex gap-3'>
                {paymentMethodImagesSource.map((url) =>(
                    <img src={`${url}`} alt="payment-method" key={url} className='h-3 sm:h-4' />
                ))}
            </div>
        </div>
    </div>
  )
}

export default FooterBanner