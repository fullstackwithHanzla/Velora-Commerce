
import React, { useState } from 'react'
import HelpSupport from '../../components/Footer/HelpSupport'
import ContactInput from './ContactInput'
import "react-phone-number-input/style.css";
import PhoneInputComponent from './PhoneInputComponent';
const Contact = () => {
  return (
    <div className='flex w-full  md:px-10 items-center   justify-center m-5 md:m-10'>
      <div className='flex w-full gap-5  p-5 md:w-[80%]'>
        <div className='flex flex-col bg-white rounded-md shadow-md gap-3 p-5  '>
          <h3>Contact Information</h3>
          <hr  className='text-gray-600/30'/>
          <HelpSupport flexitems="items-start"/>
        </div>
        <div className=' grow bg-white rounded-md px-5 shadow-md'>
            <div className='flex gap-5'>
                <ContactInput label="First Name" placeholder="First Name" type="text"/> 
                <ContactInput label="Last Name" placeholder="Last Name" type="text"/> 
            </div>
            <div className='flex items-center gap-5'>
                <ContactInput label="Subject" placeholder="Enter Your Subject" type="text"/> 
                <PhoneInputComponent label="Phone" placeholder="Enter Phone Number"/>
            </div>
            <div className='flex items-center gap-5'>
                <div className='flex flex-col grow  my-5 '>
        <div className='flex flex-col gap-1 '>
          <div className='flex'>
            <p className='text-[14px]'>Message</p>
          <span className='text-red-600'>*</span>
          </div>
          <div>
            <textarea className='border border-gray-600/30 rounded-md w-full focus:border-(--accent-secondary) px-5 py-2 text-[14px] outline-none' placeholder='Enter Message'></textarea>
          </div>
        </div> 
          </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Contact