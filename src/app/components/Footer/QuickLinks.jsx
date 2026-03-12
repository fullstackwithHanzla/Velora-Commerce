import React from 'react'
import { Link } from 'react-router-dom';

const QuickLinks = () => {
 const quickLinksArray = [
  {
    label: "Privacy Policy",
    href: "/privacy-policy",
  },
  {
    label: "Refund Policy",
    href: "/terms-&-conditions",
  },
  {
    label: "Terms of Use",
    href: "/terms-&-conditions",
  },
  {
    label: "FAQ's",
    href: "/terms-&-conditions",
  },
  {
    label: "Contact",
    href: "/contact",
  },
];
  return (
    <div className='flex flex-col   gap-3  text-[12px] md:text-[14px]'>
      <h3 className='text-lg font-medium'>
        Quick Links
      </h3>
      <div className='mt-3 flex flex-col gap-3'>

      {quickLinksArray.map(({label,href} , index) => {
        return (
            <Link key={index} to={href} className='hover:text-(--accent-secondary) text-gray-600/80'>
            {label}
        </Link>
        )
      })}
      </div>
    </div>
  )
}

export default QuickLinks