import React from 'react'
import { useForm, useFormState } from 'react-hook-form'
import SignUpInputComponent from './SignUpInputComponent';
import LoadingCircle from '../../../shared/ui/LoadingCircle';


const SignUpInput = () => {
  const {handleSubmit , formState } = useForm();

  
  
  const onSubmit = async (data) => {
    await new Promise(res , setTimeout(res,500))
    console.log(data);
  }
  // const {isSubmitting} = useFormState()
  
  return (
    <>
      <form className='flex flex-col justify-evenly gap-2' onSubmit={handleSubmit(onSubmit)}>
              <SignUpInputComponent label="Full Name" inputType='text' placeholder='Full Name' register="FullName"/>
              <SignUpInputComponent label="Email" inputType='email' placeholder='Email' register="Email"/>
              <SignUpInputComponent label="Password" inputType='password' 
              placeholder='Password' 
              passwordIcon={true}
              register="Password"/>
              <SignUpInputComponent label="Confirm Password" inputType='password' placeholder='Confirm Password' 
              passwordIcon={true}
              register="ConfirmPassword"/>
          <button type='submit' className={`border text-white py-3 rounded-md transition-colors flex items-center justify-center gap-3 duration-300 text-[13px] ease-in-out hover:bg-(--accent-secondary) ${formState.isSubmitting ? "bg-gray-600":"bg-(--accent-primary)"}`} disabled={formState.isSubmitting}>{formState.isSubmitting? <><span>Creating Account</span><LoadingCircle/></>: "Create Account"}</button>
          
      </form>
    </>
  )
}

export default SignUpInput