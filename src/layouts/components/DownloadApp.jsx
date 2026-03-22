import React from 'react'
import { BiLogoPlayStore } from "react-icons/bi";
import { FaApple } from "react-icons/fa";
const DownloadApp = () => {
  return (
    <div className='flex flex-col  text-[12px] md:text-[14px]'>
      <h3 className='text-lg font-medium'>
        Download App
      </h3>
             <div className='mt-3 flex flex-col gap-3'>
                <p className='text-gray-600/80 mt-3'>Get started in seconds – it's fast, free, and easy!</p>
                <a href="#">
                    <button className='border rounded-lg items-center transition-colors duration-300 ease-in-out border-gray-600/40 hover:bg-gray-300/30 py-3 w-50 justify-start pl-3 gap-2 flex'>
                        <FaApple className='size-9'/>
                        <div className='flex flex-col justify-start items-start'>
                            <p className='text-gray-600/80 text-[10px]'>Download on the</p>
                            <p className='font-medium'>App Store</p>
                        </div>
                    </button>
                </a>
                <a href="#">
                    <button className='border rounded-lg items-center transition-colors duration-300 ease-in-out border-gray-600/40 hover:bg-gray-300/30 py-3 w-50 justify-start pl-3 gap-2 flex'>
                        <BiLogoPlayStore className='size-9'/>
                        <div className='flex flex-col justify-start items-start'>
                            <p className='text-gray-600/80 text-[10px]'>Get in on</p>
                            <p className='font-medium'>Google Play</p>
                        </div>
                    </button>
                </a>
            </div>
    </div>
  )
}

export default DownloadApp