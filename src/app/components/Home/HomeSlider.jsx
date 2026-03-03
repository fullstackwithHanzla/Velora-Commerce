import React, { useEffect, useState } from 'react'
import { newProductsData } from '../../../features/settings/api'
import { Link } from 'react-router-dom'
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";

const HomeSlider = () => {
  const [index,setIndex] = useState(0)
  const slides = newProductsData.slice(0,3)

  const prev = () => {
    setIndex((prev) => (prev === 0 ? slides.length - 1 :  prev - 1))
  }
  const next = () => {
    setIndex((prev) => (prev === slides.length - 1? 0 : prev  + 1))
  }

  const slidesTimingDuration = 3000
  const autoSlide = true;

  useEffect(() => {
    if(!autoSlide) return;
    const slideInterval = setInterval(next, slidesTimingDuration);
    return () => clearInterval(slideInterval)
  }, [index])
  return (
    <div className=' overflow-hidden relative bg-white rounded-xl flex w-full'>
        <div className='flex w-full  transition-transform duration-300 ease-in-out'
          style={{ transform : `translateX(-${index * 100}%)`}}
        >
          {slides.map((prod) => (
            <div key={prod.id} className='flex flex-col-reverse  shrink-0 w-full  p-10 md:p-15 justify-around md:justify-between gap-5 md:gap-10 items-center lg:flex-row'>
              <div className='flex flex-col gap-4 w-[95%] md:w-[80%] justify-center'>
                <div className='flex gap-2 items-center'>
                  <h1 className='text-4xl md:text-6xl text-(--accent-secondary) font-medium'>{prod.salesPercentage}%</h1>
                  <div className='flex flex-col leading-4 text-[10px] md:text-[16px]'>
                    <span>SALE</span>
                    <span>OFF</span>
                  </div>
                </div>
                
                <h1 className='text-lg md:text-2xl font-medium'>{prod.title}</h1>

                <div className=' w-[95%] lg:w-[80%]'>
                  <p className='text-[10px] md:text-[14px]'>{prod.description}</p>
                </div>

                <div className='py-2 flex justify-center items-center md:justify-start'>
                  <Link className=' py-2 px-6 bg-(--accent-primary) text-white rounded-md'>
                    Shop Now
                  </Link>
                </div>


              </div>
              <div className='md:w-[60%] '>
                <img src={prod.thumbnail} alt="" className='grow w-full sm:w-90 md:grow'/>
              </div>
            </div>
          ))}
        </div>
                <div className=' absolute z-5 top-[45%] flex w-full  justify-between items-center '>
                  <button onClick={prev} className='p-2  text-(--accent-secondary) rounded-md'><MdKeyboardArrowLeft className='size-8'/></button>
                  <button onClick={next} className='p-2 text-(--accent-secondary) rounded-md'><MdKeyboardArrowRight className='size-8'/></button>
                </div>

                <div className="absolute z-5 bottom-5 flex w-full justify-center items-center">
                  <div className='flex items-center justify-center gap-2'>
                      {slides.map((_,i) => (
                    <span key={i} onClick={() => setIndex(i)} className={`h-2 w-2 rounded-full bg-(--accent-secondary) transition-all duration-300 ease-in-out
                        ${index === i? "p-1.5" : "opacity-50"}
                      `}></span>
                  ))}
                  </div>
                </div>
    </div>
  )
}

export default HomeSlider