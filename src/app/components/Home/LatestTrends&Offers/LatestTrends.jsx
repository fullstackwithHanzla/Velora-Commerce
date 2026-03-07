import React, { useRef } from 'react'

const LatestTrends = () => {
    const InputRef = useRef(null)
    function handleSubscribe() {
        InputRef.current.value = ""
    }
  return (
    <div className='w-full 2xl:w-[65%] px-5 '>
        <div className='bg-linear-to-r from-indigo-800 via-indigo-500 to-blue-500  w-full rounded-md text-white flex flex-col gap-4 text-center lg:text-start lg:flex-row justify-between items-center px-5 py-8'>
            <div className='flex flex-col gap-2'>
                <h1 className='font-medium text-[14px] md:text-[18px]' >Don't Miss Out Latest Trends & Offers</h1>
                <p className='font-light text-[10px] md:text-[12px]'>Register to receive news about the latest offers & discount codes</p>
            </div>
            <div className=' w-full md:w-auto'>
                <form className='flex flex-col md:flex-row gap-2 md:gap-1'>
                    <input className=' rounded-md px-4 py-2 md:w-60 text-[10px] md:text-[12px] bg-white focus:outline-none text-black' type="email" required placeholder='Enter Your Email' ref={InputRef} />
                    <button onClick={handleSubscribe} className='px-4 py-2.5 text-[10px] md:text-[12px] bg-(--accent-secondary) rounded-md hover:bg-blue-600'>Subscribe</button>
                </form>
            </div>
        </div>
    </div>
  )
}

export default LatestTrends