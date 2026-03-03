import React from 'react'
import { newProductsData } from '../../../features/settings/api'
import { Link } from 'react-router-dom'

const HomeBanner = () => {
  const firstBanner = newProductsData.find((prod) => prod.slug === "macbook-air-m1-8-256")
  const secondBanner = newProductsData.find((prod) => prod.slug === "iphone-16-pro-128")

  const bannerArray = [firstBanner , secondBanner]
  
  
  return (
    <div className=' flex flex-col 2xl:flex-col lg:flex-row gap-5  justify-around '>
      {bannerArray.map((BannerProd) => (
        <Link to="" key={BannerProd.id} className='flex justify-between items-center rounded-lg bg-white grow px-6 py-6 '>
          <div className='flex flex-col  gap-10 w-[40%] justify-around'>
              <div className='flex flex-col gap-4'>
                <h1 className='text-xl font-medium'>{BannerProd.title}</h1>
                <p className='text-[14px]'>{BannerProd.specifications?.display}</p>
              </div>

              <div>
                <p className='text-[13px] text-gray-700/80'>LIMITED TIME OFFER</p>
                <div className='flex gap-2 items-center'>
                  <h3 className='text-2xl font-medium'>${BannerProd.originalPrice}</h3>
                <span className='line-through font-light'>${BannerProd.price}</span>
                </div>
              </div>

          </div>
          <div className=' h-full flex grow  justify-center items-center'>
            <img src={BannerProd.thumbnail} alt="" className='w-80 lg:w-30 lg:grow'/>
          </div>
        </Link>
      ))}
    </div>
  )
}

export default HomeBanner