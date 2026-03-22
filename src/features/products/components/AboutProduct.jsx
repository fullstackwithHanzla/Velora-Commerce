import React, { memo, useState } from 'react'

const AboutProduct = memo(({setFilter , filter , AboutProductFilter}) => {
    
    
    
  return (
      <div className='w-full 2xl:w-[85%] flex-wrap justify-start bg-white  flex p-5 gap-5 md:gap-25'>
            {AboutProductFilter.map((item ,index) => (
                <li key={index} onClick={() => setFilter(item)} className={`list-none  text-[12px] md:text-[14px] cursor-pointer capitalize ${filter === item ? "text-blue-600 underline underline-offset-2 font-medium":""}`}>{item}</li>
            ))}
        </div>
  )
})

export default AboutProduct