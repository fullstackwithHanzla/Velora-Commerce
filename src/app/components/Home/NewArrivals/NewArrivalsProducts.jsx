import React, { useState } from 'react'
import { newProductsData } from '../../../../features/settings/api'
import { IoEyeOutline } from "react-icons/io5";
import { CiHeart } from "react-icons/ci";



const NewArrivalsProducts = () => {
    const slides = newProductsData;
    const [isUserHovering,setIsUserHovering] = useState(false)
  return (
    <div className='grid  mx-auto grid-cols-1  md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-y-4 gap-x-7'>
        {slides.slice(0,8).map((s) => (
            <div onMouseEnter={() => setIsUserHovering(true)} onMouseLeave={()=> setIsUserHovering(false)} className=' p-5 flex flex-col gap-5  items-center min-w-screen md:min-w-full' key={s.id}>
                <div className='h-70 relative overflow-hidden  w-full md:w-70 flex items-center justify-center rounded-lg bg-[#F6F7FB]'>
                    <div className={`absolute flex  justify-center items-end  transition-transform duration-300 ease-in-out translate-y-40   ${isUserHovering? "z-10" : "-z-10"}`} style={{transform : isUserHovering? `translateY(-45px)` : "translateY(0px)"}}>
                        <div className=' flex gap-2'>
                            <button className='bg-white p-2 rounded-md border border-gray-400/30'>
                                <IoEyeOutline className='size-5'/>
                            </button>
                            <button className='bg-(--accent-secondary) rounded-md px-4 text-[10px] text-white '>
                                Add To Cart
                            </button>
                            <button className='bg-white p-2 rounded-md border border-gray-400/30'>
                                <CiHeart className='size-5'/>
                            </button>
                        </div>
                    </div>
                    <div className='absolute inset-0 left-auto right-2 top-2 bg-(--accent-secondary) h-6 flex items-center justify-center px-4 rounded-2xl text-white'>
                        <span className='text-[10px] md:text-[12px]'>{s.salesPercentage}% OFF</span>
                    </div>
                    
                    <img src={s.thumbnail} alt={s.title} className='w-50'/>
                </div>
                <div className='flex flex-col w-full md:w-70 items-center md:items-start gap-2'>
                    <h3 className='text-[14px] md:text-[16px] hover:text-(--accent-secondary) font-medium'>{s.title}</h3>
                    <div className='flex gap-1 items-center'>
                        <span className='line-through text-gray-600 text-[12px] md:text-[14px] font-medium'>${s.price}</span>
                        <span className='text-lg md:text-xl font-medium'>${s.originalPrice}</span>
                    </div>
                </div>
            </div>
        ))}
    </div>
  )
}

export default NewArrivalsProducts