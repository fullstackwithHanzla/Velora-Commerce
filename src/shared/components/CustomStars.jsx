import React, { memo, useState } from 'react'

const CustomStars = memo(({ selectedStars , setselectedStars }) => {

    const [hoveredStars, sethoveredStars] = useState(0)
    return (
        <div className='flex gap-1 items-center'>
            {Array.from({ length: 5 }).map((_, index) => (
                <span
                    className={` 
                cursor-pointer transition-colors ease-in-out duration-300  text-gray-500 text-[18px]  
                ${index + 1 <= selectedStars ? "text-yellow-500/90" : ""}
                ${index + 1 <= hoveredStars ? "text-yellow-500/90" : ""}
                
                `}
                    onMouseEnter={() => sethoveredStars(index + 1)}
                    onMouseLeave={() => sethoveredStars(0)}
                    onClick={() => setselectedStars(index + 1)} key={index}>&#9733;</span>
            ))}
        </div>
    )
})

export default CustomStars