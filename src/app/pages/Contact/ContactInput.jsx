import React, { memo, useState } from 'react'
import { LuEye } from "react-icons/lu";
import { LuEyeOff } from "react-icons/lu";

const ContactInput = memo(({ label , inputType = "text" , placeholder  = "Enter Something..."  }) => {
    
  
  
  return (
    <div className='flex flex-col grow  my-5 '>
        <div className='flex gap-1 '>
          <p className='text-[14px]'>{label}</p>
          <span className='text-red-600'>*</span>
        </div>
            <div>
            <input type={inputType} required className='border text-[14px] focus:outline-(--accent-secondary) focus:outline-1 border-gray-600/30 px-10  py-2 rounded-md w-full my-2  relative' placeholder={placeholder} />
          </div>
            
    </div>
  )
})

export default ContactInput