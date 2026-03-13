import React, { useState } from 'react'
import { LuEye } from "react-icons/lu";
import { LuEyeOff } from "react-icons/lu";

const SignUpInputComponent = ({register , label , inputType = "text" , placeholder  = "EnterSomething..." , registerValue , passwordIcon = false}) => {
    
  const [showPassIcon,setShowPassIcon] = useState(false)
  
  return (
    <div>
        <div className='flex gap-1 '>
          <p className='text-[14px]'>{label}</p>
          <span className='text-red-600'>*</span>
        </div>
            <div className='relative '>
              {passwordIcon && <span className='absolute z-2 h-full  right-2 flex cursor-pointer items-center'>
                {showPassIcon? <LuEyeOff onClick={()=>setShowPassIcon(!showPassIcon)}className="size-5 cursor-pointer text-gray-600/90 "/> : <LuEye onClick={()=>setShowPassIcon(!showPassIcon)}className="size-5 text-gray-600/90 cursor-pointer "/>}
              </span>}
            <input type={passwordIcon? showPassIcon === false ? "password" : "text" : inputType} className='border text-[14px] border-gray-600/30 px-5 py-2 rounded-md w-full my-2 focus:outline-(--accent-secondary) focus:outline-1 relative' placeholder={placeholder}  {...register(`${registerValue}`)}/>
            </div>
            
    </div>
  )
}

export default SignUpInputComponent