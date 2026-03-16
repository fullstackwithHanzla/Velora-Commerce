import React, { memo, useState } from 'react'
import { LuUserRound } from "react-icons/lu";
import QuickViewStars from '../../components/Home/QuickView/QuickViewStars';
import AddReview from './AddReview';


const AboutProductData = memo(({product , filter}) => {
    const filteredSpace = filter.replace(" ","")
    
    const value = product[filteredSpace];
    
  return (
    <div className='w-full px-5 flex flex-col lg:flex-row justify-center gap-10 items-center lg:items-start 2xl:w-[75%] my-20'>
        <div className='w-full xl:w-[60%] flex flex-col gap-5 '>
        <h3 className='text-[14px] md:text-xl capitalize '>
          {filter === "reviews"? `${product.reviews?.length} Review for this product` : `${filter} :`}
        </h3>
            <span className='text-[10px] md:text-[14px]'>
                {value && typeof value === "object" && !Array.isArray(value)?
                 Object.entries(value).map(([key , value]) => (
                    <li key={key}>{value}</li>
                 )) 
                  : Array.isArray(value)? value.map((item) => (
                    <div key={item.user} className='flex flex-col bg-white border border-gray-600/20 rounded-md p-5 gap-10 items-start  justify-between'>
                      <div className='flex w-full justify-between items-center'>
                            <div className='flex gap-5 items-center'>
                              <span className='bg-blue-600 text-white rounded-full p-2'><LuUserRound className='size-6'/></span>
                              <p>{item.user}</p>
                            </div>
                                  <div>
                                    <QuickViewStars rating={item.rating}/>
                                  </div>
                      </div>
                          <p>{item.comment}</p>
                    </div>
                  )) : value
            }
            </span>
        </div>
      {filter === "reviews" && <AddReview />}
    </div>
  )
})

export default AboutProductData