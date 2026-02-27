import React from 'react'
import { Link } from 'react-router-dom'
import { RiArrowDropDownLine } from "react-icons/ri";
const SidebarLinks = () => {
  return (
    <nav className="flex flex-col justify-start px-3 my-2 gap-2">
        <Link to="/popular">
            <li className="list-none h-10  flex items-center px-3 hover:bg-(--bg-page) rounded-sm  text-[14px] hover:text-(--accent-secondary) font-medium">
                    Popular
            </li>
        </Link>
            <Link to="/shop">
                <li className="list-none text-[14px] h-10  flex items-center px-3 hover:bg-(--bg-page) rounded-sm hover:text-(--accent-secondary) font-medium">
                    Shop
                </li>
            </Link>
        <li className="list-none text-[14px] h-10  flex items-center px-3 hover:bg-(--bg-page) rounded-sm hover:text-(--accent-secondary) font-medium ">
            Pages 
            <div className="flex justify-center items-center ">
                <RiArrowDropDownLine className="size-6 "/>
            </div>
        </li>
        <Link to="/contact">
            <li className="list-none text-[14px] h-10  flex items-center px-3 hover:bg-(--bg-page) rounded-sm hover:text-(--accent-secondary) font-medium">
                Contact
            </li>
        </Link>
      </nav>
  )
}

export default SidebarLinks