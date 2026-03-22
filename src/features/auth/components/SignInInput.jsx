import React, { useState } from 'react'
import SignInInputComponent from './SignInInputComponent'
import { useForm } from 'react-hook-form'
import { useToast } from '../../../layouts/providers/ToastProvider'
import { zodResolver } from '@hookform/resolvers/zod'
import LoadingCircleMini from '../../../shared/components/LoadingCircleMini'
import { Link, useNavigate } from 'react-router-dom'
import SignInMethods from './SignInMethods'
import { signInSchema }  from './signInSchema'

const SignInInput = () => {

    const {showToast} = useToast()

    const navigate = useNavigate()
    

  const {register,handleSubmit , formState ,setValue } = useForm({
    resolver : zodResolver(signInSchema),
      mode : "onSubmit",
      reValidateMode : "onChange",
      criteriaMode : "all"
    })

    const onSubmit = async (data) => {
    await new Promise(res => setTimeout(res,500))
        showToast({
      message : "Authentication is not connected yet. SignIn is currently disabled",
      type : "info",
      duration : 4000,
    })
    
  }


  function quickUserLogin() {
    setValue("Email","user@gmail.com")
    setValue("Password","userPassword123@j786")

    handleSubmit(onSubmit)()
  }
  function quickAdminLogin() {
    setValue("Email","admin@gmail.com")
    setValue("Password","adminPassword123@j786")

    handleSubmit(onSubmit)()
  }

  
  

  const EmailErrors = formState.errors.Email?.types? Object.values(formState.errors.Email?.types).flat(): []
  const PasswordErrors = formState.errors.Password?.types? Object.values(formState.errors.Password?.types).flat(): []


  return (
    <form className='flex flex-col  justify-evenly gap-2' onSubmit={handleSubmit(onSubmit)}>
              
              <SignInInputComponent register={register} label="Email" inputType='email' placeholder='Email' registerValue="Email"/>
              <ol className=' px-5 '>
                {EmailErrors.length > 0 && EmailErrors.map((error , index) => (
                  <li key={index} className='text-red-600 my-1 list-disc text-[12px]'>{error}</li>
                ))}
              </ol>
              <SignInInputComponent register={register} label="Password" inputType='password' 
              placeholder='Password' 
              passwordIcon={true}
              registerValue="Password"/>
              <ol className=' px-5 '>
                {PasswordErrors.length > 0 && PasswordErrors.map((error , index) => (
                  <li key={index} className='text-red-600 my-1 list-disc text-[12px]'>{error}</li>
                ))}
              </ol>
             
          <button type='submit' className={`border text-white py-3 rounded-lg transition-colors flex items-center justify-center gap-3 duration-300 text-[13px] ease-in-out hover:bg-(--accent-secondary) ${formState.isSubmitting ? "bg-gray-600":"bg-(--accent-primary)"}`} disabled={formState.isSubmitting}>{formState.isSubmitting? <><span>Signing In</span><LoadingCircleMini/></>: "Sign In"}</button>

          <div className='flex gap-2'>
            <button type='button' onClick={quickUserLogin} className={`border text-white py-3 rounded-lg transition-colors grow flex items-center justify-center gap-3 duration-300 text-[13px] ease-in-out hover:bg-blue-700 ${formState.isSubmitting ? "bg-gray-600":"bg-(--accent-secondary)"}`} disabled={formState.isSubmitting}>Quick User Login</button>
              <button type='button' onClick={quickAdminLogin} className={`border text-white py-3 rounded-lg transition-colors grow flex items-center justify-center gap-3 duration-300 text-[13px] ease-in-out hover:bg-(--accent-secondary) ${formState.isSubmitting ? "bg-gray-600":"bg-(--accent-primary)"}`} disabled={formState.isSubmitting}>Quick Admin Login</button>
          </div>

          <Link to="/forgot-password" className='flex p-2 items-center justify-center text-gray-600 text-[14px] hover:text-(--accent-secondary)'>Forgot Your Password?</Link>

            <div className='flex items-center gap-3 w-full my-5'>
                <div className='flex-1 h-px bg-gray-600/20 font-medium'></div>
                    <span className='text-sm text-gray-600 font-light'>Or</span>
                <div className='flex-1 h-px bg-gray-600/20 font-medium'></div>
            </div>

            <SignInMethods/>

            <div className=' text-center text-[10px] sm:text-[14px] my-5'>
                <p>Don't have an account?<Link className='text-(--accent-secondary) px-2' to="/sign-up">Sign Up Now!</Link></p>
            </div>
      </form>
  )
}

export default SignInInput