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
        <Link to="" key={BannerProd.id} className='flex flex-col-reverse md:flex-row justify-between items-center rounded-lg bg-white grow p-5 '>
          <div className='flex flex-col  gap-10 w-[60%]  lg:w-[40%] justify-around text-center md:text-start'>
              <div className='flex flex-col gap-4 '>
                <h1 className='text-md md:text-xl font-medium hover:text-(--accent-secondary) '>{BannerProd.title}</h1>
                <p className='text-[10px] md:text-[14px]'>{BannerProd.specifications?.display}</p>
              </div>

              <div>
                <p className='text-[8px] md:text-[14px] text-gray-700/80'>LIMITED TIME OFFER</p>
                <div className='flex gap-2 items-center justify-center md:justify-start'>
                  <h3 className='text-md md:text-xl font-medium'>${BannerProd.originalPrice}</h3>
                <span className='line-through text-[10px] md:text-md font-light'>${BannerProd.price}</span>
                </div>
              </div>

          </div>
          <div className=''>
            <img src={BannerProd.thumbnail} alt="" className='w-40 lg:w-60 '/>
          </div>
        </Link>
      ))}
    </div>
  )
}

export default HomeBanner