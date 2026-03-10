import React from 'react'
import { TermsData } from '../../../features/settings/TermsData'

const TermsInformation = () => {
  return (
    <div className='flex flex-col w-[90%] px-10  lg:w-[65%]  gap-10 mb-20 '>
          <div className='flex items-center justify-center text-center flex-col  my-20 md:m-20 gap-5'>
            <h1 className='text-2xl md:text-4xl font-medium self-center'>Terms And Conditions</h1>
          <p className='text-[10px] md:text-[16px] text-gray-600'>
            Welcome to Velora commerce ("we," "our," or "us"). These Terms and Conditions govern your use of our website, mobile application, and services (collectively, the "Services").
          </p>
          </div>
          <ol className='flex flex-col gap-10'>
            {TermsData?.map((t) => (
            <div key={t.title} className='flex flex-col gap-5'>
              <li className='text-lg list-decimal md:text-2xl font-medium'>{t.title}</li>
    
              <ol className='pl-5 flex flex-col gap-2'>
                {Array.isArray(t.content) ? t.content.map((c) => (
                  <li key={c} className='text-[12px] md:text-[16px] list-decimal  font-light'>{c}</li>
              )) : <p className='text-[12px] md:text-[16px] list-decimal  font-light'>{t.content}</p>}
              </ol>
            </div>
          ))}
          </ol>
        </div>
  )
}

export default TermsInformation