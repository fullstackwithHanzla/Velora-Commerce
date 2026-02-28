import React, { useState } from 'react'
import { CiSearch } from "react-icons/ci";
import { RxCross2 } from "react-icons/rx";
import useSearchStore from '../../../layouts/providers/useSearchStore';
import InputElement from './InputElement';


const SearchFilter = () => {
    
    const searchFilterButtons = ["All", "Products", "Blog"] 
    const [active, setActive] = useState("All")
    

    const handleClick = (value) => {
    setActive(value);
  };

  
  const accent = "#3C50E0";
  return (
    <div className={`flex flex-col items-center relative gap-5 py-8 `}>

        
            <InputElement/>
        <div className='flex gap-4 w-[90%] '>

            {searchFilterButtons?.map((button) => {
        
        const style = { "--accent-secondary": accent };

      
        const base =
          "py-2 px-4  border rounded-md transition-colors " +
          "hover:border-[var(--accent-secondary)] hover:text-[var(--accent-secondary)]";

        
        const activeStyles =
          "border-[var(--accent-secondary)] text-[var(--accent-secondary)]";

        return (
          <button
            key={button}
            style={style}
            onClick={() => handleClick(button)}
            className={`${base} text-xs md:text-sm ${active === button ? activeStyles : ""}`}
          >
            {button}
          </button>
        );
      })}
        </div>
        
    </div>
  )
}

export default SearchFilter