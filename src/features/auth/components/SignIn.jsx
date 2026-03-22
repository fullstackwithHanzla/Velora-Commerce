import React from 'react'
import SignInInput from './SignInInput'

const SignIn = () => {
  return (
    <div className='bg-white rounded-xl w-full sm:w-140 flex flex-col gap-4 p-5'>
      <div className='flex flex-col gap-2 m-5 items-center text-center'>
        <h3 className='text-lg md:text-xl font-medium'>Sign In to Your Account</h3>
        <p className='text-[12px] md:text-[14px] text-gray-600 font-light'>Enter your details below</p>
      </div>
        <SignInInput/>
    </div>
  )
}

export default SignIn