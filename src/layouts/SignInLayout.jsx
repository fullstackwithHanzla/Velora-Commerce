import React from 'react'
import SignIn from '../features/auth/components/SignIn'


const SignInLayout = () => {
  return (
    <div className='flex w-full  md:px-10 items-center justify-center m-5 md:m-10'>
      <SignIn/>
    </div>
  )
}

export default SignInLayout