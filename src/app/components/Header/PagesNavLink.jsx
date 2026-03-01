import React from 'react'
import { Link } from 'react-router-dom'



const PagesNavLink = ({blogs = false}) => {
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
    const blogsDropDownArray = [
        "Blog Grid",
        "Blog Grid with Sidebar",
        "Blog details with sidebar",
        "Blog Details"
    ]

    const arrayToRender = blogs ? blogsDropDownArray : pagesDropDownArray
    
  return (
    <>
        {arrayToRender.map((item) => (
            <Link key={item} to={`/${item.toLowerCase().replace(/\s/g, '-')}`}>
                    <li className="list-none h-7  flex items-center px-3 hover:bg-(--bg-page) rounded-sm  text-[14px] hover:text-(--accent-secondary) font-medium">
                            {item}
                    </li>
            </Link>
        ))}
    </>
  )
}

export default PagesNavLink