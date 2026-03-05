import React from 'react'
import { newProductsData } from '../../../../features/settings/api'

const NewArrivalsProducts = () => {
    const slides = newProductsData;
  return (
    <div className='grid  mx-auto grid-cols-1  md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap--x-7'>
        {slides.slice(0,8).map((s) => (
            <div className=' p-5 flex flex-col gap-5  items-center min-w-screen md:min-w-full' key={s.id}>
                <div className='h-70 relative w-full md:w-70 flex items-center justify-center rounded-lg bg-gray-500/20'>
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