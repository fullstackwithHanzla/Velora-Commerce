import React, { useState } from 'react'
import PhoneInput from 'react-phone-number-input'
const PhoneInputComponent  = ({label , placeholder }) => {
  const [value,setValue] = useState("")
  return (
    <div className='flex flex-col grow my-5 '>
        <div className='flex gap-1 '>
          <p className='text-[14px]'>{label}</p>
          <span className='text-red-600'>*</span>
        </div>
            <div>
            <PhoneInput value={value}  id="phone" onChange={setValue} className='border  text-[14px] focus:outline-(--accent-secondary) focus:outline-1 flex items-center gap-2 border-gray-600/30 px-5 py-2 rounded-md w-full my-2 relative' placeholder={placeholder} />
          </div>
            
    </div>
  )
}

export default PhoneInputComponent