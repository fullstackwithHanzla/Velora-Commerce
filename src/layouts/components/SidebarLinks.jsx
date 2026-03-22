import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { RiArrowDropDownLine } from "react-icons/ri";
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
const SidebarLinks = ({ onNavigate = () => {} }) => {
    const [sidebarPagesActive,setSidebarPagesActive] = useState(false)
    const [sidebarBlogsActive,setSidebarBlogsActive] = useState(false)
  return (
    <nav className="flex flex-col gap-2 px-3 py-3">
        <Link to="/popular" onClick={onNavigate}>
            <li className="list-none h-10  flex items-center px-3 hover:bg-black/5 rounded-sm  text-[13px]  hover:text-(--accent-secondary) font-medium">
                    Popular
            </li>
        </Link>
            <Link to="/shop" onClick={onNavigate}>
                <li className="list-none text-[13px]  h-10  flex items-center px-3 hover:bg-black/5 rounded-sm hover:text-(--accent-secondary) font-medium">
                    Shop
                </li>
            </Link>
        <div className="flex flex-col">
            <li
              role="button"
              tabIndex={0}
              onClick={() =>setSidebarPagesActive(!sidebarPagesActive)}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault()
                  setSidebarPagesActive((v) => !v)
                }
              }}
              className='flex  justify-between items-center w-full h-10 list-none px-3 text-[13px]   hover:bg-black/5 rounded-sm hover:text-(--accent-secondary) font-medium cursor-pointer'
            >
                pages
                <span className="flex justify-center items-center">
                    <RiArrowDropDownLine className={`size-6  transition-transform duration-300  ${sidebarPagesActive? "rotate-180" : ""}`}/>
                </span>
            </li>
            {/* Large max-height so all links stay in flow; outer sidebar scrolls when both dropdowns are open */}
            <div className={`flex flex-col overflow-hidden pt-2 gap-2 transition-[max-height] duration-300 ease-in-out
      ${sidebarPagesActive ? "max-h-[2000px] opacity-100" : "max-h-0 opacity-0"}`}>
                {pagesDropDownArray.map((item) => (
                        <Link key={item} to={`/${item.toLowerCase().replace(/\s/g, '-')}`} className='px-3' onClick={onNavigate}>
                                <li className="list-none h-8  flex items-center px-3 hover:bg-black/5 rounded-sm  text-[13px]  hover:text-(--accent-secondary) font-normal">
                                        {item}
                                </li>
                        </Link>
                    ))}
            </div>
        </div>
        <div className="flex flex-col">
            <li
              role="button"
              tabIndex={0}
              onClick={() =>setSidebarBlogsActive(!sidebarBlogsActive)}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault()
                  setSidebarBlogsActive((v) => !v)
                }
              }}
              className='flex  justify-between items-center w-full h-10 list-none px-3 text-[13px]   hover:bg-black/5 rounded-sm hover:text-(--accent-secondary) font-medium cursor-pointer'
            >
                blogs
                <span className="flex justify-center items-center">
                    <RiArrowDropDownLine className={`size-6  transition-transform duration-300  ${sidebarBlogsActive? "rotate-180" : ""}`}/>
                </span>
            </li>
            <div className={`flex flex-col overflow-hidden pt-2 gap-2 transition-[max-height] duration-300 ease-in-out
      ${sidebarBlogsActive ? "max-h-[2000px] opacity-100" : "max-h-0 opacity-0"}`}>
                {blogsDropDownArray.map((item) => (
                        <Link key={item} to={`/${item.toLowerCase().replace(/\s/g, '-')}`} className='px-3' onClick={onNavigate}>
                                <li className="list-none h-8  flex items-center px-3 hover:bg-black/5 rounded-sm  text-[13px]  hover:text-(--accent-secondary) font-normal">
                                        {item}
                                </li>
                        </Link>
                    ))}
            </div>
        </div>
        <Link to="/contact" onClick={onNavigate}>
            <li className="list-none text-[13px]  h-10  flex items-center px-3 hover:bg-black/5 rounded-sm hover:text-(--accent-secondary) font-medium">
                Contact
            </li>
        </Link>
        
      </nav>
  )
}

export default SidebarLinks