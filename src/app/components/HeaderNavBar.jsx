import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { RiArrowDropDownLine } from "react-icons/ri";
import { RiArrowDropUpLine } from "react-icons/ri";
import PageDropDown from './PageDropDown';
import { useShallow } from 'zustand/shallow';
import usePagesStore from '../layouts/providers/usePagesStore';



const HeaderNavBar = () => {
    
    const { isPageDropdownOpen , checkDropDownStatus} = usePagesStore(
        useShallow(state => ({
            isPageDropdownOpen: state.isPageDropdownOpen,
            checkDropDownStatus : state.checkDropDownStatus
        }))
    )
  return (
    <>
        <nav className="hidden md:flex   justify-center items-center gap-3">
        <li className="list-none text-[14px] hover:text-(--accent-secondary) font-medium">
            <NavLink className="active:text-(--accent-secondary)" to="/popular">
                Popular
            </NavLink>
        </li>
        <li className="list-none text-[14px] hover:text-(--accent-secondary) font-medium">
            <NavLink className="active:text-(--accent-secondary)" to="/shop">
                Shop
            </NavLink>
        </li>
        <li onMouseEnter={()=>checkDropDownStatus(true)} onMouseLeave={()=>checkDropDownStatus(false)} className="list-none relative  text-[14px] hover:text-(--accent-secondary) font-medium flex justify-center items-center ">
            Pages 
            <div className={`flex justify-center items-center`}>
            <span className={`transition-transform flex  duration-300 ease-out transform ${isPageDropdownOpen ? "rotate-180" : "rotate-0"}`}>
    <RiArrowDropDownLine className="text-lg size-6"/>
</span>
            </div>
        </li>
            <PageDropDown/>
        <li className="list-none text-[14px] hover:text-(--accent-secondary) font-medium">
            <NavLink className="active:text-(--accent-secondary)" to="/">
                Contact
            </NavLink>
        </li>
      </nav>
            
      
    </>
  )
}

export default HeaderNavBar