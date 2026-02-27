import React from 'react'

const HeaderBanner = () => {
  return (
    <div className='h-12 bg-(--accent-primary)  justify-center items-center  flex w-full '>
            <div className=' flex items-center w-[95%]  justify-start   sm:max-w-[90%] md:max-w-[85%] md:justify-between lg:justify-between lg:max-w-[75%]'>
                <div>
                    <h5 className='text-white text-[12px] hidden md:block  sm:text-[14px]'>Get free Delivery on orders over $80</h5>
                </div>
                <div>
                    <h1 className='text-white text-[12px] sm:text-[14px]'>Welcome Back @fullstackwithHanzla | Hanzla </h1>
                </div>
            </div>
        </div>
  )
}

export default HeaderBanner