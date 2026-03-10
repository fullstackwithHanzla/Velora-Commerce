import React from 'react'
import SignUpMethods from './SignUpMethods'
import { FcGoogle } from "react-icons/fc";
import { GrGithub } from "react-icons/gr";
import { AiOutlineMail } from "react-icons/ai";
import { FaApple } from "react-icons/fa6";
import SignUpInput from './SignUpInput';
import { Link } from 'react-router-dom';
const SignUp = () => {
  return (
    <div className='bg-white rounded-xl w-full sm:w-140 flex flex-col gap-4 p-5'>
      <div className='flex flex-col gap-2 m-5 items-center text-center'>
        <h3 className='text-lg md:text-xl font-medium'>Create an Account</h3>
        <p className='text-[12px] md:text-[14px] text-gray-600 font-light'>Enter your details below</p>
      </div>
      <SignUpMethods method="Google" icon={FcGoogle}>Sign Up with Google</SignUpMethods>
      <SignUpMethods method="Github" icon={GrGithub}>Sign Up with Github</SignUpMethods>
      <SignUpMethods method="Email" icon={AiOutlineMail}>Sign Up with Email</SignUpMethods>
      <SignUpMethods method="Apple" icon={FaApple}>Sign Up with Apple</SignUpMethods>

      <div className='flex items-center gap-3 w-full my-5'>
        <div className='flex-1 h-px bg-gray-600/20 font-medium'></div>
          <span className='text-sm text-gray-600 font-light'>Or</span>
        <div className='flex-1 h-px bg-gray-600/20 font-medium'></div>
      </div>

      <SignUpInput/>
      <div className=' text-center text-[10px] sm:text-[14px]'>
        <p>Already have an account?<Link className='text-(--accent-secondary) px-2' to="/sign-in">Sign in Now!</Link></p>
      </div>
    </div>
  )
}

export default SignUp