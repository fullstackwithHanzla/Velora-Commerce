import React from 'react'
import useSearchStore from '../../../layouts/providers/useSearchStore'
import { useShallow } from 'zustand/shallow'
import SearchFilter from './SearchFilter'
import { RxCross2 } from 'react-icons/rx'
import SearchProducts from './SearchProducts'

const SearchInput = () => {
    const {isSearchInputActive , checkSearchInputStatus} = useSearchStore(
        useShallow((state) => ({
            isSearchInputActive : state.isSearchInputActive,
            checkSearchInputStatus : state.checkSearchInputStatus
        }))
    )
  return (
    <div onClick={checkSearchInputStatus} className={`
        absolute inset-0 min-h-screen border backdrop-blur-[1px] opacity-0 bg-black/50 h-full flex  justify-center z-49 items-center  
        ${isSearchInputActive? "opacity-100 " : "opacity-0 pointer-events-none"}
    `}>
        <div onClick={(e) => e.stopPropagation()} className={` bg-(--bg-card) shadow-lg  h-[93%] w-[97%] md:w-[90%] absolute flex flex-col z-50  rounded-4xl `}>

            <div onClick={checkSearchInputStatus} className='absolute inset-0 left-auto -top-3 -right-3 md:-right-5 md:-top-5 z-100  shadow-lg  bg-white h-10 w-10 md:h-15  md:w-15 rounded-full flex justify-center items-center '>
            <RxCross2 className='size-6'/>
            </div>
            <SearchFilter/>
            <hr className='text-black/20'/>
            <SearchProducts/>
        </div>
    </div>
  )
}

export default SearchInput