
import React, { useState } from 'react'
import HelpSupport from '../../components/Footer/HelpSupport'
import ContactInput from './ContactInput'
import "react-phone-number-input/style.css";
import PhoneInputComponent from './PhoneInputComponent';
import MessageInput from './MessageInput';
import { useToast } from '../../layouts/providers/ToastProvider'
const Contact = () => {
    const {showToast} = useToast()

    function handleSubmitButton(e) {
      e.preventDefault()
      showToast({
        message : "Message submission is currently disabled. Backend integration is coming soon.",
        type : "info"
      })
    }

  return (
    <div className='flex w-full  md:px-10 items-center   justify-center m-5 md:m-10'>
      <div className='flex flex-col w-full gap-5  md:p-5 md:w-[90%] xl:flex-row'>
        <div className='flex flex-col bg-white rounded-md shadow-md gap-3 p-5  '>
          <h3>Contact Information</h3>
          <hr  className='text-gray-600/30'/>
          <HelpSupport flexitems="items-start"/>
        </div>
        <form onSubmit={(e)=> handleSubmitButton(e)}className=' grow bg-white rounded-md px-5 shadow-md'>
            <div className='flex flex-col md:flex-row md:gap-5'>
                <ContactInput label="First Name" placeholder="First Name" type="text"/> 
                <ContactInput label="Last Name" placeholder="Last Name" type="text"/> 
            </div>
            <div className='flex flex-col md:flex-row md:items-center md:gap-5'>
                <ContactInput label="Subject" placeholder="Enter Your Subject" type="text"/> 
                <PhoneInputComponent label="Phone" placeholder="Enter Phone Number"/>
            </div>
              <MessageInput/>
            <div className='my-5 flex  '>
                <button type='submit'  className=' py-3 grow rounded-md bg-(--accent-primary) text-white text-[14px] transition-colors duration-300 ease-in-out hover:bg-(--accent-secondary)'>Send Message</button>
            </div>
        </form>
      </div>
    </div>
  )
}

export default Contact