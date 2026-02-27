import React from 'react'
import { Link } from 'react-router-dom'
import usePagesStore from '../layouts/providers/usePagesStore'
import { useShallow } from 'zustand/shallow'

const PagesNavLink = () => {
    const pagesDropDownArray = [
        "Shop without sidebar",
"Checkout",
"Cart",
"Wishlist",
"Sign in",
"Sign up",
"Error",
"Mail Success",
"Privacy Policy",
"Terms & Conditions"
    ]
    
  return (
    <>
        {pagesDropDownArray.map((item) => (
            <Link key={item} to="/popular">
                    <li className="list-none h-10  flex items-center px-3 hover:bg-(--bg-page) rounded-sm  text-[14px] hover:text-(--accent-secondary) font-medium">
                            {item}
                    </li>
            </Link>
        ))}
    </>
  )
}

export default PagesNavLink