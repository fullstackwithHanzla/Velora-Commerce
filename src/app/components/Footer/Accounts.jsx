import React from 'react'
import { Link } from 'react-router-dom'
const accountsArray = [
  {
    label: "Login / Register",
    href: "/login",
  },
  {
    label: "Cart",
    href: "/cart",
  },
  {
    label: "Wishlist",
    href: "/wishlist",
  },
  {
    label: "Shop",
    href: "/shop",
  },
];

const Accounts = () => {
  return (
    <div className='flex flex-col gap-3  text-[12px] md:text-[14px]'>
      <h3 className='text-lg font-medium'>
        Accounts
      </h3>
      <div className='mt-3 flex flex-col gap-3'>

      {accountsArray.map(({label,href} , index) => {
        return (
            <Link key={index} to={`/${href}`} className='hover:text-(--accent-secondary) text-gray-600/80'>
            {label}
        </Link>
        )
      })}
      </div>
    </div>
  )
}

export default Accounts