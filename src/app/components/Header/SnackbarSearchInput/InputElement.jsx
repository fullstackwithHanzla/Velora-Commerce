
import React, { useState } from 'react'
import { CiSearch } from 'react-icons/ci'
const InputElement = () => {
    const [isInputActive,setInputActive] = useState(false)
  return (
    <form className={`border h-10 md:h-15 rounded-md w-[90%] flex items-center pl-6 gap-1 ${isInputActive? "border-(--accent-secondary)": "border-black/20"}`}>
                <CiSearch className='size-5 '/>
                <input type="text" aria-describedby='Input Section' placeholder='Type Anything to Search' role='tooltip' onFocusCapture={()=> setInputActive(true)} onBlurCapture={()=> setInputActive(false)} className=' cursor-pointer px-4 flex-1 h-full focus:outline-none'/>
            </form>
  )
}

export default InputElement