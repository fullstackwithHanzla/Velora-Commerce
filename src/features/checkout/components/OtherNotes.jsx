import React, { useState } from 'react'

const OtherNotes = () => {
  const maxLengthMessage = 250;
  const [message, setMessage] = useState(0)
  return (
    <div className='shadow-md w-full rounded-md flex flex-col gap-1 bg-white p-5'>
      <p className='text-[14px] py-2 text-gray-600'>Other notes (Optional)</p>
      <textarea  onChange={(e) => setMessage(e.target.value.length)} className='h-30 w-full p-3.5 text-[14px] border border-gray-600/30 rounded-md focus:outline-(--accent-secondary)' placeholder='Notes about your order , e.g. special notes for delivery!'></textarea>
      <div className='flex justify-between items-center'>
        <p className='text-[14px] py-2 text-gray-600'>Message Length :</p>
        <p className={`text-[14px] py-2 text-gray-600 ${message > maxLengthMessage ? "text-red-600":""}`}>{message}/{maxLengthMessage}
          {
            message > maxLengthMessage ? `You are ahead of ${message - maxLengthMessage} letters` : ""
          }
        </p>
      </div>
    </div>
  )
}

export default OtherNotes