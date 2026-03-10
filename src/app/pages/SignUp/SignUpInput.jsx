import React from 'react'
import { useForm, useFormState } from 'react-hook-form'
import SignUpInputComponent from './SignUpInputComponent';
import LoadingCircle from '../../../shared/ui/LoadingCircle';
import {z} from 'zod'
import { zodResolver } from '@hookform/resolvers/zod';
import { signUpSchema } from './signUpSchema';

const SignUpInput = () => {

  

  const {register,handleSubmit , formState } = useForm({
    resolver : zodResolver(signUpSchema),
      mode : "onSubmit",
      reValidateMode : "onChange",
      criteriaMode : "all"
    })
  
  const FullNameErrors = formState.errors.FullName?.types? Object.values(formState.errors.FullName?.types).flat(): []
  const EmailErrors = formState.errors.Email?.types? Object.values(formState.errors.Email?.types).flat(): []
  
  const onSubmit = async (data) => {
    await new Promise(res => setTimeout(res,500))
    console.log(data);
  }
  
  return (
    <>
      <form className='flex flex-col justify-evenly gap-2' onSubmit={handleSubmit(onSubmit)}>
              <SignUpInputComponent register={register}  label="Full Name" inputType='text' placeholder='Full Name' registerValue="FullName"/>
              <ol className=' px-5 '>
                {FullNameErrors.length > 0 && FullNameErrors.map((error , index) => (
                  <li key={index} className='text-red-600 my-1 list-disc text-[12px]'>{error}</li>
                ))}
              </ol>
              <SignUpInputComponent register={register} label="Email" inputType='email' placeholder='Email' registerValue="Email"/>
              <ol className=' px-5 '>
                {EmailErrors.length > 0 && EmailErrors.map((error , index) => (
                  <li key={index} className='text-red-600 my-1 list-disc text-[12px]'>{error}</li>
                ))}
              </ol>
              <SignUpInputComponent register={register} label="Password" inputType='password' 
              placeholder='Password' 
              passwordIcon={true}
              registerValue="Password"/>
              <SignUpInputComponent register={register} label="Confirm Password" inputType='password' placeholder='Confirm Password' 
              passwordIcon={true}
              registerValue="ConfirmPassword"/>
          <button type='submit' className={`border text-white py-3 rounded-lg transition-colors flex items-center justify-center gap-3 duration-300 text-[13px] ease-in-out hover:bg-(--accent-secondary) ${formState.isSubmitting ? "bg-gray-600":"bg-(--accent-primary)"}`} disabled={formState.isSubmitting}>{formState.isSubmitting? <><span>Creating Account</span><LoadingCircle/></>: "Create Account"}</button>
          
      </form>
    </>
  )
}

export default SignUpInput