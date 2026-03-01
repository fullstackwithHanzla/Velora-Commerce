import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { RiArrowDropDownLine } from "react-icons/ri";
import PagesNavLink from './PagesNavLink';
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
const SidebarLinks = () => {
    const [sidebarPagesActive,setSidebarPagesActive] = useState(false)
    const [sidebarBlogsActive,setSidebarBlogsActive] = useState(false)
  return (
    <nav className="flex flex-col px-3 my-2 gap-2">
        <Link to="/popular">
            <li className="list-none h-10  flex items-center px-3 hover:bg-black/5 rounded-sm  text-[13px]  hover:text-(--accent-secondary) font-medium">
                    Popular
            </li>
        </Link>
            <Link to="/shop">
                <li className="list-none text-[13px]  h-10  flex items-center px-3 hover:bg-black/5 rounded-sm hover:text-(--accent-secondary) font-medium">
                    Shop
                </li>
            </Link>
        <div className="flex flex-col">
            <li onClick={() =>setSidebarPagesActive(!sidebarPagesActive)} className='flex  justify-between items-center w-full h-10 list-none px-3 text-[13px]   hover:bg-black/5 rounded-sm hover:text-(--accent-secondary) font-medium' >
                pages
                <span className="flex justify-center items-center">
                    <RiArrowDropDownLine className={`size-6  transition-transform duration-300  ${sidebarPagesActive? "rotate-180" : ""}`}/>
                </span>
            </li>
            <div className={`flex flex-col overflow-hidden pt-2 gap-2 transition-[max-height] duration-600 ease-in-out
      ${sidebarPagesActive ? "max-h-120 opacity-100" : "max-h-0 opacity-0"}`}>
                {pagesDropDownArray.map((item) => (
                        <Link key={item} to={`/${item.toLowerCase().replace(/\s/g, '-')}`} className='px-3'>
                                <li className="list-none h-8  flex items-center px-3 hover:bg-black/5 rounded-sm  text-[13px]  hover:text-(--accent-secondary) font-normal">
                                        {item}
                                </li>
                        </Link>
                    ))}
            </div>
        </div>
        <div className="flex flex-col">
            <li onClick={() =>setSidebarBlogsActive(!sidebarBlogsActive)} className='flex  justify-between items-center w-full h-10 list-none px-3 text-[13px]   hover:bg-black/5 rounded-sm hover:text-(--accent-secondary) font-medium' >
                blogs
                <span className="flex justify-center items-center">
                    <RiArrowDropDownLine className={`size-6  transition-transform duration-300  ${sidebarBlogsActive? "rotate-180" : ""}`}/>
                </span>
            </li>
            <div className={`flex flex-col overflow-hidden pt-2 gap-2 transition-[max-height] duration-600 ease-in-out
      ${sidebarBlogsActive ? "max-h-120 opacity-100" : "max-h-0 opacity-0"}`}>
                {blogsDropDownArray.map((item) => (
                        <Link key={item} to={`/${item.toLowerCase().replace(/\s/g, '-')}`} className='px-3'>
                                <li className="list-none h-8  flex items-center px-3 hover:bg-black/5 rounded-sm  text-[13px]  hover:text-(--accent-secondary) font-normal">
                                        {item}
                                </li>
                        </Link>
                    ))}
            </div>
        </div>
        <Link to="/contact">
            <li className="list-none text-[13px]  h-10  flex items-center px-3 hover:bg-black/5 rounded-sm hover:text-(--accent-secondary) font-medium">
                Contact
            </li>
        </Link>
        
      </nav>
  )
}

export default SidebarLinks