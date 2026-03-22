import React from 'react'
import { MdOutlineRocketLaunch } from "react-icons/md";
import { PiRecycle } from "react-icons/pi";
import { BsShieldCheck } from "react-icons/bs";
import { IoChatbubbleEllipsesOutline } from "react-icons/io5";

const aboutDeliveryArray = [
    {
        icon : MdOutlineRocketLaunch,
        heading : "Free Shipping",
        subHeading : "For all orders $200"
    },
    {
        icon : PiRecycle,
        heading : "1 & 1 Returns",
        subHeading : "Cancellation after 1 day",
    },
    {
        icon : BsShieldCheck,
        heading : "100% Secure Payments",
        subHeading : "Gurantee secure payments",
    },
    {
        icon : IoChatbubbleEllipsesOutline,
        heading : "24/7 Dedicated Support",
        subHeading : "Anywhere & anytime",
    },
]

const AboutDelivery = () => {
  return (
    <div className='flex w-full px-5 2xl:w-[53%] justify-evenly lg:justify-between flex-wrap lg:flex-nowrap items-center py-5 gap-3 lg:gap-5'>
        {aboutDeliveryArray.map(({icon,heading,subHeading} , index) => {
            const Icon = icon;
            return (
                <div key={index} className='flex justify-center gap-4  items-center'>
                        <div>
                            {<Icon className='stroke-0 size-5 lg:size-7'/>}
                        </div>
                        <div>
                            <h3 className='text-[10px] lg:text-[12px] font-medium'>{heading}</h3>
                            <p className='text-[8px] lg:text-[10px]'>{subHeading}</p>
                        </div>
                </div>
            )
        })}
    </div>
  )
}

export default AboutDelivery