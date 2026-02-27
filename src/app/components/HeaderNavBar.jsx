import React from 'react'
import { Link } from 'react-router-dom'
import { RiArrowDropDownLine } from "react-icons/ri";

const HeaderNavBar = () => {
  return (
    <nav className="hidden md:flex  justify-center items-center gap-3">
        <li className="list-none text-[14px] hover:text-(--accent-secondary) font-medium">
            <Link to="/popular">
                Popular
            </Link>
        </li>
        <li className="list-none text-[14px] hover:text-(--accent-secondary) font-medium">
            <Link to="/shop">
                Shop
            </Link>
        </li>
        <li className="list-none text-[14px] hover:text-(--accent-secondary) font-medium flex justify-center items-center ">
            Pages 
            <div className="flex justify-center items-center ">
                <RiArrowDropDownLine className="size-6 "/>
            </div>
        </li>
        <li className="list-none text-[14px] hover:text-(--accent-secondary) font-medium">
            <Link to="/">
                Contact
            </Link>
        </li>
      </nav>
  )
}

export default HeaderNavBar