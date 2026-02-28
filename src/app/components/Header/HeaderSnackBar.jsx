import React, { useState } from 'react'
import { CiSearch } from "react-icons/ci";
import { LuUser } from "react-icons/lu";
import { CiHeart } from "react-icons/ci";
import { PiBagSimpleLight } from "react-icons/pi";
import { IoMdMenu } from "react-icons/io";
import { Link } from 'react-router-dom';
import { RxCross2 } from "react-icons/rx";
import { useShallow } from 'zustand/shallow';
import useSideBarStore from '../../layouts/providers/useSideBarStore';
import useSearchStore from '../../layouts/providers/useSearchStore';
import SearchInput from './SnackbarSearchInput/SearchInput';


const HeaderSnackBar = () => {
    const {isSideBarOpen , checkSideBarStatus} = useSideBarStore(
        useShallow((state) => ({
            isSideBarOpen : state.isSideBarOpen,
            checkSideBarStatus : state.checkSideBarStatus
        }))
    )
    const checkSearchInputStatus = useSearchStore((state) => state.checkSearchInputStatus)

  return (
    <div className='flex gap-3 justify-center items-center'>
        <CiSearch onClick={checkSearchInputStatus} className='stroke-0 relative size-5 sm:size-6 hover:text-(--accent-secondary)'/>
        <SearchInput/>
       <Link to="/dashboard">
            <LuUser className='stroke-1 size-5 sm:size-6 hover:text-(--accent-secondary)'/>
       </Link> 
        <div className="relative">
            <Link to="/wishlist">
            <CiHeart className='stroke-0 size-5 sm:size-6 hover:text-(--accent-secondary)'/>
            <div className='absolute bg-red-600 flex justify-center items-center rounded-full bottom-3 left-3 size-4 sm:size-5'>
                <span className='text-white text-[12px]'>0</span>
            </div>
        </Link>
        </div>
        <div className="relative flex">
            <button>
            <PiBagSimpleLight className='stroke-1  size-5 sm:size-6 hover:text-(--accent-secondary)'/>
            <div className='absolute bg-red-600 flex justify-center items-center rounded-full bottom-3 left-3 size-4 sm:size-5'>
                <span className='text-white text-[12px]'>0</span>
            </div>
        </button>
        </div>
        <button onClick={checkSideBarStatus}>
            {!isSideBarOpen?
            <IoMdMenu className='opacity-60 size-7 sm:size-8 block hover:text-(--accent-secondary) hover:opacity-100 md:hidden'/>
            :
            <RxCross2 className='opacity-60 size-7 sm:size-8 block hover:text-(--accent-secondary) hover:opacity-100 md:hidden'/>
        }
        </button>
    </div>
  )
}

export default HeaderSnackBar