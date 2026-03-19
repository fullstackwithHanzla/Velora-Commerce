import React from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import Input from './Input'
import PhoneInputComponent from '../../app/pages/Contact/PhoneInputComponent'

const BillingAddress = () => {
    const {register , handleSubmit} = useForm({
        // resolver : zodResolver(),
        criteriaMode : "all",
        mode : "onSubmit",
        reValidateMode : "onChange"
    })

    async function onSubmit(data) {
        await new Promise((res) => setTimeout(res,500))
        console.log(data);
    }
  return (
      <div className='rounded-md shadow-md bg-white flex flex-col gap-5 w-full py-5 '>
          <h3 className=' text-[14px] mx-5 md:text-lg font-medium'>Billing Address</h3>
          <hr className='text-gray-600/20' />
          <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col gap-5 px-5'>
            <div className='flex items-center gap-5 '>
                  <Input register={register} label="First Name" registerValue="FirstName" placeholder='Enter first Name' />
                  <Input register={register} label="Last Name" registerValue="LastName" placeholder='Enter Last Name' />
            </div>

                  <Input register={register} label="Company Name" registerValue="CompanyName" placeholder='Enter Company Name' />
                  <Input register={register} label="Street Address" registerValue="StreetAddress" placeholder='House Number and street Name' />
                  <Input register={register} label={false} registerValue="AdditionalAddressInfo" placeholder='Apartment, suite , unit , etc . (optional)' />
                  <Input register={register} label="City" registerValue="CityName" placeholder='Enter Town/City Name' />
                  <Input register={register} label="Phone" registerValue="Phone" placeholder='Enter Phone Number' />
                  <Input register={register} label="Email" registerValue="Email" placeholder='Enter Email Address' inputType='email' />
                <div className='flex items-center gap-2 text-[14px]'>
                    <input type="checkbox" />
                    <span>Create an Account</span>
                </div>
          </form>
      </div>
  )
}

export default BillingAddress