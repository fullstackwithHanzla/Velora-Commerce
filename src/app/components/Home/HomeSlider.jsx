import React, { useEffect, useState } from 'react'
import { newProductsData } from '../../../features/settings/api'
import { Link } from 'react-router-dom'

const HomeSlider = () => {
  const [index,setIndex] = useState(0)
  const slides = newProductsData.slice(0,3)

  const prev = () => {
    setIndex((prev) => (prev === 0 ? slides.length - 1 :  prev - 1))
  }
  const next = () => {
    setIndex((prev) => (prev === slides.length - 1? 0 : prev  + 1))
  }

  const slidesTimingDuration = 2000
  const autoSlide = true;

  useEffect(() => {
    if(!autoSlide) return;
    const slideInterval = setInterval(next, slidesTimingDuration);
    return () => clearInterval(slideInterval)
  }, [])
  return (
    <div className=' overflow-hidden   relative bg-white rounded-xl flex w-full'>
        <div className='flex w-full transition-transform duration-300 ease-in-out'
          style={{ transform : `translateX(-${index * 100}%)`}}
        >
          {slides.map((prod) => (
            <div key={prod.id} className='flex    shrink-0 w-full p-15  justify-around items-center'>
              <div className='flex flex-col gap-4 '>
                <div className='flex gap-2 items-center'>
                  <h1 className='text-5xl text-(--accent-secondary) font-medium'>{prod.salesPercentage}%</h1>
                  <div className='flex flex-col leading-4'>
                    <span>SALE</span>
                    <span>OFF</span>
                  </div>
                </div>
                
                <h1 className='text-lg font-medium'>{prod.title}</h1>

                <div>
                  <p className='text-[14px]'>{prod.description}</p>
                </div>

                <div className='py-2'>
                  <Link className='border py-2 px-6 bg-(--accent-primary) text-white rounded-md'>
                    Shop Now
                  </Link>
                </div>


              </div>
              <img src={prod.thumbnail} alt="" className='size-46'/>
            </div>
          ))}
        </div>
                <div className=' absolute z-5 bottom-2 flex w-full px-10 justify-between items-center '>
                  <button onClick={prev} className='py-2 px-4 bg-(--accent-secondary) text-white rounded-md'>Previous</button>
                  <button onClick={next} className='py-2 px-4 bg-(--accent-secondary) text-white rounded-md'>Next</button>
                </div>
    </div>
  )
}

export default HomeSlider