import React from 'react'
import { HiOutlineLocationMarker } from "react-icons/hi";
import { FiPhoneCall } from "react-icons/fi";
import { IoMailOutline } from "react-icons/io5";

 const contactArray = [
  {
    label: "685 Market Street, Las Vegas, LA 95820, United States",
    href: "https://maps.google.com/?q=685+Market+Street+Las+Vegas",
    type: "location",
  },
  {
    label: "(+099) 532-786-9843",
    href: "tel:+0995327869843",
    type: "phone",
  },
  {
    label: "support@example.com",
    href: "mailto:support@example.com",
    type: "email",
  },
];

const iconMap = {
  location: HiOutlineLocationMarker,
  phone: FiPhoneCall,
  email: IoMailOutline,
};


const HelpSupport = () => {
  return (
    <div className='flex flex-col  text-[12px] md:text-[14px]'>
      <h3 className='text-lg  font-medium'>
        Help & Support
      </h3>


      <div className='py-3 w-[70%]'>
        {contactArray.map(({label,type , href} , index) => {
        const Icon = iconMap[type];
        return (
          <div key={index} className='flex items-start gap-1 mt-3'>
          <div>{<Icon className="size-6 text-(--accent-secondary)"/>}</div>
          <a href={href} target='blanked' className='text-gray-600/80 w-[80%]wrap-break-words'>{label}</a>
        </div>
        )
      })}
      </div>

      
    </div>
  )
}

export default HelpSupport