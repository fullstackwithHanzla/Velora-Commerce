import React, { memo } from 'react'

const SignUpMethods = memo(({children , icon}) => {
    const SignUpMethodIcon = icon
  return (
    <button className='flex border border-gray-600/20 rounded-md items-center justify-center  grow py-2 gap-2 bg-gray-300/5 hover:bg-gray-300/15'>
        <SignUpMethodIcon className="size-4 md:size-6"/>
        <span className='text-[12px] md:text-[14px]'>{children}</span>
    </button>
  )
})

export default SignUpMethods