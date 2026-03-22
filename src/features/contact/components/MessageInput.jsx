import React from 'react'

const MessageInput = () => {
  return (
    <div className='flex items-center gap-5'>
                <div className='flex flex-col grow  my-5 '>
        <div className='flex flex-col gap-1 '>
          <div className='flex'>
            <p className='text-[14px]'>Message</p>
          <span className='text-red-600'>*</span>
          </div>
          <div>
            <textarea className='border border-gray-600/30 rounded-md w-full focus:border-(--accent-secondary) px-10 py-2 text-[14px] outline-none' required placeholder='Enter Message'></textarea>
          </div>
        </div> 
          </div>
            </div>
  )
}

export default MessageInput