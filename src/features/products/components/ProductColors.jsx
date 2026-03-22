import React, { useState } from 'react'
import { FaCheck } from 'react-icons/fa6'

const ProductColors = ({product , setDefaultImgUrl}) => {
    const [defaultColor , setDefaultColors] = useState(0)


  return (
    <div className='py-10 my-5 border-y flex flex-col border-gray-600/20'>
        <p className='underline underline-offset-3'>Available Colors :</p>
        {/* Colors */}
        <div className='flex my-5 flex-col gap-2'>
            {product.colorOptions?.map((c , index) => (
                <div key={index} className='flex items-center gap-2'>
                    
                <span aria-label={`Select ${c.name}`} onClick={()=>{
                    setDefaultColors(index);
                    setDefaultImgUrl({url : product.images[index]})
                }} style={{backgroundColor : c.hex}} className={` h-5 w-5 flex items-center justify-center rounded-full`}>
                    {defaultColor === index && <FaCheck className='size-3 text-white'/>}
                    </span>
                    <p className='text-[14px]'>{c.name}</p>
                </div>
            ))}
        </div>
    </div>
  )
}

export default ProductColors