
import React, { useEffect, useState } from 'react'

export const useVisibleCount = () => {
  const [count , setCount] = useState(2);

  useEffect(()=>{
    const update = () => {
        let width = window.innerWidth;

        if(width >= 1280)  setCount(6)
        else if(width >= 1024)  setCount(5)
        else if(width >= 768)  setCount(4)
        else if(width >= 640)  setCount(3)
        else setCount(2)
}
update();

    window.addEventListener("resize",update)
    return () => window.removeEventListener("resize" , update)
  },[])

  return count
}

