import React from 'react'
import { privacyPolicyData } from '../../../features/settings/PrivacyPolicyData';

const PrivacyPolicayInfo = () => {


  return (
    <div className='flex flex-col w-full mx-5 px-10 lg:w-[65%] gap-10 mb-20 '>
      <h1 className='text-2xl md:text-4xl font-medium self-center m-10'>Privacy Policy</h1>
      <ol className='flex flex-col gap-10'>
        {privacyPolicyData?.map((p) => (
        <div key={p.title} className='flex flex-col gap-5'>
          <li className='text-lg list-decimal md:text-2xl font-medium'>{p.title}</li>

          <ol className='pl-5 flex flex-col gap-2'>
            {Array.isArray(p.content) ? p.content.map((c) => (
              <li key={c} className='text-[14px] md:text-[16px] list-decimal  font-light'>{c}</li>
          )) : <p className='text-[14px] md:text-[16px] list-decimal  font-light'>{p.content}</p>}
          </ol>
        </div>
      ))}
      </ol>
    </div>
  )
}

export default PrivacyPolicayInfo