import React, { memo, useState } from 'react'

const AboutProduct = memo(({setFilter , filter , AboutProductFilter}) => {
    
    
    
  return (
        <div className='w-full md:w-[65%] justify-start bg-white  flex p-5 gap-25'>
            {AboutProductFilter.map((item ,index) => (
                <li key={index} onClick={()=>setFilter(item)} className='list-none cursor-pointer capitalize'>{item}</li>
            ))}
        </div>
  )
})

export default AboutProduct