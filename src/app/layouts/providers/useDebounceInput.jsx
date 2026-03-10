import React, { useEffect, useState } from 'react'

const useDebounceInput = (value , delay = 400) => {
  const [debounce,setDebounce] = useState(value)

  useEffect(()=>{
    const timer = setTimeout(()=>{
        setDebounce(value)
    },delay)

    return()=>{
      clearInterval(timer)
    }
  },[value,delay])

  return debounce;
}

export default useDebounceInput