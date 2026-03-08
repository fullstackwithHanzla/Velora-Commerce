import React from 'react'
import { HiOutlineLocationMarker } from "react-icons/hi";
import { FiPhoneCall } from "react-icons/fi";
import { IoMailOutline } from "react-icons/io5";
import { MdFacebook } from "react-icons/md";
import { FiTwitter } from "react-icons/fi";
import { FaInstagram } from "react-icons/fa";
import { IoLogoLinkedin } from "react-icons/io";
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

const socialMediaLinks = [
  {
    socialType : "facebook",
    icon : MdFacebook,
  },
  {
    socialType : "twiiter",
    icon : FiTwitter,
  },
  {
    socialType : "instagram",
    icon : FaInstagram,
  },
  {
    socialType : "linkedin",
    icon : IoLogoLinkedin,
  },
]


const HelpSupport = () => {
  return (
    <div className='flex flex-col text-[12px] md:text-[14px]'>
      <h3 className='text-lg  font-medium'>
        Help & Support
      </h3>


      <div className='py-3  w-[70%]'>
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
      <div className='flex items-center gap-3'>
        {socialMediaLinks.map(({socialType,icon} , index) => {
          const Icon = icon;
          return (
            <div key={index}>
              <a href="#"><Icon className='size-4 text-gray-600 hover:text-(--accent-secondary)'/></a>
            </div>
          )
        })}
      </div>

      
    </div>
  )
}

export default HelpSupport