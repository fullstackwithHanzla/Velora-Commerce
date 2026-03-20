import React from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import Input from './Input'
import PhoneInputComponent from '../../app/pages/Contact/PhoneInputComponent'
import { billingAddressSchema } from './billingAddressSchema'

const BillingAddress = () => {
    const {register , handleSubmit , formState} = useForm({
        resolver: zodResolver(billingAddressSchema),
        criteriaMode : "all",
        mode : "onChange",
        reValidateMode : "onChange"
    })

    async function onSubmit(data) {
        await new Promise((res) => setTimeout(res,500))
        console.log(data);
    }

    const FirstNameErros = formState.errors?.FirstName?.types ? Object.values(formState.errors?.FirstName?.types) : [];

    const LastNameErrors = formState.errors?.LastName?.types ? Object.values(formState.errors?.LastName?.types) : [];

    const CompanyNameErrors = formState.errors?.CompanyName?.types ? Object.values(formState.errors?.CompanyName?.types) : [];

    const StreetAddressErrors = formState.errors?.StreetAddress?.types ? Object.values(formState.errors?.StreetAddress?.types) : [];

    const AdditionalAddressInfoErrors = formState.errors?.AdditionalAddressInfo?.types ? Object.values(formState.errors?.AdditionalAddressInfo?.types) : [];

    const CityNameErrors = formState.errors?.CityName?.types ? Object.values(formState.errors?.CityName?.types) : [];

    const PhoneErrors = formState.errors?.Phone?.types ? Object.values(formState.errors?.Phone?.types) : [];

    const EmailAddressErrors = formState.errors?.Email?.types ? Object.values(formState.errors?.Email?.types) : [];





  return (
      <div className='rounded-md shadow-md bg-white flex flex-col gap-5 w-full py-5 '>
          <h3 className=' text-[14px] mx-5 md:text-lg font-medium'>Billing Address</h3>
          <hr className='text-gray-600/20' />
          <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col gap-5 px-5'>
            <div className='flex flex-col items-center gap-5 '>
                  <div className='flex flex-col w-full grow gap-2'>
                      <Input register={register} label="First Name" registerValue="FirstName" placeholder='Enter first Name' />
                      {FirstNameErros.map((err, index) => (
                          <li className='mx-5  text-[13px] text-red-600' key={index}>{err}</li>
                      ))}
                  </div>
                  <div className='flex flex-col w-full grow gap-2'>
                      <Input register={register} label="Last Name" registerValue="LastName" placeholder='Enter Last Name' />
                      {LastNameErrors.map((err, index) => (
                          <li className='mx-5  text-[13px] text-red-600' key={index}>{err}</li>
                      ))}
                  </div>
                  
            </div>

                  <Input register={register} label="Company Name" registerValue="CompanyName" placeholder='Enter Company Name' />
                    {CompanyNameErrors.map((err, index) => (
                          <li className='mx-5  text-[13px] text-red-600' key={index}>{err}</li>
                      ))}
                  <Input register={register} label="Street Address" registerValue="StreetAddress" placeholder='House Number and street Name' />
                        {StreetAddressErrors.map((err, index) => (
                          <li className='mx-5  text-[13px] text-red-600' key={index}>{err}</li>
                         ))}
                  <Input register={register} label={false} registerValue="AdditionalAddressInfo" placeholder='Apartment, suite , unit , etc . (optional)' />
                        {AdditionalAddressInfoErrors.map((err, index) => (
                          <li className='mx-5  text-[13px] text-red-600' key={index}>{err}</li>
                         ))}
                  <Input register={register} label="City" registerValue="CityName" placeholder='Enter Town/City Name' />
                    {CityNameErrors.map((err, index) => (
                          <li className='mx-5  text-[13px] text-red-600' key={index}>{err}</li>
                         ))}
                  <Input register={register} label="Phone" registerValue="Phone" placeholder='Enter Phone Number' inputType='number' />
                        {PhoneErrors.map((err, index) => (
                          <li className='mx-5  text-[13px] text-red-600' key={index}>{err}</li>
                         ))}
                  <Input register={register} label="Email" registerValue="Email" placeholder='Enter Email Address' inputType='email' />
                        {EmailAddressErrors.map((err, index) => (
                          <li className='mx-5  text-[13px] text-red-600' key={index}>{err}</li>
                         ))}
                <div className='flex items-center gap-2 text-[14px]'>
                    <input type="checkbox" />
                    <span>Create an Account</span>
                </div>
          </form>
      </div>
  )
}

export default BillingAddress