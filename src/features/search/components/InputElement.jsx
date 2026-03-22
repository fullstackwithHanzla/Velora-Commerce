
import React, { useEffect, useState } from 'react'
import { CiSearch } from 'react-icons/ci'
import useSearchInputStore from '../store/useSearchInputStore'
import useDebounceInput from '../store/useDebounceInput'
const InputElement = () => {
    const [isInputActive,setInputActive] = useState(false)
    const [inputValue,setInputValue] = useState("")
    const setQuery = useSearchInputStore((state) => state.setQuery)
    // const query = useSearchInputStore((state) => state.query)

    const debounce = useDebounceInput(inputValue,600)

    function handleInputState(e) {
      setInputValue(e.target.value);
    }
    
    useEffect(()=>{
      setQuery(debounce)
    },[debounce])
    
  return (
    <form onSubmit={(e)=> e.preventDefault()} className={`border h-10 md:h-15 rounded-md w-[90%] flex items-center pl-6 gap-1 ${isInputActive? "border-(--accent-secondary)": "border-black/20"}`}>
                <CiSearch className='size-5 '/>
                <input onChange={(e)=> handleInputState(e)} type="text" aria-describedby='Input Section' placeholder='Type Anything to Search' role='tooltip' onFocusCapture={()=> setInputActive(true)} onBlurCapture={()=> setInputActive(false)} className=' cursor-pointer px-4 flex-1 h-full focus:outline-none'/>
            </form>
  )
}

export default InputElement